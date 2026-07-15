# Landing Page Teman Sekolah — Design Spec

## Overview
Single-page landing page untuk aplikasi "Teman Sekolah" — sistem manajemen sekolah all-in-one. Target audience: pemilik/pengelola sekolah. Tujuan: konversi visitor menjadi lead (hubungi/demo).

## Tech Stack
- Next.js 14 (App Router, static export via `next export`)
- Tailwind CSS v3
- Poppins (Google Fonts) — heading dan body
- Lucide React untuk icons
- AOS (Animate On Scroll) library
- TypeScript

## Color System
| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#00317D` | Navbar bg, headings, primary buttons, footer bg |
| Accent | `#FFD601` | Highlights, badges, secondary buttons, hover accents |
| Alert | `#FD3D36` | Pain point icons, urgent CTAs, pricing highlight |
| Background Light | `#FFFFFF` | Default section bg |
| Background Alt | `#F8FAFC` | Alternating sections |
| Text Primary | `#1E293B` | Body text (slate-800) |
| Text Muted | `#64748B` | Secondary/caption text (slate-500) |

## Typography
- Font: Poppins (weights: 400, 500, 600, 700)
- Headings: Poppins 700 (bold), sizes responsive
- Body: Poppins 400-500, 16px base
- Scale: mobile-first responsive sizing

## Sections (11 total, order as content brief)

### 1. Navbar (sticky)
- Logo: `logo-text.png` (kiri)
- Nav links: Fitur, Harga, FAQ (scroll-to-section smooth)
- CTA button: "Masuk Admin Panel" → app.teman-sekolah.com
- Mobile: hamburger menu

### 2. Hero
- Headline: "Kelola Sekolah Lebih Ringan, Orang Tua Lebih Tenang."
- Subheadline: deskripsi singkat
- 2 CTA buttons (primary: Coba Gratis, secondary: Masuk Admin Panel)
- Supporting text: harga mulai dari
- Visual: abstract pattern atau gradient sebagai background accent

### 3. Pain Points ("Masih pakai cara lama?")
- Background: dark (primary #00317D) untuk kontras
- 5 pain point cards — icon merah, white text
- Grid: 2-3 columns desktop, 1 column mobile
- AOS: fade-up staggered

### 4. Fitur Utama ("Satu platform, semua kebutuhan sekolah.")
- 6 feature cards
- Layout: 3-col desktop, 2-col tablet, 1-col mobile
- Each card: icon + title + bullet points
- AOS: fade-up staggered

### 5. Cara Kerja ("Mulai dalam 3 langkah.")
- 3 steps horizontal (desktop), vertical (mobile)
- Large numbers + title + description
- Connector lines/dots between steps
- AOS: fade-right sequential

### 6. User Roles ("Dirancang untuk seluruh warga sekolah.")
- Cards per role (5 roles)
- Each: icon + role name + akses + kegunaan
- AOS: fade-up staggered

### 7. Keunggulan ("Kenapa sekolah memilih Teman Sekolah?")
- 8 items, grid 2x4 desktop, 2x4 tablet, 1-col mobile
- Icon + title + short description
- AOS: fade-up staggered

### 8. Harga ("Harga transparan, tanpa biaya tersembunyi.")
- 3 pricing cards side by side
- Middle card (Standar) highlighted/elevated
- Feature notes below table
- AOS: zoom-in

### 9. Statistik ("Angka yang berbicara.")
- Background: primary #00317D
- 4 large counter-style stats
- Bold numbers + description
- AOS: fade-up

### 10. FAQ ("Pertanyaan yang sering ditanyakan.")
- Accordion style (click to expand)
- 8 questions from content brief
- No external library — simple state toggle
- AOS: fade-up on section

### 11. CTA Final + Footer
- CTA section: headline + subheadline + 2 buttons
- Footer: logo, nav links, legal links, social placeholders, copyright
- Background: primary #00317D

## AOS Configuration
- Global: duration 700ms, once: true
- Cards: `fade-up` with `data-aos-delay` stagger (100ms increments)
- Alternating sections: `fade-right` / `fade-left`
- Stats: `zoom-in`
- Steps: `fade-right` sequential

## Responsive Breakpoints
- Mobile: < 640px (1 column)
- Tablet: 640-1024px (2 columns)
- Desktop: > 1024px (3 columns, max-width 1280px container)

## Assets
- `/public/logo.png` — favicon dan logo square
- `/public/logo-text.png` — logo dengan nama brand (navbar)
- WhatsApp floating button (optional)

## SEO
- Meta title: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One"
- Meta description: dari tagline
- OG tags untuk social sharing
- Semantic HTML (h1, h2, sections, nav)

## Performance
- Static export (no server needed)
- Lazy load AOS
- Optimized images via next/image
- Minimal JS bundle
