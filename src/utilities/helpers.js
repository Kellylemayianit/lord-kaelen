/* helpers: escape, delegated events, toast */
window.KL=window.KL||{};KL.pages={};
KL.h={
  esc:s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
  qs:(s,r=document)=>r.querySelector(s),
  on(root,ev,sel,fn){root.addEventListener(ev,e=>{const t=e.target.closest(sel);if(t&&root.contains(t))fn(e,t)})},
  toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(KL._tt);KL._tt=setTimeout(()=>t.classList.remove('show'),3200)},
  year:()=>new Date().getFullYear()
};
