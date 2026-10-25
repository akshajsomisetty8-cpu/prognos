from pathlib import Path
import json,collections,xml.etree.ElementTree as E,csv,unicodedata,re
root=Path(__file__).resolve().parents[1]/'dist'
j=json.loads((root/'directory-index.js').read_text().removeprefix('const MEDICAL_DIRECTORY = ').removesuffix(';'));ds=json.loads((root/'directory-details.json').read_text());es=j['entries'];m=j['meta']
assert len(es)==m['entryCount']==len({e['id'] for e in es})
assert set(ds)=={e['id'] for e in es}
assert sum(e['hasSummary'] for e in es)==m['summaryCount']
assert sum(len(d['resources']) for d in ds.values())==m['resourceCount']
assert sum(s['name']=='GARD' for e in es for s in e['sources'])==m['sourceCounts']['gardRecords']
assert sum(s['name']=='MedlinePlus' for e in es for s in e['sources'])==m['sourceCounts']['healthTopics']
assert sum(s['name']=='MedlinePlus Genetics' for e in es for s in e['sources'])==m['sourceCounts']['geneticSummaries']
for e in es:
 assert e['name'] and e['sources']
 assert e['hasSummary']==bool(ds[e['id']]['summaries'])
 for s in e['sources']:
  assert s['publisher'] and s['datasetDate'] and s['reviewed']
  assert s['url'].startswith(('https://','http://')) or s.get('datasetUrl','').startswith('https://')
 for r in ds[e['id']]['resources']:assert r['url'].startswith(('https://','http://'))
for q in ['Lupus','Diabetes','Multiple Sclerosis','Asthma','Endometriosis','Marfan syndrome','Ehlers-Danlos syndrome','Celiac Disease']:
 assert any(q.lower() in e['name'].lower() for e in es),q
assert all((root/f).stat().st_size<25*1024*1024 for f in ['directory-index.js','directory-details.json'])
print(f'PASS: {len(es):,} entries, {m["summaryCount"]:,} summaries, complete source counts, safe source links, stable IDs, and representative common/rare conditions.')
