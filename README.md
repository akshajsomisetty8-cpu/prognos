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

No environment variables are required for the library and authored consultant explanations. The static ChatGPT Site uses these local explanations; it has no server-side AI runtime.

For live AI on Vercel, the included `/api/consultant` function needs these server-only environment variables:

- `OPENAI_API_KEY`: your OpenAI API key. Set it in Vercel Project Settings → Environment Variables, never in browser code or Git.
- `CONSULTANT_ENABLED`: `true` to enable the endpoint.
- `OPENAI_MODEL`: optional; defaults to `gpt-4.1-mini`.

Redeploy after setting them. The app checks availability and offers an explicit AI toggle describing that messages are sent to OpenAI. Without a working endpoint, it identifies responses as authored source guidance. It never pretends these are generated answers.

The build creates `server/evidence.json` from attributed source summaries and authored, source-linked guides. The endpoint retrieves evidence from this server-owned collection, asks for plain-language explanations and per-paragraph citations, rejects unknown citations and supporting quotations absent from the evidence, and never accepts source text or URLs from clients. This verifies reference integrity, not clinical correctness or full semantic entailment. Evidence is a dated local collection, not live web research. Model answers still need clinical evaluation before broad patient use.

Requests use `store:false`; the app does not log conversations or save them to a database. This does not remove provider-side processing or retention policies. The endpoint has same-origin checks, input limits, a timeout and a per-instance request limit. Public deployments should also configure durable rate limiting or Vercel firewall rules; the in-memory limit is not a global quota. Live model calls have not been tested without a configured API key.

The deployed static output is approximately 65 MB; no individual file exceeds 20 MB.
