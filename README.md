# @launchwp/ui

launchwp design system for the app-redesign pipeline (see the
`app-redesign-pipeline` skill). Components are pure presentational
(no providers), each with a `<Name>Props` interface and a JSDoc
`@example` - those become the Claude Design agent's docs.

Add composed usage examples per surface here; they feed preview authoring.

## Build

```sh
npm ci && npm run build   # tsc -> dist/ (ESM + .d.ts)
```
