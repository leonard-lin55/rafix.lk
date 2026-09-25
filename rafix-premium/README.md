# Rafix (Pvt) Ltd — Premium Website

A dark, premium, frontend-only company profile website for Rafix (Pvt) Ltd, built with plain HTML, CSS and JavaScript — no backend, no database, no build step.

## Folder structure

```
rafix-premium/
├── index.html        → the whole site (all sections)
├── css/style.css      → dark theme, glassmorphism cards, animations
├── js/script.js       → siteConfig (images/links), nav, scroll reveal, particles
└── README.md
```

## Editing everything from one place

Open `js/script.js` — the very first thing in the file is `siteConfig`:

- `images` — every photo on the site (hero, about, gallery, etc.) is one line here. Replace any URL with your own photo's link (or a path like `assets/images/yourphoto.jpg` once you upload real Rafix photos) and it updates everywhere that image is used.
- `whatsappNumber`, `whatsappLink`, `phoneLink`, `emailLink` — contact details.
- `facebookLink` / `instagramLink` — currently both point to `https://rafix.lk`, as given.
- `googleMapsLink` — currently a Maps *search* for "Mahabuthgamuwa, Angoda, Sri Lanka" (no coordinates were invented). Once you have an exact Google Maps business listing link, paste it here instead.
- `video1Url` / `video2Url` — the two Facebook Reel links. Replace with new ones any time.

No other file needs to change for any of the above.

## About the images

Every photo currently on the site is a real, freely-licensed photograph (Unsplash License or Pexels License — both permit commercial use, no permission or attribution required):

- Hero / outdoor: Unsplash, camera mounted on a pole
- About / commercial / office: Pexels, surveillance cameras on modern buildings
- Residential, indoor, installation: Pexels, various camera installations
- Equipment: Pexels, network server rack

None of these are Hikvision-branded marketing photos — I couldn't source or verify rights to reproduce those, so the equipment section uses a neutral, real CCTV-equipment photo instead and names Hikvision only in text, as the brief specified (no "authorized dealer" claim is made anywhere). Swap in your own installation photos via `siteConfig.images` whenever you're ready — nothing else needs to change.

## The two Facebook videos

Facebook Reels generally can't be reliably embedded as a playable iframe on an external site (Facebook frequently blocks it depending on privacy/App Review settings), so rather than risk a broken embed, each video is a styled card with a thumbnail, play icon and "Watch on Facebook" button that opens your exact Reel link in a new tab. If you'd like, this can be upgraded later to a real embedded player using Facebook's official Video Plugin, provided the Page's embed settings allow it.

## Running it locally

Double-click `index.html` — it opens directly in your browser, no installation needed.

## Deploying free with Netlify

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `rafix-premium` folder onto the page.
3. Netlify gives you a live link instantly (e.g. `random-name.netlify.app`).

For auto-deploys on every future edit, push the folder to a GitHub repo instead, then in Netlify choose **Add new site → Import an existing project** and connect that repo (no build command needed).

## Custom domain (e.g. rafix.lk)

In Netlify: **Domain settings → Add a custom domain** → enter your domain, then add the DNS records Netlify shows you at your domain registrar. Free HTTPS is issued automatically once verified.
