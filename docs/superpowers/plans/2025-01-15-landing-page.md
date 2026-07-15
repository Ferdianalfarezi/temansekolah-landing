# Teman Sekolah Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `frontend-design` skill to implement this plan. Each task builds one or more sections of the single-page landing page.

**Goal:** Build a complete single-page landing page for "Teman Sekolah" using Next.js 14 + Tailwind CSS + AOS with scroll-to-section navigation.

**Architecture:** Single page (`app/page.tsx`) composed of section components. Static export. AOS initialized client-side. Smooth scroll navigation via anchor links.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS v3, Poppins (Google Fonts), Lucide React, AOS, TypeScript

## Global Constraints

- Node.js 18+
- Next.js 14 with App Router
- Tailwind CSS v3
- TypeScript strict mode
- Colors: primary `#00317D`, accent `#FFD601`, alert `#FD3D36`
- Font: Poppins (400, 500, 600, 700)
- All text content in Bahasa Indonesia (from content brief)
- Mobile-first responsive design
- AOS for scroll animations
- Static export compatible (no server-side features)

---

### Task 1: Project Setup & Configuration

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `next.config.js`
- Create: `app/layout.tsx`
- Create: `app/globals.css`
- Create: `app/page.tsx` (placeholder)
- Move: `logo.png` → `public/logo.png`
- Move: `logo-text.png` → `public/logo-text.png`

**Produces:**
- Working Next.js project with Tailwind configured
- Custom colors in Tailwind config
- Poppins font loaded
- AOS initialized

- [ ] **Step 1: Initialize Next.js project**

```bash
npx create-next-app@14 . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-npm
```

- [ ] **Step 2: Install dependencies**

```bash
npm install lucide-react aos
npm install -D @types/aos
```

- [ ] **Step 3: Configure Tailwind with custom colors and font**

`tailwind.config.ts`:
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00317D",
        accent: "#FFD601",
        alert: "#FD3D36",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 4: Set up globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Poppins', sans-serif;
}
```

- [ ] **Step 5: Set up layout.tsx with metadata and AOS**

`app/layout.tsx`:
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One",
  description: "Kelola sekolah lebih ringan, orang tua lebih tenang. Absensi digital, pembayaran SPP, rapor online, dan notifikasi otomatis ke orang tua.",
  openGraph: {
    title: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One",
    description: "Absensi digital, pembayaran SPP, rapor online, dan notifikasi otomatis ke orang tua — semua dalam satu platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 6: Create AOS provider component**

`components/AOSProvider.tsx`:
```tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return <>{children}</>;
}
```

- [ ] **Step 7: Move assets to public folder**

```bash
cp logo.png public/logo.png
cp logo-text.png public/logo-text.png
```

- [ ] **Step 8: Create placeholder page.tsx**

`app/page.tsx`:
```tsx
import AOSProvider from "@/components/AOSProvider";

export default function Home() {
  return (
    <AOSProvider>
      <main>
        <h1>Teman Sekolah</h1>
      </main>
    </AOSProvider>
  );
}
```

- [ ] **Step 9: Verify setup**

```bash
npm run dev
```
Expected: page loads at localhost:3000 with "Teman Sekolah" text, Poppins font applied.

- [ ] **Step 10: Commit**

```bash
git add .
git commit -m "feat: project setup with Next.js 14, Tailwind, AOS, Poppins"
```

---

### Task 2: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`
- Modify: `app/page.tsx`

**Produces:**
- Sticky navbar with logo, nav links (scroll-to-section), CTA button
- Mobile hamburger menu
- Smooth scroll behavior

- [ ] **Step 1: Create Navbar component**

`components/Navbar.tsx` — sticky, transparent → solid on scroll, hamburger mobile menu, scroll-to-section links for: Fitur, Harga, FAQ. CTA button "Masuk Admin Panel" → app.teman-sekolah.com.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Verify responsive behavior**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add sticky navbar with mobile menu"
```

---

### Task 3: Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

**Produces:**
- Hero section with headline, subheadline, 2 CTA buttons, supporting text
- Gradient/pattern background accent
- AOS animation on entry

- [ ] **Step 1: Create Hero component**

Full-width hero with:
- H1: "Kelola Sekolah Lebih Ringan, Orang Tua Lebih Tenang."
- Subheadline paragraph
- Primary button "Coba Gratis" (accent yellow bg)
- Secondary button "Masuk Admin Panel" (outlined/ghost)
- Supporting text: "Mulai dari Rp 300.000/bulan"
- Background: subtle gradient or abstract shapes using primary color

- [ ] **Step 2: Add AOS animations**

- [ ] **Step 3: Add to page.tsx**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add hero section"
```

---

### Task 4: Pain Points Section

**Files:**
- Create: `components/sections/PainPoints.tsx`
- Modify: `app/page.tsx`

**Produces:**
- Dark background section (primary blue)
- 5 pain point cards with red icons, white text
- AOS fade-up staggered

- [ ] **Step 1: Create PainPoints component**

