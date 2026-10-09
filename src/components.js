/* components.js — pure render functions: data in, HTML string out. */
KL.ui=(function(){
  const e=KL.h.esc,I=KL.icon;
  const img=n=>`assets/${n}.jpg`;
  const NAV=[
    {g:'Overview',items:[['#/','Gateway','home']]},
    {g:'Lord Kaelen',a:'lk',items:[['#/lord-kaelen','Profile & chronicle','user'],['#/gallery','Gallery','image']]},
    {g:'Kaelen Technologies',a:'kt',items:[['#/technologies','Overview','code'],['#/work','Work','work'],['#/hub','Tech hub','hub']]},
    {g:'Connect',items:[['#/contact','Contact','mail']]}];
  const TITLES={'#/':['Gateway','Two assets, one dashboard'],'#/lord-kaelen':['Lord Kaelen','Profile & chronicle'],'#/gallery':['Gallery','Lord Kaelen'],
    '#/technologies':['Kaelen Technologies','Overview'],'#/work':['Work','Kaelen Technologies'],'#/hub':['Tech hub','Kaelen Technologies'],'#/contact':['Contact','Reach either side']};
  const assetOf=p=>/^#\/(lord-kaelen|gallery)/.test(p)?'lk':/^#\/(technologies|work|projects|hub)/.test(p)?'kt':'';
  const isOn=(h,p)=>h==='#/'?p==='#/':(p===h||p.startsWith(h+'/'));
  const navLinks=p=>NAV.map(g=>`<div class="grp ${g.a||''}"><span>${e(g.g)}</span></div>`+g.items.map(([h,l,i])=>`<a class="nl ${isOn(h,p)||(h==='#/work'&&p.startsWith('#/projects'))?'on':''}" href="${h}">${I(i,18)}<span>${e(l)}</span></a>`).join('')).join('');
  return{
    img,assetOf,TITLES,
    sidebar(p,s){return`<div class="sb__in"><a class="brand" href="#/"><span class="mark"><i>LK</i><i>KT</i></span><span><b>Kelly Lemayian</b><small>Lord Kaelen · Kaelen Technologies</small></span></a>
      <nav>${navLinks(p)}</nav>
      <div class="sb__bot"><a class="btn btn--t" href="#/contact">Start a project</a>
      <a class="btn btn--ol btn--sm" href="${e(s.whatsapp)}" target="_blank" rel="noopener">${I('chat',16)} WhatsApp</a>
      <button class="btn btn--ol btn--sm" data-act="theme">${I('theme',16)} Light / dark</button>
      <a class="sb__adm" href="#/admin">Admin</a></div></div>`},
    topbar(p){const t=TITLES[p]||(p.startsWith('#/work')||p.startsWith('#/projects')?['Project','Kaelen Technologies']:['Page','']);
      return`<button class="ib burger" data-act="menu" aria-label="Open menu">${I('menu')}</button>
      <div class="tb__t"><small>${e(t[1])}</small><h1>${e(t[0])}</h1></div>
      <div class="tb__a"><button class="ib" data-act="theme" aria-label="Toggle light or dark">${I('theme')}</button><a class="btn btn--t btn--sm" href="#/contact">Get in touch</a></div>`},
    bottomNav(p){return[['#/','Gateway','home'],['#/lord-kaelen','Kaelen','user'],['#/technologies','Tech','code'],['#/gallery','Photos','image'],['#/contact','Contact','mail']]
      .map(([h,l,i])=>`<a class="${isOn(h,p)||(h==='#/technologies'&&(p.startsWith('#/work')||p.startsWith('#/hub')))?'on':''}" href="${h}">${I(i,22)}<span>${l}</span></a>`).join('')},
    footer(s){return`<div class="ft"><span>© ${KL.h.year()} Kelly Lemayian · Lord Kaelen &amp; Kaelen Technologies</span>
      <span class="ft__l"><a href="${e(s.linkedin)}" target="_blank" rel="noopener">LinkedIn</a><a href="${e(s.github)}" target="_blank" rel="noopener">GitHub</a><a href="${e(s.telegram)}" target="_blank" rel="noopener">Telegram</a>${s.facebook?`<a href="${e(s.facebook)}" target="_blank" rel="noopener">Facebook</a>`:''}${s.youtube?`<a href="${e(s.youtube)}" target="_blank" rel="noopener">YouTube</a>`:''}</span></div>
      <a class="wa" href="${e(s.whatsapp)}" target="_blank" rel="noopener" aria-label="WhatsApp">${I('chat',22)}<span>WhatsApp</span></a>`},
    kpi(label,value,sub,icon){return`<div class="kpi"><span class="kpi__i">${I(icon||'spark',20)}</span><div><b>${e(value)}</b><span>${e(label)}</span>${sub?`<small>${e(sub)}</small>`:''}</div></div>`},
    panel(title,body,action,cls){return`<section class="panel ${cls||''}"><header class="ph"><h3>${e(title)}</h3>${action?`<a class="ph__a" href="${action[0]}">${e(action[1])}${I('arrow',16)}</a>`:''}</header><div class="pb">${body}</div></section>`},
    /* image backgrounds: --img (desktop/wide) and --img-m (mobile/portrait) */
    bg:(d,m)=>`style="--img:url(../${img(d)});--img-m:url(../${img(m||d)})"`,
    assetCard(a,stats){return`<a class="asset asset--${a.id}" href="${a.route}" ${KL.ui.bg(a.cover,a.coverM)}>
      <div class="asset__in"><span class="chip chip--solid">${e(a.tag)}</span>
      <div class="asset__id"><img src="${img(a.avatar)}" alt="" loading="lazy"><div><h2>${e(a.name)}</h2><small>${e(a.person)}</small></div></div>
      <p>${e(a.line)}</p>
      <div class="asset__st">${stats.map(([v,l])=>`<span><b>${e(v)}</b>${e(l)}</span>`).join('')}</div>
      <span class="btn btn--t">${e(a.cta)}${I('arrow',16)}</span></div></a>`},
    cover(a,chips,actions){return`<section class="cover cover--${a.id}" ${KL.ui.bg(a.cover,a.coverM)}><div class="cover__in">
      <img class="cover__av" src="${img(a.avatar)}" alt="${e(a.name)}"><div class="cover__tx"><h2>${e(a.name)}</h2><p>${e(a.line)}</p>
      <div>${chips.map(c=>`<span class="chip chip--solid">${e(c)}</span>`).join('')}</div></div>
      <div class="cover__ac">${actions}</div></div></section>`},
    projectRow(p){return`<a class="row" href="#/work/${p.id}" data-tags="${e((p.tags||[]).join('|'))}">
      <span class="row__cv" style="--h:${p.hue||215}">${e(p.title.split(/\s+/).map(w=>w[0]).join('').slice(0,2))}</span>
      <span class="row__tx"><b>${e(p.title)}</b><small>${e(p.tagline)}</small></span>
      <span class="row__m">${(p.tags||[]).slice(0,2).map(t=>`<span class="chip">${e(t)}</span>`).join('')}<em>${e(p.year)}</em></span></a>`},
    typeIcon:t=>({Press:'news',Writing:'pen',Film:'film',Social:'share',Sport:'ball'}[t]||'news'),
    skeleton:()=>`<div class="sk" style="height:120px"></div><div class="grid" style="margin-top:18px"><div class="sk" style="height:90px"></div><div class="sk" style="height:90px"></div><div class="sk" style="height:90px"></div></div><div class="sk" style="height:260px;margin-top:18px"></div>`
  };
})();
