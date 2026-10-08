/* api.js — async client; persists to localStorage. Swap BODIES for fetch() later. */
KL.api=(function(){
  const KEY='kl_data_v2',D=200;
  const seed=()=>JSON.parse(JSON.stringify(KL.mockData));
  let st;try{st=JSON.parse(localStorage.getItem(KEY))}catch(e){}
  if(!st){st=seed();try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}}
  const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(st))}catch(e){}};
  const out=v=>new Promise(r=>setTimeout(()=>r(JSON.parse(JSON.stringify(v===undefined?null:v))),D));
  return{
    list:c=>out(st[c]||[]),
    get:(c,id)=>out((st[c]||[]).find(x=>x.id===id)),
    save(c,item){const L=st[c]=st[c]||[];if(!item.id)item.id='p-'+Math.random().toString(36).slice(2,8);
      const i=L.findIndex(x=>x.id===item.id);if(i<0)L.unshift(item);else L[i]=Object.assign({},L[i],item);save();return out(item)},
    remove(c,id){st[c]=(st[c]||[]).filter(x=>x.id!==id);save();return out(true)},
    settings:()=>out(st.settings),social:()=>out(st.social),
    setBrand(b){st.settings.brand=b;save();return out(true)},
    reset(){st=seed();save();return out(true)}};
})();