Section title: "Masih pakai cara lama?"
5 cards, each with alert-colored icon, bold title, description.
Dark bg (#00317D), white text. Grid: 3-col desktop, 1-col mobile.

- [ ] **Step 2: Add AOS with stagger delays**

- [ ] **Step 3: Add to page.tsx**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add pain points section"
```

---

### Task 5: Features Section (Fitur Utama)

**Files:**
- Create: `components/sections/Features.tsx`
- Modify: `app/page.tsx`

**Produces:**
- 6 feature cards with icons, titles, bullet points
- Section id="fitur" for navbar scroll

- [ ] **Step 1: Create Features component**

Section title: "Satu platform, semua kebutuhan sekolah."
id="fitur" for scroll target.
6 cards: Absensi Digital, Pembayaran SPP Online, Rapor Online, Notifikasi Otomatis, Portal RPP, Manajemen Sekolah.
Each card: Lucide icon, title, 4-6 bullet points.
Grid: 3-col desktop, 2-col tablet, 1-col mobile.

- [ ] **Step 2: Add AOS staggered animations**

- [ ] **Step 3: Add to page.tsx**

- [ ] **Step 4: Commit**

```bash
git add .
git commit -m "feat: add features section"
```

---

### Task 6: How It Works Section

**Files:**
- Create: `components/sections/HowItWorks.tsx`
- Modify: `app/page.tsx`

**Produces:**
- 3 steps with numbers, connectors, titles, descriptions
- Horizontal desktop, vertical mobile

- [ ] **Step 1: Create HowItWorks component**

Section title: "Mulai dalam 3 langkah."
3 steps: Daftarkan sekolah, Upload data, Langsung gunakan.
Large circled numbers, connector lines between steps.
AOS: fade-right sequential.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add how it works section"
```

---

### Task 7: User Roles Section

**Files:**
- Create: `components/sections/UserRoles.tsx`
- Modify: `app/page.tsx`

**Produces:**
- 5 user role cards (Admin, Bendahara, Kepsek, Guru, Orang Tua)
- Each with icon, role name, access method, description

- [ ] **Step 1: Create UserRoles component**

Section title: "Dirancang untuk seluruh warga sekolah."
5 cards showing role, access platform, and usage.
AOS: fade-up staggered.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add user roles section"
```

---

### Task 8: Advantages Section (Keunggulan)

**Files:**
- Create: `components/sections/Advantages.tsx`
- Modify: `app/page.tsx`

**Produces:**
- 8 advantage items in grid
- Icon + title + short description

- [ ] **Step 1: Create Advantages component**

Section title: "Kenapa sekolah memilih Teman Sekolah?"
8 items: Hemat waktu, Transparansi, Data aman, Mobile-first, Audit trail, Works offline, Harga terjangkau, Unlimited user.
Grid: 4-col desktop, 2-col tablet, 1-col mobile.
AOS: fade-up staggered.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add advantages section"
```

---

### Task 9: Pricing Section

**Files:**
- Create: `components/sections/Pricing.tsx`
- Modify: `app/page.tsx`

**Produces:**
- 3 pricing cards (Dasar, Standar, Premium)
- Middle card highlighted
- Feature notes below
- id="harga" for navbar scroll

- [ ] **Step 1: Create Pricing component**

Section title: "Harga transparan, tanpa biaya tersembunyi."
id="harga" for scroll target.
3 cards: Dasar (Rp 300k), Standar (Rp 500k, highlighted), Premium (Rp 750k).
Notes: semua fitur, unlimited user, update gratis, bayar tahunan, diskon 2 tahun.
AOS: zoom-in.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add pricing section"
```

---

### Task 10: Statistics Section

**Files:**
- Create: `components/sections/Statistics.tsx`
- Modify: `app/page.tsx`

**Produces:**
- Dark background with 4 large stat counters
- Bold numbers with descriptions

- [ ] **Step 1: Create Statistics component**

Section title: "Angka yang berbicara."
Dark bg (#00317D). 4 stats: 2 menit, 100%, 0 biaya tambahan, 24/7 akses.
Large bold numbers, white text.
AOS: fade-up.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add statistics section"
```

---

### Task 11: FAQ Section

**Files:**
- Create: `components/sections/FAQ.tsx`
- Modify: `app/page.tsx`

**Produces:**
- Accordion-style FAQ with 8 questions
- Click to expand/collapse
- id="faq" for navbar scroll

- [ ] **Step 1: Create FAQ component**

Section title: "Pertanyaan yang sering ditanyakan."
id="faq" for scroll target.
8 Q&A items from content brief.
Accordion: client component with useState toggle.
Lucide ChevronDown icon rotates on open.
AOS: fade-up on section.

- [ ] **Step 2: Add to page.tsx**

- [ ] **Step 3: Commit**

```bash
git add .
git commit -m "feat: add FAQ section"
```

---

### Task 12: CTA Final + Footer

**Files:**
- Create: `components/sections/CTAFinal.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/page.tsx`

**Produces:**
- Closing CTA section with headline + buttons
- Full footer with logo, nav, legal links, copyright
- WhatsApp floating button (optional)

- [ ] **Step 1: Create CTAFinal component**

Headline: "Siap mengelola sekolah dengan lebih efisien?"
Subheadline + 2 buttons: "Hubungi Kami" (primary), "Download Aplikasi" (secondary, placeholder).

- [ ] **Step 2: Create Footer component**

Logo, nav links (Fitur, Harga, FAQ, Kontak), legal links (placeholder), social media placeholders, admin panel button, copyright 2025.
Dark bg (#00317D).

- [ ] **Step 3: Add WhatsApp floating button (optional)**

Fixed bottom-right, green WhatsApp icon, links to wa.me/placeholder.

- [ ] **Step 4: Add to page.tsx**

- [ ] **Step 5: Final assembly verification**

Run `npm run build` to verify static export works.
Check all sections render, all scroll links work, AOS animations fire.

- [ ] **Step 6: Commit**

```bash
git add .
git commit -m "feat: add CTA final, footer, and WhatsApp button"
```

---

## Final Verification

- [ ] All 11 sections render correctly
- [ ] Navbar scroll-to-section works for all links
- [ ] AOS animations fire on scroll
- [ ] Mobile responsive (check 375px, 768px, 1024px, 1440px)
- [ ] `npm run build` succeeds without errors
- [ ] Favicon shows logo.png
- [ ] Meta tags present in HTML head
