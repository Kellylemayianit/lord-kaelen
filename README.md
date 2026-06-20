├── index.html                 # Genesis / Home
├── portfolio.html             # The Dossier Grid
├── contact.html               # Onboarding Terminal
│
├── assets/                    # Static UI Elements
│   ├── css/
│   │   ├── global.css         # Reset & layout framework
│   │   └── theme.css          # Lord Kaelen dark tactical styles
│   └── images/                # Local fallbacks and icons
│
├── data/                      # The Headless Database
│   ├── _manifest.json         # 🔑 The Master Index (Crucial)
│   ├── projects/
│   │   ├── sironosim.json
│   │   ├── vintex.json
│   │   ├── kelly.json
│   │   └── baseball.json
│   └── config/
│       └── agency.json        # Global socials, chat configs, bio data
│
└── src/                       # The Reactive Core (JS)
    ├── core/
    │   ├── engine.portfolio.js # Fetches manifest -> renders grid
    │   └── engine.modal.js     # Handles UI expansion & dynamic links
    │
    ├── integrations/           # Third-Party Logic Modules
    │   ├── api.booking.js      # OTA widget tracking & redirect logic
    │   ├── api.whatsapp.js     # Catalogue parsing & dynamic chat routing
    │   └── api.maps.js         # Google Maps embed/pin injection
    │
    └── utils/
        └── fetchManager.js     # Helper utility to load JSON files fast

        
