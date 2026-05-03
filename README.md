# The Language Laboratory LLC — Website

Public marketing site for **The Language Laboratory LLC**, a learning-systems-design and applied-linguistics practice founded by **Jonathan Michael Miljus**.

Live site: **https://www.thelanguagelaboratory.org/**
GitHub Pages source: **https://jonathanmiljus.github.io/TheLanguageLabLLC/**

## What this site is

Single-page, static HTML site. No build step, no framework, no tracking. A handful of files do all the work:

| File | Purpose |
|------|---------|
| `index.html` | The whole site. Two service tracks (Individuals, Organizations), about, philosophy, credentials, research, expertise, contact. |
| `styles.css` | All styling. Navy / teal / gold palette pulled from the logo. |
| `script.js` | Mobile nav, sticky header, scroll fade-ins, mailto-based contact form. |
| `CNAME` | Tells GitHub Pages to serve this repo at `www.thelanguagelaboratory.org`. |
| `assets/images/` | Logo, headshot, founder portrait. |

## What the site offers

**For Individuals:** Multilingual academic coaching, academic English, doctoral writing support, personal AI workflow coaching, language-learning content (including the free Independent English Learning course companion and English Grammar for Spanish Speakers reference), speaking & guest lectures.

**For Organizations:** Corporate / workforce training design, AI-in-learning strategy & consulting, curriculum audits & redesign, multilingual workforce / ESOL training, educator & trainer professional development, fractional learning architect retainers.

## Contact

- Email: jonathan@thelanguagelaboratory.org
- Secondary: info@thelanguagelaboratory.org
- LinkedIn: https://www.linkedin.com/in/jonathanmichaelmiljus/

## Editing

Open `index.html` in any editor. Sections are clearly labelled with HTML comments — search for the section name (e.g. `<!-- Services for Organizations -->`). Edit the copy, save, push to GitHub. The change is live within ~30 seconds.

## Custom domain (DNS)

The repo's `CNAME` file points the GitHub Pages deployment at `www.thelanguagelaboratory.org`. For DNS to resolve correctly:

- Apex `thelanguagelaboratory.org` → A records:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `www.thelanguagelaboratory.org` → CNAME → `jonathanmiljus.github.io`

After DNS propagates, enable **Settings → Pages → Enforce HTTPS** in this repo.

See `MIGRATION_FROM_ZEN_BUSINESS.md` for the full step-by-step for moving the domain off ZenBusiness.

## License

Site copy and design © 2026 The Language Laboratory LLC. Reuse of code structure for personal projects is fine; please remove the brand identity (logo, name, copy).
