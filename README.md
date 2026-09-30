# HCCSI Alumni Association Static Lnding Page

A static React and TypeScript landing page for the Holy Cross College of Sasa Alumni Association. Built with Vite.

## Project Structure

```text
.
|-- src/
|   |-- assets/
|   |   |-- hccs-campus.jpg
|   |   |-- hccs-logo.png
|   |   `-- hccs-logo2.png
|   |-- App.css
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|   `-- vite-env.d.ts
|-- .gitignore
|-- index.html
|-- package.json
|-- package-lock.json
|-- README.md
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
`-- vite.config.ts
```

## Requirements

- Node.js and npm

## Run Locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `master`.

1. In the repository on GitHub, open **Settings > Pages**.
2. Set the build and deployment source to **GitHub Actions**.
3. Push changes to `master` or run the **Deploy to GitHub Pages** workflow manually from the **Actions** tab.

After DNS validation and the workflow deployment complete, the site is available at <https://alumni-hccsi.techadviseph.com/>.

## Image Assets

Keep images used by the app in `src/assets/` and import them from the relevant source file. The header uses `hccs-logo2.png`; the hero section uses `hccs-campus.jpg`.
