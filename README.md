# For You — a little world, made for her

A one-page, no-backend romantic site: a flower garden opens with a glowing lily
as the entrance, then leads into a full love-story experience (letter, flip
cards, "open when" envelopes, your song, night sky, and a final petal-fall
reveal).

## Run it locally
Just open `index.html` in a browser — or, for the most reliable audio
behavior, serve it locally:

```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy on GitHub Pages
1. Create a new GitHub repo and push this whole folder (keep `assets/` next
   to `index.html`).
2. In the repo, go to **Settings → Pages**, set source to the `main` branch,
   root folder.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

## Customize it
Almost everything text-based lives at the top of **`script.js`**, in the
`CONFIG` object:
- `name` — your name for the final reveal
- `metDate` — the date the days-counter counts from (`YYYY-MM-DD`)
- `ourSong` — title/artist shown on the music player
- `thingsILove`, `openWhen`, `ifYouWere`, `whyReasons`, `compliments`,
  `secretMessage` — all the personal content

**Audio:**
- `assets/background-music.mp3` — soft ambient loop, starts quietly after
  she first taps/interacts
- `assets/our-song.mp3` — "Our Song," only plays on manual press, and pauses
  the background music while it plays

To swap either file, just replace it in `assets/` and keep the same
filename (or update the `src`/path in `index.html` and `script.js`).

**Visuals:** the garden (flowers, hills, house, boy figure, lily) is drawn
entirely in SVG/CSS inside `index.html` and `style.css` — no image files
needed, so it works anywhere without asset hunting. If you'd like to swap in
real illustrations or photos later, the flower/house/figure markup is
clearly sectioned near the top of `index.html` for easy replacement.

Made with care. 🌷
