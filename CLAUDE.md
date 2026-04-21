# Simple Scripture – App Website

## Project Overview

Static website for **Simple Scripture** (working name; may appear as "Stupid Simple Bible" in early assets), a minimal iOS Bible reading app. No accounts, no subscriptions, no tracking. Just open and read.

The site exists for two reasons:
1. Give the app a credible home on the web
2. Satisfy Apple App Store submission requirements (Privacy Policy URL + Support URL)

## Stack

- **Plain HTML/CSS/JS only.** No frameworks, no build tools, no package.json.
- Three pages: `index.html`, `privacy.html`, `support.html`
- One shared stylesheet: `styles.css`
- One shared script (minimal): `main.js`
- All pages share a consistent header/footer via JS includes OR duplicated markup — keep it simple, don't over-engineer shared components
- Host-ready for GitHub Pages, Netlify, or any static host (no server-side anything)

## File Structure

```
/
├── index.html
├── privacy.html
├── support.html
├── styles.css
├── main.js
├── logorender.png
└── screenshots/
    ├── screen1.png
    ├── screen2.png
    ├── screen3.png
    ├── screen4.png
    └── screen5.png
```

Screenshots are 1206 × 2622 px (iPhone portrait). The carousel must display them at a reasonable rendered height — do not render at native size. Max rendered height ~600px on desktop, ~480px on mobile. Maintain aspect ratio. No cropping.

There is a logo that is 1024 x 1024 px. Use it in the website, not at native size but sized to look relative to the text size.

## Design Direction

The app's identity is **intentional restraint** — premium reading experience through typography and whitespace, not features. The website should reflect this.

- **Typography**: Use Google Fonts. Body: a refined serif (e.g. Lora, Playfair Display, or similar — something that reads like a book, not a SaaS product). UI labels/nav: a clean, neutral sans-serif (e.g. DM Sans, Outfit). Do NOT use Inter, Roboto, or system-ui as the primary font.
- **Color**: Near-white background (`#FAF9F7` or similar warm off-white), near-black text (`#1A1A1A`). One subtle accent — warm amber or muted gold — used sparingly for links or highlights. No gradients. No hero images other than screenshots.
- **Spacing**: Generous. The page should breathe. No cramped sections.
- **Dark mode**: Support via `prefers-color-scheme`. Dark bg ~`#141414`, text ~`#E8E6E1`.
- **No stock photos, no icons unless system/CSS-drawn, no hero illustrations.** The screenshots are the only visuals.

### What to avoid
- Startup/SaaS aesthetics (no hero gradients, no floating blobs, no "Join 10,000+ users")
- Feature grids with emoji icons
- Subscription CTAs or pricing tables
- Any language about streaks, devotionals, or gamification

## Pages

### `index.html` — Landing Page

**Structure (top to bottom):**

1. **Nav** — App name ("Simple Scripture") left-aligned, "Download on the App Store" button right-aligned (link to App Store, `#` placeholder until live). Minimal. No hamburger menu needed — only two nav links max (`Privacy`, `Support`) hidden in a simple footer instead.

2. **Hero** — Single headline, short subhead, App Store download button. No background image.
   - Headline example: *"The Bible. Nothing else."* (use this or something equally blunt — do not write marketing fluff)
   - Subhead: 1–2 sentences max. Communicate: no account, no subscription, just read.
   - App Store badge (use official Apple SVG badge or a clean text button as placeholder)

3. **Screenshot Carousel** — 5 screenshots in a horizontally scrollable or prev/next carousel.
   - Show 1 screenshot centered on mobile, 1–2 on desktop with partial peek of adjacent
   - Prev/Next arrow buttons
   - Dot indicators
   - No autoplay. No looping animation. User-controlled only.
   - Smooth CSS scroll-snap preferred over JS-heavy solutions
   - Screenshot images are portrait (1206×2622). Render at constrained height. Display inside a phone frame (simple CSS rounded rect with shadow — no SVG phone outline needed).

