/* dataLoader.js — the ONLY data import surface for pages/components. */
KL.dataLoader=(function(){
  const A=KL.api,cache={};
  const list=async(c,f)=>(f||!cache[c])?(cache[c]=await A.list(c)):cache[c];
  return{
    list,getSocial:()=>A.social(),setSocial:async o=>{const r=await A.setSocial(o);return r},getAssets:()=>A.assets(),
    getProjects:f=>list('projects',f),getProject:async id=>(await list('projects')).find(p=>p.id===id),
    getPhotos:f=>list('photos',f),getChronicle:f=>list('chronicle',f),getExperience:f=>list('experience',f),
    getServices:f=>list('services',f),
    async save(c,item){const r=await A.save(c,item);delete cache[c];return r},
    async remove(c,id){await A.remove(c,id);delete cache[c]},
    async reset(){await A.reset();Object.keys(cache).forEach(k=>delete cache[k])}};
})();
