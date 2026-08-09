# Gauresh G Pai — Portfolio

This repository contains the implementation of my personal portfolio. The
canonical introduction is maintained in my GitHub profile, so this README
always points to the latest version instead of duplicating profile content:

**[Read my current introduction on GitHub →](https://github.com/gaureshpai/gaureshpai#readme)**

- **Live portfolio:** [gauresh.is-a.dev](https://gauresh.is-a.dev/)
- **Static site implementation:** [`public/site.html`](./public/site.html)

Updates to the `gaureshpai` profile README are reflected automatically through
the link above.

## Project

Personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 16 (Pages Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-seo (SEO metadata + JSON-LD)
- Nodemailer (contact form API)
- Biome + Husky + lint-staged

## Scripts

- `pnpm dev` - Run dev server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run Biome check (with write)
- `pnpm format` - Format code with Biome
- `pnpm type-check` - TypeScript type check

## Local Setup

```bash
git clone https://github.com/gaureshpai/hseruag.git
cd hseruag
pnpm install
cp .env.example .env
pnpm dev
```
