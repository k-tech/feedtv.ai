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
- `scripts/styles.mjs`: converts the Figma property's notation to ordinary CSS at build time.
- `src/articles.json`: six articles from the supplied Website Project Doc.
- `public/assets/`: local Figma image/SVG assets and locally hosted Lato fonts. No temporary Figma URLs are used by the site.
- `public/config.js`: contact integration settings.
- `.openai/hosting.json`: owner-private Sites preview identity and static deployment directory.

## Production integration

Set `window.FEEDTV_CONTACT_ENDPOINT` in `public/config.js` to an HTTPS endpoint that accepts `{name, email, company, budget, message}` as JSON. The endpoint must validate input, deliver/store the inquiry and return success only once accepted. Until configured, the interface explicitly reports that a message has **not** been sent. The thank-you screen is available at `/thank-you`; successful configured submissions navigate there.

The advertising preview email gate validates an address and unlocks the sample for the browser session. It does not transmit or permanently store the address. The externally hosted CTV previewer is linked from the original design; its behavior is owned by that application. A production email capture endpoint still needs to be supplied.

Legal links show a launch-pending notice because approved legal copy was not supplied. The testimonial carousel follows the three states supplied in the Figma design. The CTA palette follows Figma; its documented contrast decision remains an item for production design review.

## References

- Figma: https://www.figma.com/design/54rS3BoUlrxrw74QZ85XGa/FeedTV-Homepage--Prototype-?node-id=1668-2565
- Content: https://docs.google.com/document/d/18csHw2jwt9aQuPPOa_UnoEIMGgMb9CMVrfb1V9bS-ZY/edit

Desktop appearance is based on the 1440px source designs. Mobile is an adaptive implementation; the separate mobile design was not part of the supplied handoff. The alternative “Our Platform” frame is outside the approved desktop scope.
