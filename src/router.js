/* router.js — hash parsing, guards, skeleton + progress bar, dispatch */
KL.router=(function(){
  const routes=[['#/admin/login','adminLogin'],['#/admin','adminHome'],['#/admin/:coll','adminColl'],['#/projects/:id','project'],['#/projects','projects'],['#/hub','hub'],['#/contact','contact'],['#/','home']];
  function match(path){const p=path.split('/');
    for(const [pat,page] of routes){const r=pat.split('/');if(r.length!==p.length)continue;const params={};
      if(r.every((s,i)=>s[0]===':'?(params[s.slice(1)]=decodeURIComponent(p[i]),true):s===p[i]))return{page,params}}return null}
  async function render(){
    let hash=location.hash||'#/';if(hash==='#')hash='#/';
    const path=hash.split('?')[0],m=match(path),old=document.getElementById('view'),view=old.cloneNode(false),bar=document.getElementById('bar');
    old.replaceWith(view);clearInterval(KL.timer);document.body.classList.remove('menu-open');
    if(path.startsWith('#/admin')&&path!=='#/admin/login'&&!KL.isAuthed()){location.hash='#/admin/login';return}
    bar.style.width='70%';view.innerHTML=KL.ui.skeleton();
    await KL.app.chrome(path);
    if(m&&KL.pages[m.page])await KL.pages[m.page](view,m);
    else view.innerHTML=KL.ui.banner('Page not found','That page does not exist.',KL.brand.bannerImg)+'<div class="w section"><a class="btn" href="#/">Go home</a></div>';
    bar.style.width='100%';setTimeout(()=>bar.style.width='0',300);window.scrollTo(0,0);
  }
  return{start(){window.addEventListener('hashchange',render);render()},render};
})();
