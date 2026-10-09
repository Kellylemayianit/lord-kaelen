/* seed data — ONE person, TWO assets (Lord Kaelen · Kaelen Technologies).
   needsReview:true = placeholder / unverified copy. Check it from #/admin before going live.
   Photos live in assets/ and are listed once, in `photos`. */
window.KL=window.KL||{};
KL.mockData={
  social:{
    whatsapp:'https://wa.me/qr/MPS5LLGWN57PC1',telegram:'https://t.me/Kaelen254',
    linkedin:'https://www.linkedin.com/in/kelly-lemayian-5a3a29295',github:'https://github.com/Kellylemayianit',
    facebook:'',youtube:''},
  assets:{
    lk:{id:'lk',name:'Lord Kaelen',person:'Kelly Lemayian',tag:'The person',
        line:'Baseball, writing, film and community — the story of Kelly Lemayian.',
        cover:'cover-lord-kaelen-wide',coverM:'lk-bike-smile',avatar:'avatar-lord-kaelen-square',route:'#/lord-kaelen',cta:'Open Lord Kaelen'},
    kt:{id:'kt',name:'Kaelen Technologies',person:'Digital hub · Kajiado South',tag:'The business',
        line:'Developer to digital marketer — websites, apps, AI and growth for businesses in Kenya.',
        cover:'cover-kaelen-technologies-wide',coverM:'kt-working-laptop',avatar:'avatar-kaelen-technologies-square',route:'#/technologies',cta:'Open Kaelen Technologies'}},
  /* every photo, one place. a = which asset it belongs to, t = gallery filter */
  photos:[
    {id:'lk-bike-smile',a:'lk',t:'Portraits',alt:'Kelly smiling on his motorbike under acacia trees'},
    {id:'lk-smile-portrait',a:'lk',t:'Portraits',alt:'Close portrait of Kelly smiling outdoors'},
    {id:'lk-portrait-blue-sky',a:'lk',t:'Portraits',alt:'Kelly against a clear blue sky'},
    {id:'lk-bucket-hat-profile',a:'lk',t:'Portraits',alt:'Kelly in a camouflage bucket hat, side profile'},
    {id:'lk-lowlight-closeup',a:'lk',t:'Portraits',alt:'Low-light close-up portrait of Kelly'},
    {id:'lk-rooftop-selfie',a:'lk',t:'Portraits',alt:'Rooftop selfie with a cloudy sky behind'},
    {id:'lk-bike-lookout',a:'lk',t:'On the road',alt:'Kelly resting beside his motorbike'},
    {id:'lk-bike-dirt-road',a:'lk',t:'On the road',alt:'Kelly on a motorbike on a dirt road'},
    {id:'lk-night-crouch',a:'lk',t:'Street',alt:'Kelly crouching at night in a navy jacket'},
    {id:'lk-night-standing',a:'lk',t:'Street',alt:'Kelly standing at night in a grey tee'},
    {id:'lk-red-jersey',a:'lk',t:'Street',alt:'Kelly in a red jersey, hands crossed'},
    {id:'lk-bench-duo',a:'lk',t:'Friends',alt:'Kelly and a friend on a wooden bench in the sun'},
    {id:'lk-garden-rest',a:'lk',t:'Friends',alt:'Kelly relaxing on the grass by a wooden fence'},
    {id:'lk-room-green-beanie',a:'lk',t:'Friends',alt:'Kelly in a green beanie, seated indoors'},
    {id:'baseball-batter-night',a:'lk',t:'Baseball',alt:'Kelly at bat on a floodlit night pitch'},
    {id:'baseball-team-lineup',a:'lk',t:'Baseball',alt:'A baseball team lined up at home plate',review:'Team group — confirm everyone is happy to be shown.'},
    {id:'community-three-friends',a:'lk',t:'Community',alt:'Three friends standing together on a grass field',review:'Check everyone pictured is happy to be shown.'},
    {id:'community-mentoring-boys',a:'lk',t:'Community',alt:'Kelly with two young boys at a community moment',review:'Contains children — get a parent or guardian OK, or delete this file.'},
    {id:'kt-working-laptop',a:'kt',t:'Work',alt:'Kelly working on a laptop at a desk'}],
  /* Lord Kaelen · chronicle. Only titles + years from the brief are filled in; no outcomes invented. */
  chronicle:[
    {id:'voa-baseball-2017',year:'2017',type:'Press',title:'Baseball in Kenya',outlet:'VOA News',photo:'baseball-team-lineup',url:'',needsReview:true,
     blurb:'News coverage of baseball in Kenya, 2017. Add the link and describe your part in it.'},
    {id:'shifting-grades-2022',year:'2022',type:'Writing',title:'Shifting Grades · Logarithms',outlet:'Shifting Grades',photo:'',url:'',needsReview:true,
     blurb:'A 2022 piece on logarithms. Add the link and a one-line summary.'},
    {id:'ngoto-boys',year:'',type:'Writing',title:'Ngoto Boys',outlet:'By Kelly Lemayian',photo:'',url:'',needsReview:true,
     blurb:'Written by Kelly Lemayian. Add the year, link and a one-line summary.'},
    {id:'in-my-shoes-with-kelly',year:'',type:'Film',title:'In My Shoes with Kelly',outlet:'YouTube documentary',photo:'lk-bike-lookout',url:'',needsReview:true,
     blurb:'A documentary about Kelly on YouTube. Paste the video link and the year.'},
    {id:'facebook-archive',year:'',type:'Social',title:'Facebook life archive',outlet:'Facebook',photo:'',url:'',needsReview:true,
     blurb:'Photos, posts and life updates are being pulled into this timeline. Paste the profile link in Admin → Links.'}],
  /* Kaelen Technologies · experience. Seeded from what is already public in the repo/README;
     replace with LinkedIn roles (LinkedIn blocks automated reading). */
  experience:[
    {id:'x-start',period:'2023',role:'Entered software',org:'Self-directed',tags:['JavaScript','React'],needsReview:true,
     summary:'Started building in tech in 2023. Replace with your first role or training from LinkedIn.'},
    {id:'x-fullstack',period:'2023 – now',role:'Full-stack engineer',org:'Freelance · Remote',tags:['React','TypeScript','CI/CD'],needsReview:true,
     summary:'React and TypeScript interfaces, deployment pipelines and hosting for client sites. Add LinkedIn employer and dates.'},
    {id:'x-ai',period:'2025 – now',role:'AI integration',org:'Kaelen Technologies',tags:['LLMs','Agents'],needsReview:true,
     summary:'Wiring LLMs and agent tooling into real products, from prototype to production.'},
    {id:'x-marketing',period:'Add dates',role:'Digital marketing',org:'Add employer',tags:['SEO','Social','Campaigns'],needsReview:true,
     summary:'The marketing side of the business. Add campaigns, channels and results from LinkedIn.'},
    {id:'x-hub',period:'2026',role:'Tech hub, Kajiado South',org:'With Ligospace',tags:['Community','Hosting'],needsReview:false,
     summary:'Runs a tech hub in partnership with Ligospace, a human synchronization space for potential, opportunity and action.'}],
  services:[
    {t:'Websites & booking sites',d:'Fast, mobile-first sites for hotels, guest houses and agencies, with direct inquiry paths.',i:'layers'},
    {t:'Web apps & dashboards',d:'Custom tools with an admin your team can edit without touching code.',i:'code'},
    {t:'AI integration',d:'Chat, automation and LLM features wired into your product.',i:'spark'},
    {t:'Hosting & DevOps',d:'Domains, deployment and upkeep so your site stays up.',i:'cloud'},
    {t:'Digital marketing',d:'Search visibility, social content and campaigns that send people to your door.',i:'megaphone'}],
  stack:['React','TypeScript','JavaScript','CI/CD','Cloudflare','GitHub','LLM integration','Digital marketing'],
  projects:[
    {id:'sironosimghotel',title:'Sironosimg Hotel',tagline:'Hotel website',year:'2026',hue:215,tags:['Hospitality','Website'],liveUrl:'https://sironosimghotel.com',repoUrl:'',needsReview:true,
     summary:'Placeholder — add what was built for this hotel.',challenge:'What problem was this solving?',approach:'What was built, and with what stack?',result:'What changed because of it?'},
    {id:'vintex-guest-house',title:'Vintex Guest House',tagline:'Guest house in Kimana, Kajiado County',year:'2026',hue:200,tags:['Hospitality','Website'],liveUrl:'https://vintguesthouse.co.ke',repoUrl:'',needsReview:true,
     summary:'Placeholder — add the real story of the Vintex build.',challenge:'What problem was this solving?',approach:'What was built, and with what stack?',result:'What changed because of it?'},
    {id:'taleks-agency',title:'Taleks Agency',tagline:'Agency website',year:'2026',hue:230,tags:['Agency','Website'],liveUrl:'https://taleksagency.co.ke',repoUrl:'',needsReview:true,
     summary:'Placeholder — add what was built for Taleks Agency.',challenge:'What problem was this solving?',approach:'What was built, and with what stack?',result:'What changed because of it?'},
    {id:'ligospace',title:'Ligospace',tagline:'A human synchronization space',year:'2026',hue:190,tags:['Community','Platform'],liveUrl:'https://ligospace.co.ke',repoUrl:'',needsReview:true,
     summary:'The digital home of Ligospace — the partner behind the Kajiado South tech hub.',challenge:'Give a community-first idea a clear online home.',approach:'Placeholder — describe the build.',result:'Placeholder — add outcomes.'},
    {id:'safari-stays',title:'Safari Stays',tagline:'Booking-inquiry platform for Kenyan safari stays',year:'2025',hue:245,tags:['Hospitality','Booking flow'],liveUrl:'',repoUrl:'https://github.com/Kellylemayianit/safari_stays',needsReview:true,
     summary:'Property listings and direct inquiry paths for safari accommodation.',challenge:'Guests need to compare stays and reach the host fast.',approach:'Mobile-first cards, a detail view per stay, and WhatsApp/call/email inquiry.',result:'Placeholder — add real outcomes.'}]
};
