# Prognos

Prognos is a static, source-backed medical information app. The deployable site is in `dist/`.

## Production build

Requires Node.js 20 or newer. No package installation is required.

```sh
npm run build
```

The build validates the JavaScript and JSON artifacts, confirms the generated medical directory is populated, verifies all anatomy model chunks are present, and leaves the production output in `dist/`.

## Vercel

Import this directory as the Vercel project root. `vercel.json` configures:

- `npm run build` as the build command
- `dist` as the output directory
- cache revalidation for the app shell and generated medical datasets
- long-lived caching for versioned anatomy model assets

No environment variables are required. All medical directory content and anatomy assets are bundled into the static deployment. The AI consultant remains a source-directory search experience; it does not call an external model API.

The deployed static output is approximately 65 MB; no individual file exceeds 20 MB.
