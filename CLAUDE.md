# NJ Aircon Services — CLAUDE.md

## Business Overview
NJ Aircon Services is a home service business offering aircon cleaning, maintenance,
and repair. Based in Alabel, Sarangani Province, Philippines. We service:
- Alabel (home base)
- General Santos City
- Malapatan
- Polomolok

**Primary goal of this website:** Get found on Google by locals searching for aircon
cleaning services, and make it easy for them to call or message us on Facebook.

---

## Project Goal
Build a **static, single-page lead-generation website** with strong local SEO.
No backend, no database, no login system needed at this stage.

Customers should be able to:
- Find us on Google when searching "aircon cleaning [area]"
- See our services and pricing clearly
- Call us directly with one tap
- Message us on Facebook Messenger with one tap

---

## Tech Stack
- **Framework:** Next.js 14 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Contact Form:** Web3Forms (free, no backend needed)
- **Hosting:** Vercel (free tier)
- **Domain:** Namecheap
- **Analytics:** Google Analytics 4 + Google Search Console

## No Backend Needed
- No Supabase
- No database
- No authentication
- No payments
- This is a fully static site (`output: 'export'` in next.config.ts)

---

## Project Structure
```
/app
  layout.tsx          → Root layout with metadata/SEO tags
  page.tsx            → Homepage (single page, all sections)
/components
  Hero.tsx            → Hero section with headline + CTA buttons
  Services.tsx        → Services and pricing cards
  WhyChooseUs.tsx     → Trust signals / reasons to choose NJ
  ServiceAreas.tsx    → Areas served (Alabel, GenSan, etc.)
  Contact.tsx         → Contact form (Web3Forms) + phone + FB link
  Footer.tsx          → Business name, number, area, copyright
/lib
  constants.ts        → Business info, pricing, services, areas
/public
  /images             → Logo, service photos, before/after photos
```

---

## Business Information
> IMPORTANT: Store all business info in `/lib/constants.ts` — never hardcode
> directly in components. This makes updates easy.

```ts
// /lib/constants.ts
export const BUSINESS = {
  name: "NJ Aircon Services",
  phone: "[OWNER TO FILL IN]",
  facebookUrl: "[OWNER TO FILL IN]",
  facebookMessengerUrl: "[OWNER TO FILL IN - m.me/yourpage]",
  address: "Alabel, Sarangani Province, Philippines",
  email: "[OWNER TO FILL IN - optional]",
}

export const SERVICE_AREAS = [
  "Alabel, Sarangani Province",
  "General Santos City",
  "Malapatan, Sarangani",
  "Polomolok, South Cotabato",
]

export const SERVICES = [
  { name: "Regular Clean", price: 500, duration: "45 mins/unit", description: "Standard filter and coil cleaning" },
  { name: "Deep Clean", price: 900, duration: "2 hrs/unit", description: "Full disassembly and thorough cleaning" },
  { name: "Preventive Maintenance", price: 600, duration: "1 hr/unit", description: "Inspection, cleaning, and performance check" },
]
```

---

## SEO Rules — IMPORTANT
This is a local SEO site. Claude must follow these rules on every page and component:

### Target Keywords
- "aircon cleaning Alabel"
- "aircon cleaning General Santos City"
- "aircon cleaning Sarangani"
- "aircon maintenance GenSan"
- "aircon cleaning Polomolok"
- "aircon cleaning Malapatan"

### Required SEO Elements
- Page `<title>`: `Aircon Cleaning in Alabel & General Santos City | NJ Aircon Services`
- Meta description: mention Alabel, GenSan, Sarangani, and the service
- Use semantic HTML: `<h1>` for main headline, `<h2>` for section headings
- Phone number must appear as plain text (not image) — Google reads it
- Address must appear as plain text in the footer
- Every image must have descriptive `alt` text (e.g. `alt="Aircon cleaning service in General Santos City"`)
- Use `next/image` for all images (auto-optimization)
- Add JSON-LD LocalBusiness structured data in `layout.tsx`

### JSON-LD Structured Data (add to layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "NJ Aircon Services",
  "telephone": "[PHONE]",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alabel",
    "addressRegion": "Sarangani Province",
    "addressCountry": "PH"
  },
  "areaServed": ["Alabel", "General Santos City", "Malapatan", "Polomolok"],
  "priceRange": "₱₱"
}
```

---

## UI & Design Rules
- **Mobile-first** — most visitors will be on phones
- **Primary color:** `#0EA5E9` (sky blue)
- **Secondary color:** `#0F172A` (dark navy)
- **Accent:** `#F0F9FF` (light blue tint)
- **Font — Headings:** Poppins (Google Fonts)
- **Font — Body:** Inter (Google Fonts)
- **Tone:** Friendly, trustworthy, local (Filipino-friendly copy is OK)
- Currency always displayed as `₱500` format
- Phone numbers in format: `09XX-XXX-XXXX`

### CTA Buttons (must appear prominently)
1. **"Call Us Now"** — `tel:` link, visible on hero and contact section
2. **"Message on Facebook"** — `m.me/` link, opens Messenger
Both buttons should be large, easy to tap on mobile.

---

## Coding Rules
- TypeScript only — no `any` types
- All business data lives in `/lib/constants.ts` — never hardcoded in JSX
- Use `next/image` for all images — never `<img>` tags
- Use `next/font` for Google Fonts — never a `<link>` tag
- Keep components small and focused — one section per component
- No unnecessary dependencies — keep it lightweight
- Responsive design using Tailwind breakpoints: `sm:`, `md:`, `lg:`

---

## Never Do
- Never add a backend, database, or auth — this is a static site
- Never use `<img>` tags — always `next/image`
- Never hardcode phone number or Facebook URL in components — use `constants.ts`
- Never use `any` in TypeScript
- Never skip `alt` text on images
- Never use placeholder Lorem Ipsum text — write real Filipino-context copy

---

## Contact Form (Web3Forms)
- Use **Web3Forms** (web3forms.com) — free, no backend needed
- Form sends submissions directly to owner's email
- Add Web3Forms access key to `.env.local` as `NEXT_PUBLIC_WEB3FORMS_KEY`
- Keep form simple: Name, Phone Number, Message, Submit

---

## Environment Variables
```
NEXT_PUBLIC_WEB3FORMS_KEY=       # Web3Forms access key
NEXT_PUBLIC_GA_ID=               # Google Analytics 4 Measurement ID
```
Never commit `.env.local` — add it to `.gitignore`

---

## Post-Launch Checklist (remind owner)
- [ ] Submit site to Google Search Console
- [ ] Set up Google Business Profile at business.google.com
- [ ] Add business to Google Maps with correct address and phone
- [ ] List all service areas in Google Business Profile
- [ ] Share website link on Facebook Page
