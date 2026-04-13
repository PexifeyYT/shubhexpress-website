# Shubh Express INC — Website Project Instructions

## Project Overview

Build a modern, professional trucking company website for **Shubh Express INC**. The site should feel premium, fast, and trustworthy — targeting logistics professionals, shippers, and port customers in California.

---

## Company Info

| Field        | Value                                                      |
|--------------|------------------------------------------------------------|
| Company Name | Shubh Express INC                                          |
| Phone 1      | +1 209 407 1504                                            |
| Phone 2      | +1 209 425 5340                                            |
| Email 1      | info@shubhexpress.com                                      |
| Email 2      | dispatch@shubhexpress.com                                  |
| Address      | 1793 Holborn Dr                                            |
| Facebook     | [Shubh Express INC](https://www.facebook.com/shubhexpressinc) |

All phone numbers, emails, and social links must be real clickable links (`tel:`, `mailto:`, direct URL). Facebook link should open in a new tab.

---

## Tech Stack

- **Framework:** React + Vite (or Next.js if SSR is needed)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React or React Icons
- **Contact Form:** React Hook Form (UI only for now — wire up backend later)
- **Routing:** React Router DOM (or Next.js App Router)

---

## Design & Theme

- **Color Palette:**
  - Primary: Deep Navy `#0A1628`
  - Accent: Bold Orange/Amber `#F97316` or `#F59E0B`
  - Secondary: Steel Gray `#64748B`
  - Background: Off-white `#F8FAFC` / White `#FFFFFF`
  - Dark sections: `#0F172A`

- **Typography:** Inter or Poppins (Google Fonts)
- **Feel:** Bold, modern, industrial — conveying reliability and strength
- **Animations:** Smooth scroll-triggered fade-ins, counter animations on stats, parallax on hero, hover effects on cards, subtle truck/road motion elements

---

## Pages & Sections

### 1. Home (`/`)
- **Hero Section**
  - Full-screen background (dark overlay on a truck/highway image)
  - Headline: "Moving Freight. Delivering Trust."
  - Subheadline: Brief company tagline
  - Two CTA buttons: "Get a Quote" (links to Contact) and "Our Services"
  - Animated truck silhouette or road element
- **Stats Bar** — animated counters (e.g., Years in Business, Miles Delivered, Happy Clients)
- **Services Overview** — 3–4 cards with icons (Drayage, Freight, etc.)
- **Why Choose Us** — 3 columns with icons and brief text
- **CTA Banner** — Bold section with contact prompt
- **Footer** — Full contact info, nav links, social icons, copyright

### 2. About (`/about`)
- Company story / mission
- Fleet info
- Team values
- Photo section (placeholder images)

### 3. Services (`/services`)
- Overview of all services offered
- Cards with icons and descriptions
- Link to Terminals page for drayage

### 4. Terminals / Drayage (`/terminals`)
- **Hero:** "Port of Oakland Drayage"
- **Description:** Shubh Express INC specializes in drayage — moving freight from the Port of Oakland to warehouses, distribution centers, and beyond.
- **Terminal Cards** (one card per terminal, with logo placeholder, name, and description):
  1. **SSA-B58 Oakland** — SSA Terminals Berth 58, Port of Oakland
  2. **Trapac Oakland** — TraPac Terminal, Port of Oakland
  3. **Everport Oakland** — Everport Terminal Services, Port of Oakland
- Each terminal card should show: terminal name, location (Port of Oakland), brief description of operations
- Map embed or decorative port illustration
- CTA: "Book a Drayage Run" → links to Contact

### 5. Contact (`/contact`)
- **Left column:** Company info (address, phones, emails, social links, map embed placeholder)
- **Right column:** Contact form (see below)
- Form fields:
  - Full Name (required)
  - Company Name
  - Phone Number
  - Email Address (required)
  - Service Needed (dropdown: Drayage, Freight, Other)
  - Message (textarea, required)
  - Submit Button: "Send Message"
- Form is UI-only for now. Add a `// TODO: wire up form submission (EmailJS / backend API)` comment where submission logic goes.
- Show a success state after submit (mock).

### 6. Privacy Policy (`/privacy`)
- Standard privacy policy page
- Cover: data collection, cookies, contact info usage, third-party services, user rights
- Company name and contact info in the policy
- Last updated date

---

## Navigation

Top navbar:
- Logo left (text or SVG truck logo)
- Nav links: Home | About | Services | Terminals | Contact
- Sticky on scroll with slight background blur
- Mobile: hamburger menu with smooth slide-in drawer
- CTA button in navbar: "Get a Quote" → `/contact`

Footer:
- Logo + tagline
- Quick links
- Contact info (clickable phone & email)
- Facebook icon link
- Copyright: `© {year} Shubh Express INC. All rights reserved.`

---

## Contact Form — Future Integration Notes

The form should be set up so that when wired up, it sends the user's submitted info (name, company, phone, email, service, message) via one of:
- **EmailJS** (recommended for static sites) — sends directly to `info@shubhexpress.com`
- **A backend API endpoint** (Node/Express or Next.js API route)
- Leave clear `// TODO` comments and keep the form submission handler in a separate `submitForm.js` utility file so it's easy to wire up later.

---

## Animations Checklist

- [ ] Hero section: fade-in text + animated truck/element
- [ ] Scroll-triggered: sections fade/slide up on enter
- [ ] Stats: count-up animation when in viewport
- [ ] Terminal cards: staggered entrance
- [ ] Navbar: shrinks / gains background on scroll
- [ ] Buttons: hover scale + color transition
- [ ] Contact form: field focus animations, success animation on submit
- [ ] Page transitions (optional but nice)

---

## File Structure (Suggested)

```
src/
  components/
    Navbar.jsx
    Footer.jsx
    HeroSection.jsx
    StatsBar.jsx
    ServiceCard.jsx
    TerminalCard.jsx
    ContactForm.jsx
  pages/
    Home.jsx
    About.jsx
    Services.jsx
    Terminals.jsx
    Contact.jsx
    PrivacyPolicy.jsx
  utils/
    submitForm.js       ← form submission logic (TODO: wire up)
  assets/
    images/             ← placeholder images
  App.jsx
  main.jsx
```

---

## Reference / Inspiration

Old website (do NOT copy — redesign from scratch): https://shubhexpressinc.com

---

## Important Notes

- All links must be functional: `tel:`, `mailto:`, external links open in new tab
- Site must be fully mobile responsive
- No broken images — use placeholder services (e.g., `https://placehold.co/`) if real assets aren't available
- Accessibility: semantic HTML, aria labels on interactive elements
- Performance: lazy-load images, keep bundle size reasonable
