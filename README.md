# Orbit Systems — Landing Page

Static site: HTML/CSS/vanilla JS, no build step required.

## Files
- `index.html` — page markup
- `style.css` — main styles
- `atlas.css` — motion atlas grid section
- `fallback.css` — fallback visuals shown when a video/image fails to load
- `app.js` — cursor, clock, telemetry counters, intersection observers

## Assets
This repo does not include `/assets` (videos, images) — add your own media files into an `assets/` folder at the project root, matching the filenames referenced in `index.html` (e.g. `assets/hero-orbit.mp4`, `assets/security-nodes.png`, etc).

## Local preview
Open `index.html` directly, or serve it locally so relative video paths behave consistently:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy on GitHub Pages
1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`.
4. Save. Your site will be live at `https://<username>.github.io/<repo-name>/` within a minute or two.
