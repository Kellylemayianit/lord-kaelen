/* home: hero slides → tiles → services → hub band → work → moments → CTA */
KL.pages.home=async function(root){
  const b=KL.brand,e=KL.h.esc,u=KL.ui,projects=(await KL.dataLoader.getProjects()).slice(0,3);
  root.innerHTML=`<section class="hero">${b.slides.map((s,i)=>`<div class="slide ${i?'':'on'}" style="--img:url(${u.img(s.bg)})"><div class="w"><div>
      <span class="eyebrow">${e(s.eyebrow)}</span><h1>${e(s.h1)}</h1><p>${e(s.p)}</p>
      <div class="cta"><a class="btn btn--t" href="${s.c1[1]}">${e(s.c1[0])}</a><a class="btn btn--ol" href="${s.c2[1]}">${e(s.c2[0])}</a></div></div>
      <img class="fig" src="${u.img(s.fig)}" alt="" style="object-position:center 20%"></div></div>`).join('')}
    <div class="dots">${b.slides.map((_,i)=>`<b class="${i?'':'on'}" data-slide="${i}"></b>`).join('')}</div></section>
    <div class="w tiles"><div class="grid">${b.stats.map(([v,l])=>`<div class="tile"><b>${e(v)}</b><span>${e(l)}</span></div>`).join('')}</div></div>
    <section class="section"><div class="w">${u.head('What we do'.replace('we',b.id==='agency'?'we':'I'),'')}
      <div class="grid">${b.services.map(([t,d])=>`<div class="card card--top"><h3>${e(t)}</h3><p>${e(d)}</p></div>`).join('')}</div></div></section>
    <section class="section alt"><div class="w"><div class="band"><span class="eyebrow" style="color:var(--o)">Tech hub · Kajiado South</span>
      <h2>LIGO://SPACE</h2><p>A human synchronization space — not just a platform, not just an organization. The hub runs in partnership with Ligospace.</p>
      <a class="btn btn--t" href="#/hub">Explore the hub</a></div></div></section>
    <section class="section"><div class="w">${u.head(b.id==='agency'?'Our work':'Selected work','Sites and apps shipped for real clients.')}
      <div class="grid">${projects.map(u.projectCard).join('')}</div>
      <p style="text-align:center;margin-top:26px"><a class="btn btn--line" href="#/projects">All projects</a></p></div></section>
    ${b.moments.length?`<section class="section alt"><div class="w">${u.head('Moments')}<div class="strip">${b.moments.map(n=>`<img src="${u.img(n)}" alt="Lord Kaelen" loading="lazy">`).join('')}</div></div></section>`:''}
    <section class="cta-band"><div class="w"><h2>${e(b.ctaH)}</h2><p>${e(b.ctaP)}</p>
      <a class="btn btn--t" href="#/contact">${e(b.cta)}</a><a class="btn btn--ol" href="#/projects">See the work</a></div></section>`;
  // crossfade every 6s
  const sl=[...root.querySelectorAll('.slide')],dt=[...root.querySelectorAll('.dots b')];let i=0;
  const go=n=>{i=n%sl.length;sl.forEach((s,k)=>s.classList.toggle('on',k===i));dt.forEach((d,k)=>d.classList.toggle('on',k===i))};
  KL.timer=setInterval(()=>go(i+1),6000);
  KL.h.on(root,'click','[data-slide]',(ev,t)=>go(+t.dataset.slide));
};
