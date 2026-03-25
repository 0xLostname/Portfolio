# 0xArun — Portfolio (React + Vite)

## How to run

```bash
# 1. install dependencies
npm install

# 2. start dev server
npm run dev
```

Then open http://localhost:5173 in your browser.

## How to build for production

```bash
npm run build
```

This creates a `dist/` folder — plain HTML/CSS/JS you can deploy anywhere.

## Project structure

```
arun-portfolio/
├── index.html               ← Vite entry point
├── vite.config.js           ← Vite + React plugin config
├── package.json             ← dependencies
├── public/                  ← static files (certificate images)
│   ├── cert_zenithon.jpg
│   ├── cert_lithos.jpg
│   └── cert_cultrang.jpg
└── src/
    ├── main.jsx             ← mounts React app into index.html
    ├── App.jsx              ← root component, scroll reveal logic
    ├── App.css
    ├── index.css            ← global styles + CSS variables
    └── components/
        ├── ParticleCanvas   ← animated canvas background
        ├── Navbar           ← fixed nav with smooth scroll
        ├── Hero             ← typing animation, say hello
        ├── Divider          ← SVG decorative dividers
        ├── Skills           ← skills table with progress bars
        ├── Projects         ← project cards grid
        ├── Certificates     ← show/hide certificates (useState)
        ├── About            ← terminal widget
        └── Contact          ← contact links
```

## Key React concepts used

- `useState` — tracks typing animation, greeting text, cert open/close state
- `useEffect` — runs the typing animation and canvas on mount
- `useRef` — gives direct access to the canvas DOM element
- Components — each section is its own reusable `.jsx` file
- Props — `Divider` accepts a `fancy` prop to switch between two styles
- `.map()` — renders skills, projects, and certs from arrays instead of repeating HTML
