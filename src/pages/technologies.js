/* Kaelen Technologies: cover → KPIs → services → experience + stack → work → CTA */
KL.pages.technologies=async function(root){
  const D=KL.dataLoader,u=KL.ui,e=KL.h.esc,I=KL.icon,adm=KL.isAuthed&&KL.isAuthed();
  const [A,S,P,X,SV]=await Promise.all([D.getAssets(),D.getSocial(),D.getProjects(),D.getExperience(),D.getServices()]);
  const stack=KL.mockData.stack;
  root.innerHTML=`<div class="stack">
  ${u.cover(A.kt,['Developer','Digital marketing','AI integration','Kajiado South'],`<a class="btn btn--t" href="#/contact">Start a project</a><a class="btn btn--ol" href="${e(S.linkedin)}" target="_blank" rel="noopener">${I('work',16)} LinkedIn</a>`)}
  <div class="kpis">${u.kpi('Projects',P.length,'Websites and apps','work')}${u.kpi('Live sites',P.filter(p=>p.liveUrl).length,'Public today','cloud')}${u.kpi('Services',SV.length,'Build to marketing','layers')}${u.kpi('Building since','2023','','code')}</div>
  ${u.panel('What Kaelen Technologies does',`<div class="grid">${SV.map(s=>`<div class="svc"><span class="kpi__i">${I(s.i,20)}</span><h4>${e(s.t)}</h4><p>${e(s.d)}</p></div>`).join('')}</div>`)}
  <div class="two">${u.panel('Experience',`<ul class="tl">${X.map(x=>`<li><em>${e(x.period)}</em><b>${e(x.role)}${adm&&x.needsReview?'<span class="rev">review</span>':''}</b><span class="mut" style="font-size:.85rem">${e(x.org)}</span><p>${e(x.summary)}</p>${(x.tags||[]).map(t=>`<span class="chip">${e(t)}</span>`).join('')}</li>`).join('')}</ul>`,[S.linkedin,'Full profile on LinkedIn'])}
    <div class="stack">${u.panel('Stack & skills',stack.map(t=>`<span class="chip">${e(t)}</span>`).join(''))}
      ${u.panel('The hub',`<p>A tech hub in Kajiado South, run in partnership with <b>Ligospace</b>, a human synchronization space.</p><a class="btn btn--sm" href="#/hub">Explore the hub</a>`)}</div></div>
  ${u.panel('Selected work',`<div class="rows">${P.slice(0,4).map(u.projectRow).join('')}</div>`,['#/work','All work'],'pb--0')}
  <section class="cta" ${u.bg('cover-kaelen-technologies-wide','kt-working-laptop')}><h2>Ready to put your business online?</h2><p>Tell us about the project and we will come back with a plan.</p><a class="btn btn--t" href="#/contact">Start a project</a><a class="btn btn--ol" href="#/work">See the work</a></section>
  </div>`;
};
