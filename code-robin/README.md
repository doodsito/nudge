# Ante

**Ante** is a pre-launch, gamified investing-education app for working adults who
know they should invest and have never started. It teaches through five-minute
lessons and a €10,000 virtual portfolio that tracks real market conditions.

It deliberately never recommends a security, takes a commission, or touches real
money. That limit is a product decision, not a missing feature.

This repository holds the marketing site: a single-page waitlist landing whose
only conversion is the signup form. Built as an ENGIN 2831 course project.

## Stack

- Next.js 16 (App Router, Turbopack) and React 19
- Tailwind CSS v4, with the design tokens defined in `app/globals.css`
- shadcn/ui on the `base-nova` preset (`@base-ui/react` primitives)
- Fraunces (headings) and Inter (body) via `next/font/google`
- Supabase for waitlist storage, over PostgREST with no client library

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the two Supabase values
npm run dev
```

Open http://localhost:3000.

The site builds and runs without Supabase configured: the signup counter falls
back to honest wording instead of showing a zero, and only form submission
fails.

## Waitlist

Signups go through a server action (`app/actions.ts`) to the Supabase PostgREST
endpoint (`lib/waitlistDb.ts`). Neither environment variable is prefixed
`NEXT_PUBLIC_`, so the service role key stays server-side and the table needs no
public RLS policy.

The table DDL, including the `experience` column, is documented in
`.env.example`.

Raw PostgREST error bodies are never surfaced to the browser: `lib/waitlistDb.ts`
collapses every response into `created`, `duplicate`, or `error`, and
`app/actions.ts` owns the user-facing wording.

## Conventions

- Component files are kebab-case, following shadcn's own convention.
- Section components live in `components/sections/` and are composed in
  `app/page.tsx`.
- Typography, spacing, radii and colour are tokens, not ad-hoc values. See
  `app/globals.css` and the `design-system` skill in `.claude/skills/`.
- No invented social proof. The signup count is read live from Supabase; there
  are no fabricated metrics, testimonials, or logos of non-customers.

## Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
