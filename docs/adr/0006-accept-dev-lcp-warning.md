# 6. Accept the dev LCP warning on the shared section background

Date: 2026-10-20

## Status

Accepted.

## Context

`bun dev` prints this browser warning on landing pages:

```
Image with src "/img/section/bg-bimbel-cpns-pppk-bumn.webp" was detected as the Largest Contentful Paint (LCP). Please add the `loading="eager"` property if this image is above the fold.
```

The warning is a false positive. The Jumbotron background (`components/sections/jumbotron.tsx`) is the LCP element, and it already has `loading="eager"` and `fetchPriority="high"`. The Paket Program and CTA Footer backgrounds use the same file with the same `sizes="100vw"`, and they load lazily. All three get the same `/_next/image?...&w=3840&q=75` URL, so the browser downloads the file once.

In dev, `next/image` records each image in a map keyed by that URL (`allImgs` in `node_modules/next/dist/shared/lib/get-img-props.js`). The lazy images render later and overwrite the Jumbotron's entry. When the LCP observer looks up the Jumbotron image, it finds `loading: "lazy"` and warns. Production builds never run this check.

## Decision

- Keep the warning in the dev log. Do not change the images to remove it.
- Do not add `loading="eager"` anywhere to remove it. The Jumbotron already has it, and the lazy backgrounds are below the fold.

## Considered options

- **`quality={50}` on the two faded backgrounds**, plus `images.qualities: [50, 75]` in `next.config.ts`: rejected. The different URL removes the warning. But the browser then downloads a second file of about 17.5 KB AVIF instead of reusing the cached Jumbotron file (32 KB at `q=75`). LCP is not affected.
- **`quality={50}` on all three images**: rejected. The URLs match again, so the warning comes back. The Jumbotron background is shown at full opacity, so the lower quality is visible.

## Consequences

- The dev log keeps one known false positive. A real LCP warning for a different image can still show up next to it.
- Revisit this decision if the Jumbotron and the lower sections stop sharing one background file. At that point the URLs differ and the warning goes away without any change.
