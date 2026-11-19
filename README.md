# mehmetahsen.de

Personal site, built with [Astro](https://astro.build/) from its official portfolio template and deployed to
GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

## Layout

| Path | Contents |
|---|---|
| `src/content/projects/*.md` | One file per project; front matter sets title, picture, tags, and optional `app` and `repo` links |
| `src/pages/` | Home, project list, project pages |
| `public/sam-funktrainer/index.html` | The SAM-Funktrainer web app. **Do not edit here:** it is replaced automatically by the `publish-app` workflow of [sam-funktrainer](https://github.com/mehmetahsen/sam-funktrainer) whenever that project changes |

## Local work

Needs Node.js 22.23 or newer.

    npm install
    npm run dev       # http://localhost:4321
    npm run build     # output in dist/

The site loads no third-party resources (no web fonts, no analytics).