4. **Features section** — 3–4 short statements, NOT a bullet list. Prose or large-text callouts. Things like: "No account required." / "No internet connection needed." / "Three translations included: Berean Standard, King James, and Bible in Basic English." / "No ads. No subscriptions. Ever." Keep it factual. No superlatives.

5. **Footer** — App name, copyright year (dynamic via JS), links to Privacy Policy and Support page. Small text. That's it.

---

### `privacy.html` — Privacy Policy

Apple requires a privacy policy URL. This page must be substantive enough to pass App Review.

**Content to include:**

- **Effective date** (leave as placeholder: `[DATE]`)
- **App name**: Simple Scripture
- **Developer**: [Abram Green]
- **Contact email**: leave as placeholder `[EMAIL]`

**Sections:**

1. **Information We Collect**
   State clearly: The app collects no personal information. No account creation, no login, no name, email, or identifier of any kind is collected or required.

2. **Data Storage**
   All data (reading position, font preferences, selected translation) is stored locally on the user's device using iOS system storage (UserDefaults / app sandbox). This data never leaves the device. It is not transmitted to any server.

3. **Analytics and Tracking**
   The app contains no analytics, no crash reporting services, no third-party SDKs, and no tracking of any kind. We do not use advertising identifiers. We do not track usage behavior.

4. **Internet Connectivity**
   The app does not require an internet connection. Bible text is bundled locally. No network requests are made by the app.

5. **Third-Party Services**
   None. No third-party libraries that collect data, no advertising networks, no cloud services.

6. **Bible Text Licensing**
   The app includes the Berean Standard Bible (BSB), used under its free license, and the King James Version (KJV), which is in the public domain, and Bible in Basic English (BBE), which is in the public domain.

7. **Children's Privacy**
   The app does not collect any data from anyone, including children. It is appropriate for all ages.

8. **Changes to This Policy**
   If this policy changes, the updated version will be posted at this URL with a revised effective date.

9. **Contact**
   Questions: `[EMAIL PLACEHOLDER]`

**Tone**: Plain language. Not legalese-heavy but substantive. No bullet-point walls. Short paragraphs.

---

### `support.html` — Support Page

Apple requires a support URL. Keep it simple.

**Content:**

- Brief description of the app (1 sentence)
- **FAQ section** with 4–6 common questions:
  - "How do I change the translation?" - IOS System Settings
  - "How do I change the font size?" - IOS System Settings
  - "Does the app require an internet connection?" - No
  - "Does the app save my place?" - Yes, automatically
  - "Is there a subscription or in-app purchase?" - No, only a one time fee of $0.99
  - "How do I report a bug or send feedback?" - Send me an email.
- **Contact section**: A simple mailto link. Placeholder email. No contact form (no backend).
- Note that this is an indie app maintained by one developer; responses may take a few days.

---

## Responsive Behavior

- Mobile-first CSS
- Breakpoints: mobile default, tablet `min-width: 640px`, desktop `min-width: 1024px`
- Nav collapses gracefully on mobile (no hamburger needed — just stack or hide secondary links)
- Carousel is the most complex responsive component — test that it works at 375px width (iPhone SE) and 1440px desktop

## JavaScript

Keep JS minimal. Only use it for:
- Carousel prev/next logic
- Dynamic copyright year in footer
- Optionally: smooth scroll for any anchor links

No jQuery. No libraries. Vanilla JS only.

## Placeholders

Use clearly marked placeholders for:
- App Store URL: `<!-- APP_STORE_URL -->`
- Developer name: `[DEVELOPER NAME]`
- Contact email: `[CONTACT EMAIL]`
- Privacy policy effective date: `[EFFECTIVE DATE]`
- App icon (if used): note where to drop it in

## What This Site Is NOT

- Not a blog
- Not a web app
- Not a marketing funnel
- Not a documentation site
- No newsletter signup, no social links (unless added later), no cookie banners (app collects nothing, site should collect nothing — use no analytics on the site either)

## Deployment Notes

The site should work when opened as local files (`file://`) with no server. All asset paths should be relative. No absolute URLs except the App Store link.