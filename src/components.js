/* components.js — pure render functions: data in, HTML string out. */
KL.ui=(function(){
  const e=KL.h.esc,img=n=>`assets/${n}.jpg`;
  const nav=(b,hash,cls)=>b.nav.map(([h,l])=>`<a href="${h}" class="${hash===h||(h!=='#/'&&hash.startsWith(h))?'on':''}">${e(l)}</a>`).join('');
  return{
    img,
    header(b,hash,wa){return`<header class="hd"><div class="w hd__in">
      <button class="ib burger" data-act="menu" aria-label="Menu">☰</button>
      <a class="logo" href="#/"><i>${b.initials}</i><span><b>${e(b.name)}</b><small>${e(b.slogan)}</small></span></a>
      <nav class="nav">${nav(b,hash)}</nav>
      <button class="ib" data-act="theme" aria-label="Toggle theme">◐</button>
      <a class="btn btn--t btn--sm" href="#/contact">${e(b.cta)}</a></div></header>
      <div class="scrim" data-act="menu"></div>
      <aside class="drawer"><button class="ib" data-act="menu" aria-label="Close">✕</button><div style="height:12px"></div>${nav(b,hash)}
        <div class="bot"><a class="btn btn--t" href="#/contact">${e(b.cta)}</a><a class="btn btn--ol" href="${wa}" target="_blank" rel="noopener">WhatsApp</a>
        <button class="btn btn--ol" data-act="theme">Switch light / dark</button></div></aside>`},
    footer(b,s){return`<footer class="ft"><div class="w"><div class="grid">
      <div><h4>${e(b.name)}</h4><p>${e(b.footerAbout)}</p></div>
      <div><h4>Explore</h4>${b.nav.map(([h,l])=>`<a href="${h}">${e(l)}</a>`).join('')}</div>
      <div><h4>Reach out</h4><a href="${s.whatsapp}" target="_blank" rel="noopener">WhatsApp</a><a href="${s.telegram}" target="_blank" rel="noopener">Telegram</a><a href="${s.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${s.github}" target="_blank" rel="noopener">GitHub</a></div></div>
      <div class="cp">${e(b.copyright).replace('{y}',KL.h.year())} · <a href="#/admin">Admin</a></div></div></footer>
      <a class="wa" href="${s.whatsapp}" target="_blank" rel="noopener">💬 <span>WhatsApp</span></a>`},
    banner(h,p,bg){return`<section class="banner" style="--img:url(${img(bg)})"><div class="w"><h1>${e(h)}</h1><p>${e(p)}</p></div></section>`},
    head(h,p){return`<div class="head"><h2>${e(h)}</h2>${p?`<p>${e(p)}</p>`:''}</div>`},
    projectCard(p){return`<a class="card pc" href="#/projects/${p.id}" data-tags="${e((p.tags||[]).join('|'))}">
      <div class="cv" style="--h:${p.hue||215}">${e(p.title.split(/\s+/).map(w=>w[0]).join('').slice(0,2))}</div>
      <div class="bd"><span class="eyebrow">${e(p.year)}</span><h3>${e(p.title)}</h3><p>${e(p.tagline)}</p>
      <div style="margin-top:10px">${(p.tags||[]).map(t=>`<span class="chip">${e(t)}</span>`).join('')}</div></div></a>`},
    skeleton:()=>`<div class="sk" style="height:200px"></div><div class="w section"><div class="grid"><div class="sk" style="height:180px"></div><div class="sk" style="height:180px"></div><div class="sk" style="height:180px"></div></div></div>`
  };
})();
