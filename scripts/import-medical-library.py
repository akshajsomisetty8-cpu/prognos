"""Build a provenance-preserving patient directory from official downloaded bulk exports.
Usage: python3 scripts/import-medical-library.py /absolute/path/to/download-directory
Inputs: medline-topics.xml, genetics.xml, gard.csv. No network requests.
"""
from pathlib import Path
import sys,xml.etree.ElementTree as ET,csv,json,re,html,unicodedata,hashlib,collections
from html.parser import HTMLParser
root=Path(__file__).resolve().parents[1]; inputs=Path(sys.argv[1]); out=root/'dist'
class Text(HTMLParser):
 def __init__(self):super().__init__();self.parts=[]
 def handle_data(self,t):self.parts.append(t)
 def handle_endtag(self,t):
  if t in ('p','li','h1','h2','h3','h4','div'):self.parts.append('\n\n')
def plain(s):
 p=Text();p.feed(s);return re.sub(r'[ \t]+',' ',''.join(p.parts)).strip()
def norm(s):return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFKD',s).encode('ascii','ignore').decode().lower())
def safe(u):return u if u and u.startswith(('https://','http://')) else ''
entries={};details={}
def add(name,aliases,groups,kind,source,summary='',sections=None,resources=None):
 key=norm(name)
 if not key:return
 if key not in entries:
  rid='topic-'+hashlib.sha256(key.encode()).hexdigest()[:14]
  entries[key]={'id':rid,'name':name,'aliases':[],'groups':[],'kinds':[],'sources':[],'excerpt':'','hasSummary':False}
  details[rid]={'summaries':[],'resources':[]}
 e=entries[key];d=details[e['id']]
 e['aliases']=list(dict.fromkeys(e['aliases']+aliases));e['groups']=list(dict.fromkeys(e['groups']+groups));e['kinds']=list(dict.fromkeys(e['kinds']+[kind]))
 if source not in e['sources']:e['sources'].append(source)
 if summary:
  d['summaries'].append({'source':source,'text':summary,'sections':sections or []});e['hasSummary']=True;e['searchText']=(e.get('searchText','')+' '+summary).strip()
  if not e['excerpt']:e['excerpt']=summary[:230]+('…' if len(summary)>230 else '')
 for r in resources or []:
  if r['url'] and r['url'] not in {x['url'] for x in d['resources']}:d['resources'].append(r)
r=ET.parse(inputs/'medline-topics.xml').getroot();med_date=r.get('date-generated');med_count=0;encyclopedia=[]
for t in r:
 if t.get('language')!='English':continue
 med_count+=1;name=t.get('title');groups=[g.text for g in t.findall('group')];aliases=[a.text for a in t.findall('also-called')+t.findall('see-reference') if a.text]
 resources=[]
 for site in t.findall('site'):
  cat=site.findtext('information-category') or 'Further reading'
  if cat.startswith('NON-DISPLAY'):continue
  item={'title':site.get('title'),'url':safe(site.get('url')),'category':cat,'organization':site.findtext('organization') or 'See source for publisher credentials','credentials':site.findtext('standard-description') or ''}
  resources.append(item)
  if '/ency/article/' in item['url']:encyclopedia.append((item,groups))
 source={'name':'MedlinePlus','url':safe(t.get('url')),'publisher':'U.S. National Library of Medicine · NIH','dataset':'Health Topics XML','datasetDate':med_date,'reviewed':'See original page for its review history','institute':t.findtext('primary-institute') or ''}
 summary=plain(t.findtext('full-summary') or '')
 add(name,aliases,groups,'health',source,summary,resources=resources)
