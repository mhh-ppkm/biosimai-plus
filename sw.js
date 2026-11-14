/* BioSimAI+ service worker: full offline after the first visit (real photos cached once viewed) */
const CACHE='biosimai-plus-20261114-1359',PHOTOS='biosimai-photos-v1';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./maskable-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE.map(u=>new Request(u,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==PHOTOS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
const put=(name,r,res)=>{if(res&&(res.ok||res.type==='opaque')){const c=res.clone();caches.open(name).then(x=>x.put(r,c));}return res;};
self.addEventListener('message',e=>{if(e.data==='skip')self.skipWaiting();});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 if(r.mode==='navigate'){e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>put(CACHE,'./index.html',res)).catch(()=>caches.match('./index.html',{ignoreSearch:true})));return;}
 if(u.hostname==='upload.wikimedia.org'){e.respondWith(caches.open(PHOTOS).then(c=>c.match(r).then(hit=>hit||fetch(r).then(res=>put(PHOTOS,r,res)))));return;}
 if(u.hostname==='commons.wikimedia.org'){e.respondWith(fetch(r).then(res=>put(PHOTOS,r,res)).catch(()=>caches.open(PHOTOS).then(c=>c.match(r))));return;}
 if(u.origin===location.origin||/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname)){
  e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(res=>put(CACHE,r,res)).catch(()=>hit);return hit||net;}));}
});
