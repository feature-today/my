# `feature-today/my`

The main feature-today application — a Qwik 2 app deployed on Vercel Edge.

## Stack

- **UI:** Qwik 2 (`@qwik.dev/core`, `@qwik.dev/router`)
- **Build:** Vite 7
- **Tests:** Vitest 3 (`@vitest/coverage-v8`)
- **Lint + format:** oxlint 1
- **Lang:** TypeScript 5.7+ (strict)
- **Runtime:** Node ≥ 24
- **Shared types/UI:** [`@feature-today/common`](../common)

## Develop

```bash
pnpm install
pnpm dev          # local SSR dev server
pnpm build        # full production build
pnpm preview      # serve production build locally
pnpm typecheck
pnpm lint
pnpm test
pnpm test.coverage
```

## Deploy

Pushes to `main` are deployed to Vercel Edge through the `vercel-edge` adapter (see [adapters/vercel-edge/vite.config.ts](adapters/vercel-edge/vite.config.ts)).

## License

[AGPL-3.0-or-later](./LICENSE). See the org-wide [licensing policy](https://github.com/feature-today/.dev/blob/main/LICENSING.md).
