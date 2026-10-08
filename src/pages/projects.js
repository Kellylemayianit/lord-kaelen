/* projects list (filter in place) + project detail */
KL.pages.projects=async function(root){
  const b=KL.brand,u=KL.ui,list=await KL.dataLoader.getProjects(),tags=[...new Set(list.flatMap(p=>p.tags||[]))];
  root.innerHTML=u.banner(b.id==='agency'?'Our work':'Projects','Websites and apps built and shipped from Kajiado South.',b.bannerImg)+
    `<section class="section"><div class="w"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:28px">
    <button class="pill on" data-tag="">All</button>${tags.map(t=>`<button class="pill" data-tag="${KL.h.esc(t)}">${KL.h.esc(t)}</button>`).join('')}</div>
    <div class="grid">${list.map(u.projectCard).join('')}</div></div></section>`;
  KL.h.on(root,'click','[data-tag]',(ev,t)=>{
    root.querySelectorAll('.pill').forEach(p=>p.classList.toggle('on',p===t));
    root.querySelectorAll('.pc').forEach(c=>c.hidden=!!t.dataset.tag&&!c.dataset.tags.split('|').includes(t.dataset.tag))});
};
KL.pages.project=async function(root,ctx){
  const p=await KL.dataLoader.getProject(ctx.params.id),e=KL.h.esc,u=KL.ui;
  if(!p){root.innerHTML=u.banner('Not found','That project does not exist.',KL.brand.bannerImg);return}
  const links=[[p.liveUrl,'Visit site','btn--t'],[p.repoUrl,'View repo','btn--line']].filter(l=>l[0]);
  root.innerHTML=u.banner(p.title,p.tagline,KL.brand.bannerImg)+`<section class="section"><div class="w">
    <p style="font-size:1.1rem;max-width:760px">${e(p.summary)}</p>${(p.tags||[]).map(t=>`<span class="chip">${e(t)}</span>`).join('')}
    <div class="grid" style="margin:26px 0">${[['Challenge',p.challenge],['Approach',p.approach],['Result',p.result]].map(([t,d])=>`<div class="card card--top"><h3>${t}</h3><p>${e(d)}</p></div>`).join('')}</div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">${links.map(([h,l,c])=>`<a class="btn ${c}" href="${e(h)}" target="_blank" rel="noopener">${l}</a>`).join('')}<a class="btn btn--line" href="#/projects">← All projects</a></div></div></section>`;
};
