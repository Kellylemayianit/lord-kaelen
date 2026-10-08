# Lord Kaelen · Kaelen Technologies — one site, two brands

Vanilla-JS, hash-routed SPA, no build step (classic `<script>` tags, so double-clicking `index.html` works).
Design follows the KRWC framework: tokens → components → pages, one data surface (`dataLoader.js`).
Palette: deep blue gradients + orange (`#f05a1f`) as the action accent; dark by default, light toggle in the header.

## Two brands, one dashboard switch
`#/admin` → **Site identity** toggle: *Personal · Lord Kaelen* ↔ *Agency · Kaelen Technologies*.
Header, hero slides, stats, services, footer copyright and closing banner all follow the active brand
(edit each brand's copy under **Brand copy**). Resolution order: `?brand=agency` → `HOST_MODES[hostname]` (in `src/app.js`) → saved setting.
The saved setting lives in this browser's localStorage; to fix a brand per domain, fill `HOST_MODES`.

## Admin
`#/admin/login` — demo credentials `kelly` / `buildinpublic` (**change in `src/pages/admin.js` before going live**).
Projects and brand copy are editable; items marked `needsReview` are placeholder copy.

## Images (`assets/1.jpg … 11.jpg`)
| New | Original upload | Used for |
|---|---|---|
| 1 | …12_23_39_PM (1) | hero figure (personal) |
| 2 | …12_23_39_PM | agency hero figure, moments |
| 3 | …12_23_38_PM (3) | hero figure, moments |
| 4 | …12_23_38_PM (2) | spare |
| 5 | …12_23_38_PM (1) | hero figure, banners (personal) |
| 6 | …12_23_37_PM (3) — bottom camera bar cropped | moments |
| 7 | …12_23_36_PM (1) | spare |
| 8 | …12_23_36_PM | hero backgrounds |
| 9 | …12_23_35_PM (2) | closing banner background |
| 10 | …12_23_35_PM | hero background, moments |
| 11 | …12_23_34_PM (laptop) | hero, banners (agency) |

Left out on purpose: photos with another photographer's watermark ("karis Lens", "kenyan~justice") and photos of
minors / team groups. Add them back only if cleared.

## Backend later
Swap the bodies in `src/services/api.js` for `fetch()` calls (Cloudflare Worker + D1 fits); nothing above it changes.
