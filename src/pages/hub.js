/* hub: Ligospace manifesto + S.H.S. layers */
KL.pages.hub=async function(root){
  const u=KL.ui,b=KL.brand;
  const layers=[['Body','Execute'],['Mind','Process'],['Heart','Feel'],['Identity','Know'],['Social','Connect'],['Purpose','Align']];
  const flow=['Potential','Opportunity','Action','Impact','Community','Humanity'];
  root.innerHTML=u.banner(b.id==='agency'?'The hub':'Tech hub · Kajiado South','A tech hub run in partnership with Ligospace — a human synchronization space.',b.bannerImg)+
  `<section class="section"><div class="w"><div class="split"><div>${u.head('LIGO://SPACE','Define humanity as the root system.')}
    <div class="term"><span class="c">// DETECT drought_of_direction</span>
<span class="k">IF</span> PEOPLE_EXIST <span class="k">AND</span> POTENTIAL_EXISTS <span class="k">AND</span> OPPORTUNITIES_EXIST
<span class="k">BUT</span> CONNECTIONS_FAIL
<span class="k">THEN</span> SYSTEM.STATUS = "UNSYNCHRONIZED"

<span class="k">SYNCHRONIZE</span>(HUMAN, POTENTIAL, PATH)

<span class="k">while</span> (humanity.is_becoming()) {
  listen(); learn(); connect(); create();
  empower(); synchronize(); serve();
}</div></div>
    <div class="card card--top"><span class="eyebrow">Global rule</span><h3>Humanity first.</h3>
      <p>Do not waste the seed. Every life matters. From foundation to action.</p>
      <p style="margin-top:14px"><a class="btn" href="https://ligospace.co.ke" target="_blank" rel="noopener">Visit ligospace.co.ke</a></p></div></div></div></section>
  <section class="section alt"><div class="w">${u.head('S.H.S.™','Six layers, synchronized: body, mind, heart, identity, social, purpose.')}
    <div class="grid">${layers.map(([a,v])=>`<div class="tile"><b>${a}</b><span>→ ${v}</span></div>`).join('')}</div></div></section>
  <section class="section"><div class="w">${u.head('From potential to humanity','When alignment is true, each step feeds the next.')}
    <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;align-items:center">${flow.map((f,i)=>`<span class="pill on" style="cursor:default">${f}</span>${i<5?'<span>→</span>':''}`).join('')}</div>
    <p style="text-align:center;margin-top:28px;color:var(--mut)">Not just a platform. Not just an organization. Not just an opportunity hub.<br><b style="color:var(--gd)">A human synchronization space.</b></p></div></section>`;
};
