/* dataLoader.js — the ONLY data import surface for pages/components. */
KL.dataLoader=(function(){
  const A=KL.api,cache={};
  const list=async(c,f)=>(f||!cache[c])?(cache[c]=await A.list(c)):cache[c];
  return{
    getSettings:()=>A.settings(),getSocial:()=>A.social(),setBrand:b=>A.setBrand(b),
    getBrands:f=>list('brands',f),getBrand:async id=>(await list('brands')).find(b=>b.id===id),
    getProjects:f=>list('projects',f),getProject:async id=>(await list('projects')).find(p=>p.id===id),
    list,
    async save(c,item){const r=await A.save(c,item);delete cache[c];return r},
    async remove(c,id){await A.remove(c,id);delete cache[c]},
    async reset(){await A.reset();Object.keys(cache).forEach(k=>delete cache[k])}};
})();
