# Lord Kaelen · Kaelen Technologies — one gateway, two assets
Vanilla-JS hash-routed SPA, no build step (open index.html or deploy the folder to Cloudflare).
- Gateway `#/` → Lord Kaelen `#/lord-kaelen` (chronicle, gallery) and Kaelen Technologies `#/technologies` (services, experience, work, hub).
- All content: `src/services/mockData.js`, or edit in `#/admin` (login email + password are set in `src/pages/admin.js`).
- Items with `needsReview:true` are placeholders: VOA 2017, Shifting Grades, Ngoto Boys, In My Shoes with Kelly, Facebook, and the LinkedIn experience. Add links in Admin.
- Mobile: hero/cover/CTA backgrounds switch to portrait art (`--img-m`) in `styles/components.css` (@media 700px).

## Images (assets/, 24 files)
lk-* = Lord Kaelen photos, kt-* = business, baseball-*, community-*, cover-*/avatar-* = crops, og-share-card = link preview.
Check before publishing: community-mentoring-boys (children), baseball-team-lineup, community-three-friends.
