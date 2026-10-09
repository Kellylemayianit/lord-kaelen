/* contact: pick a side, WhatsApp-first message with receipt */
KL.pages.contact=async function(root){
  const u=KL.ui,e=KL.h.esc,I=KL.icon,s=await KL.dataLoader.getSocial();
  root.innerHTML=`<div class="two">${u.panel('Send a message',`<div id="cc">
    <div class="field"><label>Who is this for?</label><select id="w"><option value="Kaelen Technologies">Kaelen Technologies · a project or job</option><option value="Lord Kaelen">Lord Kaelen · press, collaboration, hello</option></select></div>
    <div class="field"><label>Your name</label><input id="n" autocomplete="name"><span class="err" id="en"></span></div>
    <div class="field"><label>Phone or email (optional)</label><input id="c"><span class="err" id="ec"></span></div>
    <div class="field"><label>What do you need?</label><textarea id="m" rows="5"></textarea><span class="err" id="em"></span></div>
    <button class="btn btn--t" id="go">Prepare my message</button></div>`)}
    ${u.panel('Or reach out directly',`<div class="rows">${[['WhatsApp',s.whatsapp,'chat','Fastest reply'],['Telegram',s.telegram,'share','@Kaelen254'],['LinkedIn',s.linkedin,'work','Professional profile'],['GitHub',s.github,'code','Code and repos']].map(([n,h,i,d])=>
      `<a class="row" href="${e(h)}" target="_blank" rel="noopener"><span class="row__ic">${I(i,22)}</span><span class="row__tx"><b>${n}</b><small>${d}</small></span>${I('ext',16)}</a>`).join('')}</div>`,null,'pb--0')}</div>`;
  const $=id=>root.querySelector('#'+id);
  $('go').onclick=()=>{
    const n=$('n').value.trim(),c=$('c').value.trim(),m=$('m').value.trim(),w=$('w').value;
    $('en').textContent=n?'':'Enter your name.';$('em').textContent=m?'':'Tell us what you need.';
    const ph=c.replace(/[\s-]/g,''),ok=!c||/^\S+@\S+\.\S+$/.test(c)||/^(\+?254|0)[17]\d{8}$/.test(ph);
    $('ec').textContent=ok?'':'Enter a valid email or Kenyan phone number.';
    if(!n||!m||!ok)return;
    const msg=`Hi ${w}, I'm ${n}${c?` (${c})`:''}. ${m}`;
    $('cc').innerHTML=`<div class="receipt"><h3>Message ready</h3><p>Copy it, then send it on WhatsApp or Telegram:</p>
      <p style="background:var(--bg);padding:12px;border-radius:8px">${e(msg)}</p>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn btn--sm" id="cp">Copy message</button>
      <a class="btn btn--sm btn--t" href="${e(s.whatsapp)}" target="_blank" rel="noopener">Open WhatsApp</a>
      <a class="btn btn--sm btn--line" href="${e(s.telegram)}" target="_blank" rel="noopener">Telegram</a></div></div>`;
    root.querySelector('#cp').onclick=()=>{try{navigator.clipboard.writeText(msg)}catch(x){}KL.h.toast('Copied')};
  };
};
