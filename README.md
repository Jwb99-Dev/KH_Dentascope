# KH Dentascope UK — Website Documentation

## Folder Structure

```
kh-dentascope/
├── assets/
│   ├── css/
│   │   └── global.css          ← GLOBAL styles & design tokens (edit here first)
│   ├── js/
│   │   └── global.js           ← GLOBAL nav, footer, preloader (edit labels here)
│   └── images/                 ← Drop all image assets in here (see below)
│
├── home/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── services/
│   ├── index.html, style.css, script.js
├── products/
│   ├── index.html, style.css, script.js
├── resources/
│   ├── index.html, style.css, script.js
├── about/
│   ├── index.html, style.css, script.js
└── contact/
    ├── index.html, style.css, script.js
```

---

## Required Image Assets
Place your image files in `assets/images/` with the following filenames exactly:

| Filename                    | Used For                              |
|-----------------------------|---------------------------------------|
| `nav-logo.png`              | Navigation bar logo                   |
| `tooth-load-screen.png`     | Preloader animation graphic           |
| `hero-image.jpg`            | Hero section right-hand image         |
| `brand-alltion-uk.png`      | Alltion brand logo                    |
| `brand-kaps.png`            | KAPS brand logo                       |
| `brand-xpedent.png`         | Xpedent brand logo                    |
| `services-icon-demos.png`   | Services tile icon                    |
| `services-icon-training.png`| Services tile icon                    |
| `services-icon-servicing.png`| Services tile icon                   |
| `services-icon-education.png`| Services tile icon                   |

All images have graceful fallbacks if not present (placeholder text or emoji).

---

## How to Edit Common Things

### Change a navigation label (e.g. rename "About" to "About Us")
Open `assets/js/global.js` — find the `NAV_CONFIG` object near the top.
Change the `label` value. It will update in every nav instance on every page automatically.

```js
{ label: "About Us", href: "../about/index.html" }
```

### Change the CTA button text or link
In `assets/js/global.js`:
```js
const NAV_CONFIG = {
  cta: "Get in Touch",        // ← change button text here
  ctaHref: "../contact/index.html",   // ← change destination here
```

### Change fonts (headings or body)
In `assets/css/global.css`, find the `:root` block:
```css
--font-heading: 'Sora', sans-serif;
--font-body:    'Inter', sans-serif;
```
Replace with any Google Font name and update the `@import` at the top of the file.

### Change brand colours
In `assets/css/global.css`, `:root`:
```css
--colour-primary: #054A80;
```
Change the hex value and it cascades to every element using that variable.

### Change heading sizes
In `assets/css/global.css`, find the `TYPOGRAPHY` section:
```css
h1 { font-size: clamp(2rem, 4.5vw, 3.25rem); }
```
`clamp(min, preferred, max)` — adjust as needed.

### Change contact details
Open `contact/index.html` — find the section labelled `CONTACT DETAILS`.
Update the email, phone and address there.

### Connect the contact form to a real backend
Open `contact/script.js` — find the comment block that says `TO CONNECT A REAL BACKEND`.
Follow the Formspree (or similar) example in the comments.

### Add a new dropdown item to the nav
In `assets/js/global.js`, find the relevant dropdown array, e.g.:
```js
dropdown: [
  { label: "Demos & Room Assessment", href: "../services/index.html#demos" },
  { label: "My New Item",             href: "../services/index.html#myanchor" },
]
```
Add a matching `id="myanchor"` to the target section in the relevant page.

---

## Opening the site locally
Open any `index.html` file directly in a browser (Chrome/Firefox/Edge).
For best results, use a local server (e.g. VS Code Live Server extension).

## Frameworks used
**None.** The site is pure HTML, CSS and JavaScript — no build tools, no dependencies.
