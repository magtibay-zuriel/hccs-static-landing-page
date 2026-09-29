# HCCS Alumni Association Static Lnding Page

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

## Image Assets

Keep images used by the app in `src/assets/` and import them from the relevant source file. The header uses `hccs-logo2.png`; the hero section uses `hccs-campus.jpg`.
