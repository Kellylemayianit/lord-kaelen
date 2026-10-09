/* admin: login, dashboard, CRUD for projects / chronicle / experience, links form */
(function(){
  const e=KL.h.esc,D=KL.dataLoader,AUTH='kl_auth';
  KL.isAuthed=()=>sessionStorage.getItem(AUTH)==='1';
  const CONTENT={
    projects:{label:'Projects',cols:['title','year','tags'],add:1,del:1,fields:[['title','Title'],['tagline','Tagline'],['year','Year'],['hue','Cover hue (0-360)'],['tags','Tags (comma separated)','tags'],['liveUrl','Live URL'],['repoUrl','Repo URL'],['summary','Summary','area'],['challenge','Challenge','area'],['approach','Approach','area'],['result','Result','area']]},
    chronicle:{label:'Lord Kaelen chronicle',cols:['title','type','year'],add:1,del:1,fields:[['title','Title'],['type','Type (Press, Writing, Film, Social, Sport)'],['year','Year'],['outlet','Outlet / source'],['url','Link (https://…)'],['photo','Photo file name (no .jpg), optional'],['blurb','Summary','area']]},
    experience:{label:'Experience (LinkedIn)',cols:['role','org','period'],add:1,del:1,fields:[['role','Role'],['org','Employer / organisation'],['period','Period (e.g. 2023 – now)'],['tags','Tags (comma separated)','tags'],['summary','Summary','area']]}};
  const shell=(active,body)=>`<div class="adm"><aside class="adm__side"><b>Admin</b>
    ${[['#/admin','Dashboard'],['#/admin/chronicle','Chronicle'],['#/admin/experience','Experience'],['#/admin/projects','Projects'],['#/admin/links','Links']].map(([h,l])=>`<a href="${h}" class="${active===h?'on':''}">${l}</a>`).join('')}
    <a href="#/">← View site</a><a href="#/admin/login" data-act="logout">Log out</a></aside><div class="scrim" data-act="menu"></div>
    <section class="adm__main"><div class="adm__bar"><button class="ib" data-act="menu">${KL.icon('menu')}</button></div>${body}</section></div>`;
  const val=(it,k,t)=>t==='tags'?(it[k]||[]).join(', '):(it[k]==null?'':it[k]);
  KL.pages.adminLogin=async function(root){
    root.innerHTML=`<div style="padding:40px 16px"><div class="card formcard" style="margin:0 auto"><h2>Admin login</h2>
      <div class="field"><label>Email</label><input id="u" type="email" autocomplete="username"></div>
      <div class="field"><label>Password</label><input id="p" type="password" autocomplete="current-password"><span class="err" id="e"></span></div>
      <button class="btn" id="go">Sign in</button></div></div>`;
    root.querySelector('#go').onclick=()=>{
      if(root.querySelector('#u').value.trim().toLowerCase()==='kellylemayian6@gmail.com'&&root.querySelector('#p').value==='kellylemayian26'){sessionStorage.setItem(AUTH,'1');location.hash='#/admin'}
      else root.querySelector('#e').textContent='Wrong email or password.'};
  };
  KL.pages.adminHome=async function(root){
    const [pr,ch,ex]=await Promise.all([D.getProjects(true),D.getChronicle(true),D.getExperience(true)]);
    const rev=[...pr,...ch,...ex].filter(x=>x.needsReview).length;
    root.innerHTML=shell('#/admin',`<h2>Dashboard</h2><div class="grid"><div class="stat"><b>${ch.length}</b><span>Chronicle records</span></div><div class="stat"><b>${ex.length}</b><span>Experience entries</span></div><div class="stat"><b>${pr.length}</b><span>Projects</span></div><div class="stat"><b>${rev}</b><span>Need your review</span></div></div>
      <p class="mut" style="margin-top:18px">Items with a “review” badge are placeholders. Fill them in (links, dates, LinkedIn roles); saving clears the badge. Edits live in this browser until a backend is connected.</p>
      <p><button class="btn btn--line btn--sm" data-act="reset">Reset all data to seed</button></p>`);
  };
  KL.pages.adminColl=async function(root,ctx){
    const key=ctx.params.coll;
    if(key==='links'){const s=await D.getSocial();const F=[['facebook','Facebook profile URL'],['youtube','YouTube channel or documentary URL'],['linkedin','LinkedIn'],['github','GitHub'],['telegram','Telegram'],['whatsapp','WhatsApp']];
      root.innerHTML=shell('#/admin/links',`<h2>Links</h2><div class="card formcard" style="margin:0">${F.map(([k,l])=>`<div class="field"><label>${l}</label><input id="l_${k}" value="${e(s[k]||'')}"></div>`).join('')}<button class="btn" id="sv">Save links</button></div>`);
      root.querySelector('#sv').onclick=async()=>{const o={};F.forEach(([k])=>o[k]=root.querySelector('#l_'+k).value.trim());await D.setSocial(o);KL.h.toast('Saved')};return}
    const C=CONTENT[key];if(!C){location.hash='#/admin';return}
    const list=await D.list(key,true);KL.adm={key,C,list};
    root.innerHTML=shell('#/admin/'+key,`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px"><h2 style="margin:0">${C.label}</h2><button class="btn btn--sm" data-act="edit" data-id="">+ Add</button></div>
      <div class="tw"><table><thead><tr>${C.cols.map(c=>`<th>${c}</th>`).join('')}<th></th></tr></thead><tbody>
      ${list.map(it=>`<tr>${C.cols.map(c=>`<td>${e(Array.isArray(it[c])?it[c].join(', '):it[c])}</td>`).join('')}
      <td style="white-space:nowrap">${it.needsReview?'<span class="badge">review</span> ':''}<button class="btn btn--sm btn--line" data-act="edit" data-id="${it.id}">Edit</button>
      <button class="btn btn--sm btn--line" data-act="del" data-id="${it.id}">Delete</button></td></tr>`).join('')}</tbody></table></div>`);
  };
  KL.adminEdit=function(id){
    const {C}=KL.adm,it=KL.adm.list.find(x=>x.id===id)||{};
    document.getElementById('modal').innerHTML=`<div class="modal" data-act="mx"><form class="mbox" id="mf"><h3>${id?'Edit':'Add'} entry</h3>
      ${C.fields.map(([k,l,t])=>`<div class="field"><label>${e(l)}</label>${t==='area'?`<textarea name="${k}" rows="3">${e(val(it,k,t))}</textarea>`:`<input name="${k}" value="${e(val(it,k,t))}">`}</div>`).join('')}
      <div class="row"><button class="btn">Save</button><button type="button" class="btn btn--line" data-act="mx">Cancel</button></div></form></div>`;
    document.getElementById('mf').onsubmit=async ev=>{ev.preventDefault();
      const out=Object.assign({},it,{id:it.id,needsReview:false});
      C.fields.forEach(([k,,t])=>{const v=ev.target.elements[k].value.trim();out[k]=t==='tags'?v.split(',').map(s=>s.trim()).filter(Boolean):(k==='hue'?+v||215:v)});
      if(!out.id)delete out.id;
      await D.save(KL.adm.key,out);document.getElementById('modal').innerHTML='';KL.h.toast('Saved');KL.router.render()};
  };
})();
