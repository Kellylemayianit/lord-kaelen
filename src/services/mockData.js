/* seed data — one site, two brands. Delete once a real backend (D1) is live.
   needsReview:true = placeholder copy, check it from #/admin. */
window.KL=window.KL||{};
KL.mockData={
  settings:{brand:'personal'},
  social:{
    whatsapp:'https://wa.me/qr/MPS5LLGWN57PC1',telegram:'https://t.me/Kaelen254',
    linkedin:'https://www.linkedin.com/in/kelly-lemayian-5a3a29295',github:'https://github.com/Kellylemayianit'},
  brands:[
    {id:'personal',name:'Lord Kaelen',initials:'LK',slogan:'Kelly Lemayian · Full-stack engineer',cta:'Hire me',
     copyright:'© {y} Kelly Lemayian (Lord Kaelen). All rights reserved.',
     footerAbout:'Full-stack engineer in Kajiado South — React, TypeScript, DevOps and AI integration. In tech since 2023.',
     nav:[['#/','Home'],['#/projects','Projects'],['#/hub','Tech hub'],['#/contact','Contact']],
     bannerImg:5,
     slides:[
      {eyebrow:'Lord Kaelen · Kajiado South',h1:'Kelly Lemayian builds products that ship.',p:'Full-stack engineer working across React, TypeScript, DevOps and AI integration. In tech since 2023 — now running a tech hub in Kajiado South.',bg:8,fig:1,c1:['See my work','#/projects'],c2:['Get in touch','#/contact']},
      {eyebrow:'The hub',h1:'A tech hub in Kajiado South.',p:'Run in partnership with Ligospace — a human synchronization space for potential, opportunity and action.',bg:11,fig:5,c1:['Explore the hub','#/hub'],c2:['Contact','#/contact']},
      {eyebrow:'Open to work',h1:'Remote contracts and technical bounties.',p:'Short engagements or longer builds — from a blank repo to something people can actually use.',bg:10,fig:3,c1:['Hire me','#/contact'],c2:['Projects','#/projects']}],
     stats:[['2023','In tech since'],['4','Client sites live'],['Remote','Contract-ready'],['AI','Integration focus']],
     services:[['Frontend engineering','React and TypeScript interfaces built for speed and clarity — typed, componentized, easy to hand off.'],['DevOps & infra','CI/CD, deployment pipelines and hosting so a project ships reliably, not just once on a laptop.'],['AI integration','Wiring LLMs and agent tooling into real products, from prototype to production.']],
     moments:[2,3,10,6],ctaH:'Have something to build?',ctaP:'Tell me what you need — I usually reply on WhatsApp.'},
    {id:'agency',name:'Kaelen Technologies',initials:'KT',slogan:'Digital hub · Kajiado South',cta:'Start a project',
     copyright:'© {y} Kaelen Technologies — a digital hub by Lord Kaelen. All rights reserved.',
     footerAbout:'Kaelen Technologies is a digital hub in Kajiado South building websites, booking sites and web apps for businesses across Kenya.',
     nav:[['#/','Home'],['#/projects','Our work'],['#/hub','The hub'],['#/contact','Contact']],
     bannerImg:11,
     slides:[
      {eyebrow:'Kaelen Technologies',h1:'Websites and apps for businesses in Kenya.',p:'Hotels, guest houses and agencies — from first sketch to live domain, built and looked after by one digital hub.',bg:10,fig:11,c1:['Our work','#/projects'],c2:['Start a project','#/contact']},
      {eyebrow:'Built in Kajiado South',h1:'A digital hub, in partnership with Ligospace.',p:'Design, development, hosting and AI integration under one roof.',bg:8,fig:2,c1:['About the hub','#/hub'],c2:['Contact','#/contact']}],
     stats:[['4','Sites delivered'],['2023','Building since'],['Kajiado S.','Hub location'],['Ligospace','Partner']],
     services:[['Websites & booking sites','Fast, mobile-first sites for hotels, guest houses and agencies, with direct inquiry paths.'],['Web apps & dashboards','Custom tools with an admin your team can edit without touching code.'],['AI integration','Chat, automation and LLM features wired into your product.'],['Hosting & DevOps','Domains, deployment and upkeep so your site stays up.']],
     moments:[],ctaH:'Ready to put your business online?',ctaP:'Tell us about the project and we will come back with a plan.'}],
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
