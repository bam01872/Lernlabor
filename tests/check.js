// Grundprüfung (neu aufgebaut 07.11.2026, das alte check.js ging mit dem gesperrten Repo verloren).
// Aufruf: node tests/check.js   (braucht playwright)
const http=require('http'),fs=require('fs'),path=require('path');const {chromium}=require('playwright');
const ROOT=path.join(__dirname,'..');let fail=0;const bad=m=>{fail++;console.log('FEHLER: '+m)};
const html=fs.readFileSync(path.join(ROOT,'index.html'),'utf8'),sw=fs.readFileSync(path.join(ROOT,'sw.js'),'utf8');
// 1) Version: APPV in index.html = Cache-Name in sw.js
const appv=(html.match(/APPV=(\d+)/)||[])[1],swv=(sw.match(/lernlabor-v(\d+)/)||[])[1];
if(!appv||appv!==swv)bad(`APPV ${appv} passt nicht zu sw.js v${swv}`);
// 2) Dozentenversion muss baubar sein
if(html.split('const DOZENT=false;').length!==2)bad('const DOZENT=false; fehlt oder doppelt');
if(html.split('<title>Lernlabor</title>').length!==2)bad('<title>Lernlabor</title> fehlt oder doppelt');
// 3) Alle referenzierten Dateien vorhanden
for(const f of sw.match(/'([^']+\.(?:html|png|woff2|webmanifest))'/g).map(s=>s.slice(1,-1)))if(!fs.existsSync(path.join(ROOT,f)))bad('Datei fehlt: '+f);
// 4) Browser: Start und jedes Thema / Üben ohne JS-Fehler
const MT={'.html':'text/html','.js':'text/javascript','.png':'image/png','.woff2':'font/woff2','.webmanifest':'application/manifest+json'};
const srv=http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);if(p.endsWith('/'))p+='index.html';const f=path.join(ROOT,p);if(!f.startsWith(ROOT)||!fs.existsSync(f)){r.writeHead(404);return r.end()}r.writeHead(200,{'Content-Type':MT[path.extname(f)]||'application/octet-stream'});fs.createReadStream(f).pipe(r)}).listen(0,async()=>{
 const base='http://127.0.0.1:'+srv.address().port+'/';const b=await chromium.launch();
 try{for(const vp of [{width:390,height:844},{width:1366,height:900}]){
  const p=await b.newPage({viewport:vp});const errs=[];p.on('pageerror',e=>errs.push(e.message));
  await p.goto(base);await p.waitForTimeout(800);
  const sn=await p.evaluate(()=>{if(typeof M==='undefined')return[];const slug=n=>String(n).toLowerCase().replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const SL={};return M.map((m,i)=>{let k=slug(m.name)||'thema-'+i;if(SL[k]!=null)k+='-'+i;SL[k]=i;return k})});if(sn.length<50)bad('zu wenige Themen: '+sn.length);
  for(const s of sn)for(const h of ['thema/'+s,'ueben/'+s]){errs.length=0;await p.evaluate(x=>location.hash=x,h);await p.waitForTimeout(60);
   if(errs.length)bad(`${vp.width}px #${h}: ${errs[0]}`)}
  {await p.evaluate(x=>location.hash=x,'thema/'+sn[0]);await p.waitForTimeout(200);const ok=await p.evaluate(()=>document.body.innerText.includes(M[0].name));if(!ok)bad('Thema 1 öffnet nicht per Adresse')}
  for(const h of ['ueben','pruefung','muendlich','']){errs.length=0;await p.evaluate(x=>location.hash=x,h);await p.waitForTimeout(150);if(errs.length)bad(`${vp.width}px #${h}: ${errs[0]}`)}
  console.log(`${vp.width}px: ${sn.length} Themen geprüft`);await p.close()}}
 catch(e){bad(e.stack)}await b.close();srv.close();
 console.log(fail?`${fail} Fehler`:'Alles grün');process.exit(fail?1:0)});
