/* contact: WhatsApp-first form with receipt */
KL.pages.contact=async function(root){
  const b=KL.brand,u=KL.ui,e=KL.h.esc,s=await KL.dataLoader.getSocial();
  root.innerHTML=u.banner('Contact',b.id==='agency'?'Tell us about your project.':'Tell me what you need.',b.bannerImg)+`<section class="section"><div class="w"><div class="card formcard" id="cc">
    <div class="field"><label>Your name</label><input id="n"><span class="err" id="en"></span></div>
    <div class="field"><label>Phone or email (optional)</label><input id="c"><span class="err" id="ec"></span></div>
    <div class="field"><label>What do you need?</label><textarea id="m" rows="5"></textarea><span class="err" id="em"></span></div>
    <button class="btn btn--t" id="go">Prepare my message</button></div></div></section>`;
  const $=id=>root.querySelector('#'+id);
  $('go').onclick=()=>{
    const n=$('n').value.trim(),c=$('c').value.trim(),m=$('m').value.trim();
    $('en').textContent=n?'':'Please enter your name.';$('em').textContent=m?'':'Please tell us what you need.';
    const ph=c.replace(/[\s-]/g,''),ok=!c||/^\S+@\S+\.\S+$/.test(c)||/^(\+?254|0)[17]\d{8}$/.test(ph);
    $('ec').textContent=ok?'':'Enter a valid email or Kenyan phone number.';
    if(!n||!m||!ok)return;
    const msg=`Hi ${b.name}, I'm ${n}${c?` (${c})`:''}. ${m}`;
    $('cc').innerHTML=`<div class="receipt"><h3>Message ready</h3><p>Copy it, then send it on WhatsApp or Telegram:</p>
      <p style="background:var(--bg);padding:12px;border-radius:6px">${e(msg)}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn--sm" id="cp">Copy message</button>
      <a class="btn btn--sm btn--t" href="${s.whatsapp}" target="_blank" rel="noopener">Open WhatsApp</a>
      <a class="btn btn--sm btn--line" href="${s.telegram}" target="_blank" rel="noopener">Telegram</a></div></div>`;
    root.querySelector('#cp').onclick=()=>{try{navigator.clipboard.writeText(msg)}catch(x){}KL.h.toast('Copied')};
  };
};
