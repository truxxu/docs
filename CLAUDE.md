# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A documentation/cheatsheet site built with Docusaurus 3.10.1 (with v4 future flag enabled), React 19, and TypeScript 6.

## Commands

- `npm start` — dev server with hot reload
- `npm run build` — production build to `build/`
- `npm run serve` — serve the production build locally
- `npm run typecheck` — TypeScript type checking (runs `tsc`)
- `npm run clear` — clear Docusaurus cache (`.docusaurus/`)

## Architecture

- **`docusaurus.config.ts`** — site config (title, navbar, footer, presets, theme). Uses `@docusaurus/preset-classic` with docs-only (blog disabled) + custom theme CSS.
- **`sidebars.ts`** — sidebar config. Currently auto-generates from `docs/` folder structure.
- **`docs/`** — documentation pages as `.mdx` files. Subdirectories use `_category_.json` for ordering/labels.
- **`src/pages/`** — standalone pages (homepage at `index.tsx`).
- **`src/css/custom.css`** — CSS custom properties for theming (light/dark mode via `[data-theme]`).
- **`static/`** — static assets served at site root (images, favicon).

## Key Details

- Node >= 20 required.
- Docs use MDX format (`.mdx` extension), not plain Markdown.
- Color mode respects system preference (`respectPrefersColorScheme: true`).
- Broken links are configured to throw errors (`onBrokenLinks: 'throw'`).
