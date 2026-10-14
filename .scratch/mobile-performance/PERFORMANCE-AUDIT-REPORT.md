# Mobile performance optimization

Deployment: pending owner push and Dokploy deployment on the Hostinger VPS.

The production build at commit `7a11690` reaches 100 in one local Lighthouse run. Three fresh-browser runs score 100, 99, and 99, with a median of 99. Those measurements precede the restored animation frames described below. Performance of the current assets and Google PageSpeed performance 100 for the deployed revision remain unverified.

## Evidence

The [supplied Google PageSpeed report](https://pagespeed.web.dev/analysis/https-www-akademi-asn-com/pmlc78yoov?form_factor=mobile) scores 86, with FCP 1.71 s, LCP 3.75 s, TBT 61 ms, CLS 0, and Speed Index 4.00 s. It has no CrUX field data. An earlier production CLI run already scored 100 before these changes, showing why one run cannot prove consistent production performance.

Local runs for `7a11690` use Lighthouse 13.5.0, a fresh Chrome profile, a 412×823 viewport at DPR 1.75, default simulated Slow 4G (150 ms RTT, 1,638.4 kb/s), and CPU slowdown 4×. A temporary HTTPS/HTTP2 proxy forwards the unchanged local production responses. Only its self-signed certificate is ignored. No assets are blocked and no requests fail. Direct Next.js HTTP/1.1 measurements were kept separate because production serves HTTP/2.

| Run | Performance | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- |
| 1 | 100 | 1.08 s | 1.75 s | 23.5 ms | 0.000 |
| 2 | 99 | 1.11 s | 1.97 s | 83.0 ms | 0.000 |
| 3 | 99 | 1.06 s | 2.26 s | 25.5 ms | 0.000 |

These are lab results, not real-user CWV or a verification of the deployed revision. Google uses a different host and CPU calibration. INP is unavailable; TBT is not reported as INP.

## Changes

- Reduce five animated Keunggulan WebPs from 524,400 bytes (512.1 KiB) to 389,186 bytes (380.1 KiB), a 25.8% reduction.
- Restore every original source frame and its exact delay after the owner reported visibly choppy playback from frame reduction. Frame counts are 33, 61, 24, 25, and 53; loop counts and durations match the original assets. Images remain 112 CSS px and use 196×196 source pixels, matching the mobile DPR.
- Keep Poppins self-hosted, request it through CSS instead of preloading four weights, and use `font-display: optional` with explicit Arial/sans-serif fallback. A slow first visit can retain that fallback for the page, preventing a late font swap.
- Keep page content, metadata, heading hierarchy, image alt text, and the existing hero image priorities. Add a production HTML assertion that fonts are not preloaded.

CSS inlining and lowering foreground hero priority were measured and reverted; they did not justify their costs in the final configuration. No dependency or client JavaScript was added.

## Validation

At `7a11690`, lint, typecheck, production build (177 prerendered pages), 25 related development HTML tests, and the production homepage test pass. Browser checks at that revision pass at 412 px and 1280 px: one h1, canonical and description, all image alt attributes, no horizontal overflow, complete hero images, working mobile menu and Escape close, styled client navigation, and no page errors or HTTP failures.

For the restored-FPS assets, assertions verify all five animations against the original Git assets: exact frame counts, every frame delay, loop counts, and total duration, with animated WebP encoding and 196×196 dimensions. Lint, typecheck, Graphify, and diff checks pass. Component code, paths, and rendered dimensions are unchanged. Build, browser playback, and Lighthouse were not rerun for this asset-only correction.

Raw reports and screenshots remain in ignored `.seo-cache/pages/homepage/final-verified-*.report.*` and `.seo-cache/pages/homepage/*-after*.png`. `SUMMARY.json` preserves the numeric evidence.

## After manual deployment

1. Push and deploy this commit through the existing Dokploy workflow and production environment.
2. Confirm the updated public image sizes, especially Jadwal Belajar (148,868 bytes). The observed production image header is `Cache-Control: public, max-age=0`, so normal revalidation can deliver the updated files.
3. Notify the agent that deployment is complete. Re-run mobile Google PageSpeed multiple times and compare FCP, LCP, TBT, CLS, and the LCP resource breakdown. Continue only from the remaining measured bottleneck.
