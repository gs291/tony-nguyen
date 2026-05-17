# Tony Nguyen – Link in Bio

A custom link-in-bio page built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**.  
Design system: *Noir & Electric* — glassmorphism on deep black with Electric Cyan accents.

---

## Quick Start

```bash
npm install
npm run dev        # → http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

---

## How to Update Links

All profile data lives in **one file**: `config/site.ts`.

### Add or remove a link

Open `config/site.ts` and edit the `links` array:

```ts
links: [
  {
    label: "TikTok",                          // button text
    href: "https://tiktok.com/@tonynguyen",   // destination URL
    icon: Play,                               // any Lucide icon
    primary: true,                            // renders as the white CTA
  },
  {
    label: "Threads",
    href: "https://threads.net/@tonynguyen",
    icon: AtSign,                             // import from lucide-react
  },
],
```

The first link marked `primary: true` renders as the solid-white call-to-action button; all others render as glass cards.

### Change profile info

Edit the top-level fields in `siteConfig`:

```ts
name: "Tony Nguyen",
handle: "@tonynguyen",
monogram: "TN",
avatarUrl: "https://…",
copyrightYear: 2025,
```

### Change navigation

Edit the `nav` array — each item gets an icon name from [Material Symbols](https://fonts.google.com/icons).

---

## Project Structure

```
tony-links/
├── app/
│   ├── globals.css        # Tailwind + custom styles (glassmorphism, dot-grid)
│   ├── layout.tsx         # Root layout, fonts, metadata
│   └── page.tsx           # Main page (client component)
├── components/
│   ├── Avatar.tsx         # Profile photo with glow border
│   ├── Footer.tsx         # Privacy / Terms / copyright
│   ├── Hero.tsx           # Avatar + name + handle section
│   ├── LinkCard.tsx       # Single link card (primary or glass)
│   ├── LinkList.tsx       # Renders all LinkCards from config
│   ├── NavDrawer.tsx      # Slide-out navigation drawer
│   ├── Toast.tsx          # "Link Copied!" notification
│   ├── TopAppBar.tsx      # Fixed top bar with menu + share
│   └── index.ts           # Barrel export
├── config/
│   └── site.ts            # ★ All profile data & links – edit here
├── lib/
│   └── utils.ts           # cn() class-name helper
├── public/                # Static assets (favicon, etc.)
├── tailwind.config.ts     # Design tokens from DESIGN.md
├── tsconfig.json
├── postcss.config.js
├── next.config.js
└── package.json
```

---

## Design System

The Tailwind config maps every color, font, and spacing token from the *Noir & Electric* design spec (`DESIGN.md`). Key decisions:

| Token | Value |
|---|---|
| Background | `#131313` |
| Surface tint (accent) | `#00daf3` (Electric Cyan) |
| Primary CTA | Solid white, black text |
| Cards | Glassmorphism (`backdrop-blur-12`, white/10 border) |
| Display font | Montserrat 900 |
| Body font | Inter 400 |
| Mono/labels | JetBrains Mono 500 |
| Corner radius | 0.75rem (xl) for cards/buttons |

---

## Deployment

This is a standard Next.js app — deploy to **Vercel**, **Netlify**, **Cloudflare Pages**, or any Node host.

```bash
# Vercel (recommended)
npx vercel
```
