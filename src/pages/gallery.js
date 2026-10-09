/* gallery: filter pills + masonry + lightbox */
KL.pages.gallery=async function(root){
  const u=KL.ui,e=KL.h.esc,I=KL.icon,PH=await KL.dataLoader.getPhotos(),tags=[...new Set(PH.map(p=>p.t))];
  root.innerHTML=`<div class="stack"><div class="filters" style="margin:0"><button class="pill on" data-f="">All · ${PH.length}</button>${tags.map(t=>`<button class="pill" data-f="${e(t)}">${e(t)}</button>`).join('')}</div>
    <div class="masonry">${PH.map((p,i)=>`<figure data-t="${e(p.t)}" data-i="${i}"><img src="${u.img(p.id)}" alt="${e(p.alt)}" loading="lazy"><figcaption>${e(p.t)}</figcaption></figure>`).join('')}</div></div>`;
  let vis=PH.map((_,i)=>i),cur=0;const M=document.getElementById('modal');
  const show=n=>{cur=(n+vis.length)%vis.length;const p=PH[vis[cur]];
    M.innerHTML=`<div class="lb" data-act="mx"><button class="ib" data-act="mx" aria-label="Close">${I('x')}</button><button class="ib lb__n lb__p" data-lb="-1" aria-label="Previous">${I('arrow')}</button>
    <div><img src="${u.img(p.id)}" alt="${e(p.alt)}"><p>${e(p.alt)}</p></div><button class="ib lb__n lb__x" data-lb="1" aria-label="Next">${I('arrow')}</button></div>`;
    M.querySelector('.lb__p svg').style.transform='scaleX(-1)'};
  KL.h.on(root,'click','[data-f]',(ev,t)=>{root.querySelectorAll('.pill').forEach(p=>p.classList.toggle('on',p===t));
    root.querySelectorAll('figure').forEach(f=>f.hidden=!!t.dataset.f&&f.dataset.t!==t.dataset.f);
    vis=[...root.querySelectorAll('figure')].filter(f=>!f.hidden).map(f=>+f.dataset.i)});
  KL.h.on(root,'click','figure',(ev,t)=>{cur=vis.indexOf(+t.dataset.i);show(cur)});
  KL.h.on(M,'click','[data-lb]',(ev,t)=>{ev.stopPropagation();show(cur+ +t.dataset.lb)});
  KL.lbKey=ev=>{if(!M.firstChild)return;if(ev.key==='ArrowRight')show(cur+1);if(ev.key==='ArrowLeft')show(cur-1)};
};
