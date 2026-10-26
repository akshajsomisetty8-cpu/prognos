import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const details=JSON.parse(fs.readFileSync(path.join(root,'dist/directory-details.json'),'utf8'));
const records=[];
for(const [id,d] of Object.entries(details))for(const s of d.summaries||[]){if(!s.source.url||!s.text)continue;records.push({id:id+'-'+records.length,name:d.name||'',text:[s.text,...(s.sections||[]).map(x=>x.title+'\n'+x.text)].join('\n\n').slice(0,6500),url:s.source.url,credentials:[s.source.publisher,s.source.institute,s.source.reviewed].filter(Boolean).join(' · '),publisher:s.source.name})}
const indexText=fs.readFileSync(path.join(root,'dist/directory-index.js'),'utf8');const sandbox={};vm.createContext(sandbox);vm.runInContext(indexText+';this.entries=MEDICAL_DIRECTORY.entries;',sandbox);const names=new Map(sandbox.entries.map(e=>[e.id,e.name]));records.forEach(r=>{r.name=names.get(r.id.replace(/-\d+$/,''))||r.name});
const guideText=fs.readFileSync(path.join(root,'dist/consultant.js'),'utf8').split('let guideTopic=')[0];vm.runInContext(guideText+';this.guides=CONSULT_GUIDES;',sandbox);for(const [id,g] of Object.entries(sandbox.guides))records.unshift({id:'guide-'+id,name:g.name,text:[g.overview,g.why,g.next,g.urgent].filter(Boolean).join('\n\n'),url:g.source.url,credentials:g.source.credentials,publisher:g.source.name});
fs.mkdirSync(path.join(root,'server'),{recursive:true});fs.writeFileSync(path.join(root,'server/evidence.json'),JSON.stringify(records));console.log('Prepared '+records.length+' attributed evidence passages for the optional AI endpoint.');
