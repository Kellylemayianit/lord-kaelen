/* hub: Ligospace manifesto + S.H.S. layers */
KL.pages.hub=async function(root){
  const u=KL.ui,I=KL.icon;
  const layers=[['Body','Execute'],['Mind','Process'],['Heart','Feel'],['Identity','Know'],['Social','Connect'],['Purpose','Align']];
  const flow=['Potential','Opportunity','Action','Impact','Community','Humanity'];
  root.innerHTML=`<div class="stack"><div class="wl"><div><h2>LIGO://SPACE</h2><p>A tech hub in Kajiado South, run in partnership with Ligospace: a human synchronization space.</p></div>
    <div class="wl__a"><a class="btn" href="https://ligospace.co.ke" target="_blank" rel="noopener">Visit ligospace.co.ke ${I('ext',16)}</a></div></div>
  <div class="two">${u.panel('Define humanity as the root system',`<div class="term"><span class="c">// DETECT drought_of_direction</span>
<span class="k">IF</span> PEOPLE_EXIST <span class="k">AND</span> POTENTIAL_EXISTS <span class="k">AND</span> OPPORTUNITIES_EXIST
<span class="k">BUT</span> CONNECTIONS_FAIL
<span class="k">THEN</span> SYSTEM.STATUS = "UNSYNCHRONIZED"

<span class="k">SYNCHRONIZE</span>(HUMAN, POTENTIAL, PATH)

<span class="k">while</span> (humanity.is_becoming()) {
  listen(); learn(); connect(); create();
  empower(); synchronize(); serve();
}</div>`)}
    ${u.panel('Global rule',`<h3>Humanity first.</h3><p class="mut">Do not waste the seed. Every life matters. From foundation to action.</p>`)}</div>
  ${u.panel('S.H.S.™ · six layers, synchronized',`<div class="kpis">${layers.map(([a,v],i)=>`<div class="kpi"><div><b style="font-size:1.2rem">${a}</b><span>→ ${v}</span></div></div>`).join('')}</div>`)}
  ${u.panel('From potential to humanity',`<div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center">${flow.map((f,i)=>`<span class="pill on" style="cursor:default">${f}</span>${i<5?'<span class="mut">→</span>':''}`).join('')}</div>
    <p class="mut" style="margin-top:16px">Not just a platform. Not just an organization. Not just an opportunity hub. <b style="color:var(--ink)">A human synchronization space.</b></p>`)}</div>`;
};
