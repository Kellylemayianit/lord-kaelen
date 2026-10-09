/* Lord Kaelen: cover → KPIs → chronicle (filterable) + about → photos */
KL.pages.kaelen=async function(root){
  const D=KL.dataLoader,u=KL.ui,e=KL.h.esc,I=KL.icon,adm=KL.isAuthed&&KL.isAuthed();
  const [A,S,C,PH]=await Promise.all([D.getAssets(),D.getSocial(),D.getChronicle(),D.getPhotos()]);
  const types=[...new Set(C.map(c=>c.type))],lk=PH.filter(p=>p.a==='lk');
  const rowHtml=c=>{const inner=`${c.photo?`<img class="row__th" src="${u.img(c.photo)}" alt="" loading="lazy">`:`<span class="row__ic">${I(u.typeIcon(c.type),22)}</span>`}
    <span class="row__tx"><b>${e(c.title)}${adm&&c.needsReview?'<span class="rev">review</span>':''}</b><small>${e(c.outlet)} · ${e(c.blurb)}</small></span>
    <span class="row__m"><span class="chip">${e(c.type)}</span><em>${e(c.year||'—')}</em>${c.url?I('ext',16):''}</span>`;
    return c.url?`<a class="row" data-type="${e(c.type)}" href="${e(c.url)}" target="_blank" rel="noopener">${inner}</a>`:`<div class="row" data-type="${e(c.type)}">${inner}</div>`};
  const socials=[['Facebook',S.facebook,'share'],['YouTube',S.youtube,'film'],['GitHub',S.github,'code'],['Telegram',S.telegram,'chat']].filter(s=>s[1]);
  root.innerHTML=`<div class="stack">
  ${u.cover(A.lk,['Kajiado South','Baseball','Writing','Documentary'],`<a class="btn btn--t" href="#/gallery">${I('image',16)} Gallery</a><a class="btn btn--ol" href="${e(S.whatsapp)}" target="_blank" rel="noopener">${I('chat',16)} Say hi</a>`)}
  <div class="kpis">${u.kpi('Chronicle records',C.length,'','news')}${u.kpi('Press',C.filter(c=>c.type==='Press').length,'News coverage','megaphone')}${u.kpi('Writing',C.filter(c=>c.type==='Writing').length,'Articles and stories','pen')}${u.kpi('Photos',lk.length,'In the gallery','image')}</div>
  <div class="two"><section class="panel"><header class="ph"><h3>Chronicle</h3><div class="filters" style="margin:0"><button class="pill on" data-type="">All</button>${types.map(t=>`<button class="pill" data-type="${e(t)}">${e(t)}</button>`).join('')}</div></header>
      <div class="rows" id="chron">${C.map(rowHtml).join('')}</div></section>
    <div class="stack">${u.panel('About',`<p>Kelly Lemayian goes by <b>Lord Kaelen</b>. He is from Kajiado South, Kenya, and this side of the site gathers his press, writing, film and life moments in one place.</p><p class="mut">The business side of his life lives in <a href="#/technologies">Kaelen Technologies</a>.</p>`)}
      ${u.panel('Elsewhere',socials.length?`<div class="rows">${socials.map(([n,h,i])=>`<a class="row" href="${e(h)}" target="_blank" rel="noopener"><span class="row__ic">${I(i,22)}</span><span class="row__tx"><b>${n}</b></span>${I('ext',16)}</a>`).join('')}</div>`:`<p class="mut">Facebook and YouTube links go here once added in Admin → Links.</p>`,null,socials.length?'pb--0':'')}</div></div>
  ${u.panel('From the pitch and the road',`<div class="strip">${['baseball-batter-night','lk-bike-lookout','lk-bench-duo','lk-red-jersey','lk-night-standing','lk-smile-portrait'].map(n=>{const p=PH.find(x=>x.id===n)||{alt:''};return`<img src="${u.img(n)}" alt="${e(p.alt)}" loading="lazy">`}).join('')}</div>`,['#/gallery','All photos'])}
  </div>`;
  KL.h.on(root,'click','[data-type].pill',(ev,t)=>{root.querySelectorAll('.pill').forEach(p=>p.classList.toggle('on',p===t));
    root.querySelectorAll('#chron .row').forEach(r=>r.hidden=!!t.dataset.type&&r.dataset.type!==t.dataset.type)});
};
