/* app.js — kernel: resolves the active brand, mounts chrome, wires delegated events.
   Brand resolution order: ?brand= → HOST_MODES[hostname] → saved dashboard setting. */
KL.app=(function(){
  const D=KL.dataLoader,h=KL.h;
  const HOST_MODES={/* 'kaelentechnologies.co.ke':'agency', 'lordkaelen.com':'personal' */};
  async function setMode(m){KL.mode=m;KL.brand=await D.getBrand(m);document.title=KL.brand.name+' — '+KL.brand.slogan}
  async function chrome(path){
    const adm=path.startsWith('#/admin');document.body.classList.toggle('adm-on',adm);
    if(adm){h.qs('#hdr').innerHTML='';h.qs('#ftr').innerHTML='';return}
    const s=await D.getSocial();
    h.qs('#hdr').innerHTML=KL.ui.header(KL.brand,path,s.whatsapp);h.qs('#ftr').innerHTML=KL.ui.footer(KL.brand,s);
  }
  async function init(){
    const st=await D.getSettings(),q=new URLSearchParams(location.search).get('brand');
    await setMode(['personal','agency'].includes(q)?q:(HOST_MODES[location.hostname]||st.brand));
    h.on(document,'click','[data-act]',async(ev,t)=>{
      const a=t.dataset.act;
      if(a==='menu')document.body.classList.toggle('menu-open');
      else if(a==='theme'){const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('kl_theme',n)}catch(x){}}
      else if(a==='brand'){await D.setBrand(t.dataset.brand);history.replaceState(null,'',location.pathname+location.hash);await setMode(t.dataset.brand);h.toast('Now showing '+KL.brand.name);KL.router.render()}
      else if(a==='logout'){sessionStorage.removeItem('kl_auth')}
      else if(a==='reset'){if(confirm('Reset all admin edits?')){await D.reset();await setMode(KL.mode);KL.router.render()}}
      else if(a==='edit')KL.adminEdit(t.dataset.id);
      else if(a==='del'){if(confirm('Delete this item?')){await D.remove(KL.adm.key,t.dataset.id);KL.router.render()}}
      else if(a==='mx'&&(t.classList.contains('modal')?ev.target===t:true))document.getElementById('modal').innerHTML='';
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('menu-open');document.getElementById('modal').innerHTML=''}});
    KL.router.start();
    setTimeout(()=>document.getElementById('splash').classList.add('off'),1100);
  }
  return{init,chrome};
})();
document.addEventListener('DOMContentLoaded',KL.app.init);
