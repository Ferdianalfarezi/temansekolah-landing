import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teman-sekolah.com"),
  title: {
    default: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One",
    template: "%s | Teman Sekolah",
  },
  description:
    "Kelola sekolah lebih ringan, orang tua lebih tenang. Absensi digital, pembayaran SPP online, rapor online, dan notifikasi otomatis ke orang tua — semua dalam satu platform. Mulai Rp 300.000/bulan.",
  keywords: [
    "sistem manajemen sekolah",
    "aplikasi absensi sekolah",
    "pembayaran SPP online",
    "rapor online",
    "aplikasi sekolah",
    "software sekolah",
    "manajemen sekolah digital",
    "absensi digital sekolah",
    "aplikasi rapor online",
    "sistem informasi sekolah",
    "aplikasi orang tua siswa",
    "manajemen keuangan sekolah",
    "aplikasi pendidikan",
    "school management system Indonesia",
    "teman sekolah",
  ],
  authors: [{ name: "Teman Sekolah" }],
  creator: "Teman Sekolah",
  publisher: "Teman Sekolah",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://teman-sekolah.com",
  },
  openGraph: {
    title: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One",
    description:
      "Absensi digital, pembayaran SPP, rapor online, dan notifikasi otomatis ke orang tua — semua dalam satu platform yang mudah digunakan. Mulai Rp 300.000/bulan.",
    type: "website",
    locale: "id_ID",
    url: "https://teman-sekolah.com",
    siteName: "Teman Sekolah",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Teman Sekolah - Sistem Manajemen Sekolah All-in-One",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One",
    description:
      "Absensi digital, pembayaran SPP, rapor online, dan notifikasi otomatis ke orang tua — semua dalam satu platform.",
    images: ["/og-image.png"],
  },
  verification: {
    // Uncomment and add your verification codes when ready:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={poppins.variable}>
      <head>
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#00317D" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-poppins antialiased text-slate-800">
        {children}
      </body>
    </html>
  );
}
