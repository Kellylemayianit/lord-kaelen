/* gateway: welcome → two asset cards → KPIs → activity feed + quick links → moments */
KL.pages.gateway=async function(root){
  const D=KL.dataLoader,u=KL.ui,e=KL.h.esc,I=KL.icon;
  const [A,S,P,C,PH,X]=await Promise.all([D.getAssets(),D.getSocial(),D.getProjects(),D.getChronicle(),D.getPhotos(),D.getExperience()]);
  const live=P.filter(p=>p.liveUrl).length,lkPh=PH.filter(p=>p.a==='lk').length;
  const feed=[...C.map(c=>({y:c.year,t:c.title,s:c.outlet+' · '+c.type,h:'#/lord-kaelen',a:'lk',th:c.photo,ic:u.typeIcon(c.type)})),
              ...P.map(p=>({y:p.year,t:p.title,s:p.tagline,h:'#/work/'+p.id,a:'kt',th:'',ic:'work'}))]
    .sort((a,b)=>(+b.y||0)-(+a.y||0)).slice(0,7);
  root.innerHTML=`<div class="stack">
  <div class="wl"><div><h2>Kelly Lemayian</h2><p>One person, two assets. <b>Lord Kaelen</b> is the story. <b>Kaelen Technologies</b> is the work. Pick a side, or scroll for everything in one view.</p></div>
    <div class="wl__a"><a class="btn btn--t" href="#/technologies">${I('code',16)} Hire the business</a><a class="btn btn--line" href="#/lord-kaelen">${I('user',16)} Read the story</a></div></div>
  <div class="assets">${u.assetCard(A.lk,[[C.length,'Chronicle records'],[lkPh,'Photos']])}${u.assetCard(A.kt,[[P.length,'Projects'],[live,'Live sites']])}</div>
  <div class="kpis">${u.kpi('Assets','2','Person + business','layers')}${u.kpi('Live client sites',live,'Kaelen Technologies','cloud')}${u.kpi('Chronicle records',C.length,'Press, writing, film','news')}${u.kpi('Photos',PH.length,'In the gallery','image')}</div>
  <div class="two">${u.panel('Latest activity',`<div class="rows">${feed.map(f=>`<a class="row" href="${f.h}">${f.th?`<img class="row__th" src="${u.img(f.th)}" alt="" loading="lazy">`:`<span class="row__ic">${I(f.ic,22)}</span>`}
        <span class="row__tx"><b>${e(f.t)}</b><small>${e(f.s)}</small></span><span class="row__m"><span class="dot ${f.a==='kt'?'dot--kt':''}"></span><em>${e(f.y||'—')}</em></span></a>`).join('')}</div>`,['#/lord-kaelen','Chronicle'],'pb--0')}
    ${u.panel('Find Kelly',`<div class="rows">${[['LinkedIn',S.linkedin,'work','Experience and projects'],['GitHub',S.github,'code','Code and repos'],['WhatsApp',S.whatsapp,'chat','Fastest reply'],['Telegram',S.telegram,'share','Direct message']].map(([n,h,i,d])=>
        `<a class="row" href="${e(h)}" target="_blank" rel="noopener"><span class="row__ic">${I(i,22)}</span><span class="row__tx"><b>${n}</b><small>${d}</small></span>${I('ext',16)}</a>`).join('')}</div>`,null,'pb--0')}</div>
  ${u.panel('Moments',`<div class="strip">${PH.filter(p=>p.a==='lk'&&!p.review).slice(0,6).map(p=>`<img src="${u.img(p.id)}" alt="${e(p.alt)}" loading="lazy">`).join('')}</div>`,['#/gallery','Open gallery'])}
  </div>`;
};