r=ET.parse(inputs/'genetics.xml').getroot();ns={'x':r.tag.split('}')[0][1:]};gen_count=0
for t in r.findall('x:health-condition-summary',ns):
 gen_count+=1;name=t.findtext('x:name',namespaces=ns);sections=[]
 for s in t.findall('x:text-list/x:text',ns):
  el=s.find('x:html',ns);text=plain(ET.tostring(el,encoding='unicode')) if el is not None else ''
  # Preserve paragraph boundaries across namespaced HTML.
  if el is not None:text='\n\n'.join(''.join(p.itertext()).strip() for p in el if ''.join(p.itertext()).strip())
  sections.append({'title':s.findtext('x:text-role',namespaces=ns),'text':text})
 source={'name':'MedlinePlus Genetics','url':safe(t.findtext('x:ghr-page',namespaces=ns)),'publisher':'U.S. National Library of Medicine · NIH','dataset':'Genetics XML compendium','datasetDate':'Retrieved 2026-10-25','reviewed':t.findtext('x:reviewed',namespaces=ns) or 'Not supplied','published':t.findtext('x:published',namespaces=ns) or ''}
 inheritance=[x.text for x in t.findall('x:inheritance-pattern-list/x:inheritance-pattern/x:memo',ns)]
 if inheritance:sections.append({'title':'Inheritance patterns reported by source','text':'; '.join(inheritance)})
 resources=[{'title':x.findtext('x:gene-symbol',namespaces=ns) or x.findtext('x:name',namespaces=ns) or 'Related genetics resource','url':safe(x.findtext('x:ghr-page',namespaces=ns)),'category':'Genetics','organization':'National Library of Medicine','credentials':'NIH'} for x in t.findall('x:related-gene-list/*',ns)]
 add(name,[x.text for x in t.findall('x:synonym-list/x:synonym',ns)],['Genetic Conditions'],'genetics',source,sections[0]['text'] if sections else '',sections[1:],resources)
gard=list(csv.DictReader((inputs/'gard.csv').open(encoding='utf-8-sig')))
for row in gard:
 source={'name':'GARD','url':safe(row['URL']),'publisher':'NIH · National Center for Advancing Translational Sciences','dataset':'GARD Rare Disease List','datasetDate':'September 2026','datasetUrl':'https://rarediseases.info.nih.gov/about','recordId':row['ID'],'reviewed':'Disease-specific review date not provided in this list'}
 add(row['Display Name'],[a for a in row['Synonyms'].split('|') if a],['Rare Diseases'],'rare',source)
for item,groups in encyclopedia:
 source={'name':'MedlinePlus Medical Encyclopedia','url':item['url'],'publisher':'A.D.A.M. Medical Encyclopedia, hosted by the National Library of Medicine','dataset':'Links curated in MedlinePlus Health Topics XML','datasetDate':med_date,'reviewed':'Named clinical authors and review dates appear on the original article'}
 add(item['title'],[],groups,'encyclopedia',source)
records=sorted(entries.values(),key=lambda e:e['name'].lower());resource_count=sum(len(d['resources']) for d in details.values())
meta={'retrieved':'2026-10-25','medlineSnapshot':med_date,'gardSnapshot':'September 2026','sourceCounts':{'healthTopics':med_count,'geneticSummaries':gen_count,'gardRecords':len(gard)},'entryCount':len(records),'summaryCount':sum(e['hasSummary'] for e in records),'resourceCount':resource_count,'encyclopediaArticleCount':len({i['url'] for i,g in encyclopedia}),'withDiseasePage':sum(bool(row['URL']) for row in gard),'mergePolicy':'Exact normalized titles merged; synonyms retained. Counts are directory entries, not unique diagnoses. Subtypes, tests, symptoms and wellness topics are included.'}
(out/'directory-index.js').write_text('const MEDICAL_DIRECTORY = '+json.dumps({'meta':meta,'entries':records},ensure_ascii=False,separators=(',',':'))+';',encoding='utf-8')
(out/'directory-details.json').write_text(json.dumps(details,ensure_ascii=False,separators=(',',':')),encoding='utf-8')
(out/'library-provenance.json').write_text(json.dumps(meta,indent=2),encoding='utf-8')
print(json.dumps(meta,indent=2));print('Index bytes:',(out/'directory-index.js').stat().st_size,'Details bytes:',(out/'directory-details.json').stat().st_size)
