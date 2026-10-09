/* work list (filter in place) + project detail */
KL.pages.projects=async function(root){
  const u=KL.ui,D=KL.dataLoader,e=KL.h.esc,list=await D.getProjects(),tags=[...new Set(list.flatMap(p=>p.tags||[]))];
  root.innerHTML=`<div class="stack"><div class="filters" style="margin:0"><button class="pill on" data-tag="">All</button>${tags.map(t=>`<button class="pill" data-tag="${e(t)}">${e(t)}</button>`).join('')}</div>
    ${u.panel('Projects',`<div class="rows" id="pl">${list.map(u.projectRow).join('')}</div>`,null,'pb--0')}</div>`;
  KL.h.on(root,'click','[data-tag]',(ev,t)=>{root.querySelectorAll('.pill').forEach(p=>p.classList.toggle('on',p===t));
    root.querySelectorAll('#pl .row').forEach(c=>c.hidden=!!t.dataset.tag&&!c.dataset.tags.split('|').includes(t.dataset.tag))});
};
KL.pages.project=async function(root,ctx){
  const p=await KL.dataLoader.getProject(ctx.params.id),e=KL.h.esc,u=KL.ui,I=KL.icon;
  if(!p){root.innerHTML=u.panel('Not found','<p>That project does not exist.</p><a class="btn" href="#/work">All work</a>');return}
  const links=[[p.liveUrl,'Visit site','btn--t'],[p.repoUrl,'View repo','btn--line']].filter(l=>l[0]);
  root.innerHTML=`<div class="stack"><div class="wl"><div><span class="chip">${e(p.year)}</span>${(p.tags||[]).map(t=>`<span class="chip">${e(t)}</span>`).join('')}<h2>${e(p.title)}</h2><p>${e(p.tagline)}</p></div>
    <div class="wl__a">${links.map(([h,l,c])=>`<a class="btn ${c}" href="${e(h)}" target="_blank" rel="noopener">${l} ${I('ext',16)}</a>`).join('')}<a class="btn btn--line" href="#/work">All work</a></div></div>
    ${u.panel('Summary',`<p style="font-size:1.05rem;max-width:760px">${e(p.summary)}</p>`)}
    <div class="grid">${[['Challenge',p.challenge,'spark'],['Approach',p.approach,'code'],['Result',p.result,'check']].map(([t,d,i])=>u.panel(t,`<p>${e(d)}</p>`)).join('')}</div></div>`;
};
