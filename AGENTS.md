# AGENTS.md — feature-today/my

This repository inherits the [canonical organization rules](https://github.com/feature-today/.dev/blob/main/AGENTS.md). Only project-specific details below.

## Scope

The main feature-today application. Home is a project selector. New per-project flows live under `src/routes/<path>/`.

## Layout

```
adapters/vercel-edge/vite.config.ts
src/
├── entry.ssr.tsx          # SSR renderer
├── entry.preview.tsx      # `vite preview` entry
├── entry.vercel-edge.tsx  # Vercel Edge entry
├── root.tsx               # HTML shell
├── global.css
├── components/
│   ├── router-head/
│   └── select/project-selector/
└── routes/
    ├── layout.tsx
    ├── index.tsx          # home
    └── projects.data.ts
```

## Scopes (Conventional Commits)

`app`, `ui`, `route`, `selector`, `build`, `test`, `deps`, `ci`, `docs`.

## Rules

- **Shared types and UI live in `@feature-today/common`.** Do not duplicate the `Project` interface or other shared shapes here — import from `@feature-today/common`.
- Routes use Qwik Router (`@qwik.dev/router`). Each public route must export a `head: DocumentHead`.
- Use cache-control via `RequestHandler` `onGet` on the root layout; tune per-route only when needed.
- AGPL header on every source file.
- No client-side analytics without privacy review.
- Tests next to source as `<name>.test.ts` (or `.tsx`).

## Style

- Plain CSS modules under each component. No Tailwind, no shoelace.
- The historic Tailwind class names previously found in `project-selector.tsx` have been removed in favor of CSS module classes.
