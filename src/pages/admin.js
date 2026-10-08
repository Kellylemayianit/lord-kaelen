/* admin: login, dashboard (BRAND TOGGLE), CRUD screens generated from a CONTENT config */
(function(){
  const e=KL.h.esc,D=KL.dataLoader,AUTH='kl_auth';
  const authed=()=>sessionStorage.getItem(AUTH)==='1';KL.isAuthed=authed;
  const CONTENT={
    projects:{label:'Projects',cols:['title','year','tags'],add:1,del:1,fields:[['title','Title'],['tagline','Tagline'],['year','Year'],['hue','Cover hue (0-360)'],['tags','Tags (comma separated)','tags'],['liveUrl','Live URL'],['repoUrl','Repo URL'],['summary','Summary','area'],['challenge','Challenge','area'],['approach','Approach','area'],['result','Result','area']]},
    brands:{label:'Brand copy',cols:['name','slogan','cta'],fields:[['name','Brand name'],['slogan','Slogan'],['cta','Header button label'],['copyright','Copyright line ({y} = year)'],['footerAbout','Footer blurb','area'],['ctaH','Closing banner heading'],['ctaP','Closing banner text','area']]}};
  const shell=(active,body)=>`<div class="adm"><aside class="adm__side"><b>Admin</b>
    ${[['#/admin','Dashboard'],['#/admin/brands','Brand copy'],['#/admin/projects','Projects']].map(([h,l])=>`<a href="${h}" class="${active===h?'on':''}">${l}</a>`).join('')}
    <a href="#/">← View site</a><a href="#/admin/login" data-act="logout">Log out</a></aside><div class="scrim" data-act="menu"></div>
    <section class="adm__main"><div class="adm__bar"><button class="ib" data-act="menu">☰</button></div>${body}</section></div>`;
  const val=(it,k,t)=>t==='tags'?(it[k]||[]).join(', '):(it[k]==null?'':it[k]);

  KL.pages.adminLogin=async function(root){
    root.innerHTML=`<div class="w section"><div class="card formcard"><h2>Admin login</h2>
      <div class="field"><label>Username</label><input id="u" autocomplete="username"></div>
      <div class="field"><label>Password</label><input id="p" type="password" autocomplete="current-password"><span class="err" id="e"></span></div>
      <button class="btn" id="go">Sign in</button></div></div>`;
    root.querySelector('#go').onclick=()=>{
      if(root.querySelector('#u').value==='kelly'&&root.querySelector('#p').value==='buildinpublic'){sessionStorage.setItem(AUTH,'1');location.hash='#/admin'}
      else root.querySelector('#e').textContent='Wrong username or password.'};
  };
  KL.pages.adminHome=async function(root){
    const [pr,br]=await Promise.all([D.getProjects(true),D.getBrands(true)]),mode=KL.mode;
    root.innerHTML=shell('#/admin',`<h2>Dashboard</h2>
      <div class="card" style="margin-bottom:22px"><span class="eyebrow">Site identity</span><h3>Who is this site right now?</h3>
        <p>One build, two brands. The header, hero, copyright and closing banner all follow this switch.</p>
        <div class="seg">${br.map(b=>`<button class="${b.id===mode?'on':''}" data-act="brand" data-brand="${b.id}">${e(b.id==='personal'?'Personal · Lord Kaelen':'Agency · Kaelen Technologies')}</button>`).join('')}</div>
        <p style="margin-top:14px;font-size:.85rem">Right now: <b>${e(KL.brand.name)}</b> — ${e(KL.brand.copyright).replace('{y}',KL.h.year())}</p>
        <p style="font-size:.8rem">Saved in this browser until a backend is connected. To fix a brand per domain, add it to <code>HOST_MODES</code> in <code>src/app.js</code>, or preview with <code>?brand=agency</code>.</p></div>
      <div class="grid"><div class="stat"><b>${pr.length}</b><span>Projects</span></div><div class="stat"><b>${br.length}</b><span>Brands</span></div>
      <div class="stat"><b>${pr.filter(p=>p.needsReview).length}</b><span>Need your review</span></div></div>
      <p style="margin-top:26px"><button class="btn btn--line btn--sm" data-act="reset">Reset all data to seed</button></p>`);
  };
  KL.pages.adminColl=async function(root,ctx){
    const key=ctx.params.coll,C=CONTENT[key];if(!C){location.hash='#/admin';return}
    const list=await D.list(key,true);KL.adm={key,C,list};
    root.innerHTML=shell('#/admin/'+key,`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h2 style="margin:0">${C.label}</h2>
      ${C.add?'<button class="btn btn--sm" data-act="edit" data-id="">+ Add</button>':''}</div>
      <div class="tw"><table><thead><tr>${C.cols.map(c=>`<th>${c}</th>`).join('')}<th></th></tr></thead><tbody>
      ${list.map(it=>`<tr>${C.cols.map(c=>`<td>${e(Array.isArray(it[c])?it[c].join(', '):it[c])}</td>`).join('')}
      <td style="white-space:nowrap">${it.needsReview?'<span class="badge">review</span> ':''}<button class="btn btn--sm btn--line" data-act="edit" data-id="${it.id}">Edit</button>
      ${C.del?` <button class="btn btn--sm btn--line" data-act="del" data-id="${it.id}">Delete</button>`:''}</td></tr>`).join('')}</tbody></table></div>`);
  };
  // modal form generated from the field schema
  KL.adminEdit=function(id){
    const {C}=KL.adm,it=KL.adm.list.find(x=>x.id===id)||{};
    document.getElementById('modal').innerHTML=`<div class="modal" data-act="mx"><form class="mbox" id="mf"><h3>${id?'Edit':'Add'} ${C.label.toLowerCase()}</h3>
      ${C.fields.map(([k,l,t])=>`<div class="field"><label>${e(l)}</label>${t==='area'?`<textarea name="${k}" rows="3">${e(val(it,k,t))}</textarea>`:`<input name="${k}" value="${e(val(it,k,t))}">`}</div>`).join('')}
      <div class="row"><button class="btn">Save</button><button type="button" class="btn btn--line" data-act="mx">Cancel</button></div></form></div>`;
    document.getElementById('mf').onsubmit=async ev=>{ev.preventDefault();
      const out=Object.assign({},it,{id:it.id,needsReview:false});
      C.fields.forEach(([k,,t])=>{const v=ev.target.elements[k].value.trim();out[k]=t==='tags'?v.split(',').map(s=>s.trim()).filter(Boolean):(k==='hue'?+v||215:v)});
      if(!out.id)delete out.id;
      await D.save(KL.adm.key,out);document.getElementById('modal').innerHTML='';KL.h.toast('Saved');
      if(KL.adm.key==='brands'&&out.id===KL.mode)KL.brand=await D.getBrand(KL.mode);KL.router.render()};
  };
})();
