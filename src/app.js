/* app.js — kernel: mounts the dashboard chrome and wires delegated events. */
KL.app=(function(){
  const D=KL.dataLoader,h=KL.h;
  async function chrome(path){
    const adm=path.startsWith('#/admin');document.body.classList.toggle('adm-on',adm);
    document.body.dataset.asset=KL.ui.assetOf(path);
    if(adm){document.title='Admin · Kelly Lemayian';return}
    const s=await D.getSocial(),t=KL.ui.TITLES[path];
    h.qs('#sb').innerHTML=KL.ui.sidebar(path,s);h.qs('#tb').innerHTML=KL.ui.topbar(path);
    h.qs('#bn').innerHTML=KL.ui.bottomNav(path);h.qs('#ftr').innerHTML=KL.ui.footer(s);
    document.title=(t?t[0]+' · ':'')+'Lord Kaelen · Kaelen Technologies';
  }
  function init(){
    h.on(document,'click','[data-act]',async(ev,t)=>{
      const a=t.dataset.act;
      if(a==='menu')document.body.classList.toggle('menu-open');
      else if(a==='theme'){const n=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=n;try{localStorage.setItem('kl_theme',n)}catch(x){}}
      else if(a==='logout'){sessionStorage.removeItem('kl_auth')}
      else if(a==='reset'){if(confirm('Reset all admin edits?')){await D.reset();KL.router.render()}}
      else if(a==='edit')KL.adminEdit(t.dataset.id);
      else if(a==='del'){if(confirm('Delete this item?')){await D.remove(KL.adm.key,t.dataset.id);KL.router.render()}}
      else if(a==='mx'&&(t.classList.contains('modal')||t.classList.contains('lb')?ev.target===t:true))document.getElementById('modal').innerHTML='';
    });
    h.on(document,'click','.sb a, .bn a',()=>document.body.classList.remove('menu-open'));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('menu-open');document.getElementById('modal').innerHTML=''}if(KL.lbKey)KL.lbKey(e)});
    KL.router.start();
    setTimeout(()=>document.getElementById('splash').classList.add('off'),900);
  }
  return{init,chrome};
})();
document.addEventListener('DOMContentLoaded',KL.app.init);
