# FeedTV website

Website built from the approved **FeedTV — Website v3 (Web)** Figma canvas. Includes the ten main desktop pages, the case-study detail example, and article routes using the supplied Google Docs material.

## Run

```powershell
npm install
npm run build
npm run dev
```

Open http://127.0.0.1:4173. `npm run check` validates navigation, search, form behavior, preview gating, image decoding, and page layouts at 1440, 1280, and 390 pixels. Browser tests use the installed Chrome executable; change its path in `scripts/check.mjs` for a different machine.

`npm run check:responsive` resizes all 16 routes from 1920px down to 320px and back, including tablet widths and breakpoint boundaries. It checks text, product artwork, controls, container clipping, horizontal overflow, and preservation of page copy. Reports are saved in the ignored `artifacts/` directory.

## Implementation

- React with local CSS, bundled with esbuild. No Tailwind runtime or dependency.
- `src/pages/`: Figma-derived page components, original artwork slots and geometry.
- `src/style.css`: shared navigation, interactive components, responsive layouts, and motion preferences.
- `src/responsive.css`: fluid marketing layouts, complete hero scenes, adaptive image frames, grids, and footers.
- `src/ai-cms.css`: isolated responsive styles for CMS-powered listings, article states, and resource cards.
- `scripts/styles.mjs`: converts the Figma property's notation to ordinary CSS at build time.
- `src/articles.json`: six articles from the supplied Website Project Doc.
- `public/assets/`: local Figma image/SVG assets and locally hosted Lato fonts. No temporary Figma URLs are used by the site.
- `public/config.js`: contact integration settings and the optional public AI CMS base URL.
- `.openai/hosting.json`: owner-private Sites preview identity and static deployment directory.

## Production integration

Set `window.FEEDTV_CONTACT_ENDPOINT` in `public/config.js` to an HTTPS endpoint that accepts `{name, email, company, budget, message}` as JSON. The endpoint must validate input, deliver/store the inquiry and return success only once accepted. Until configured, the interface explicitly reports that a message has **not** been sent. The thank-you screen is available at `/thank-you`; successful configured submissions navigate there.

### Standalone AI CMS integration

The website can use a separately hosted FeedTV AI CMS without adding a CMS server, database, authentication flow, or management UI to this repository. Configure the public CMS base URL in `public/config.js`:

```js
window.FEEDTV_AI_CMS_URL = "https://cms.example.com";
```

Leave the value empty to retain the existing static Blog, Case Studies, and article pages. When configured, the CMS is the only content source for `/blog`, `/case-studies`, `/ftv-101`, `/resources`, and all article routes under those sections. This includes slugs that overlap with existing static Playbook and Case Study pages; a CMS 404 is never replaced with an old built-in article. `/admin` redirects to `<CMS URL>/admin`; with no CMS URL it explains how to configure the panel. Public content is intentionally unauthenticated; no credentials are sent by the website.

The public CMS API must allow browser CORS requests from the website origin and expose these endpoints:

- `GET /api/public/articles?type=blog|case-study|ftv-101&q=...&page=1&pageSize=12` returns `{ articles, total, page, pageSize, totalPages }`. Omit `type` for all content and omit `q` when it is empty. Records include `slug`, `title`, `type`, optional `category`, `dek`, `cover`, `date`/`updatedAt`/`publishedAt`, `tags`, and `url`. The API returns published content in display order and searches article body and title.
- `GET /api/articles/<slug>/embed?back=/blog` returns `{ slug, title, type, dek, url, html }` for a published article. The page passes `/case-studies` or `/ftv-101` as `back` for those sections. A 404 means the article is unavailable. The CMS should provide its companion `/article.css` stylesheet.

Listings request each API page without browser caching so category filtering covers the complete result set. The site provides category filters, search, and 12-item pagination while preserving CMS order. The global search keeps its static product/team/site results and searches CMS articles using `q`; built-in article records are omitted while CMS mode is enabled. Empty results and unavailable slugs are shown as real empty/404 states. Network failures show a retry action and never revive static content. Reopening a section or refreshing it performs a new request.

The advertising preview email gate validates an address and unlocks the sample for the browser session. It does not transmit or permanently store the address. The externally hosted CTV previewer is linked from the original design; its behavior is owned by that application. A production email capture endpoint still needs to be supplied.

Legal links show a launch-pending notice because approved legal copy was not supplied. The testimonial carousel follows the three states supplied in the Figma design. The CTA palette follows Figma; its documented contrast decision remains an item for production design review.

## References

- Figma: https://www.figma.com/design/54rS3BoUlrxrw74QZ85XGa/FeedTV-Homepage--Prototype-?node-id=1668-2565
- Content: https://docs.google.com/document/d/18csHw2jwt9aQuPPOa_UnoEIMGgMb9CMVrfb1V9bS-ZY/edit

Desktop appearance is based on the 1440px source designs. Mobile is an adaptive implementation; the separate mobile design was not part of the supplied handoff. The alternative “Our Platform” frame is outside the approved desktop scope.
