import Image from "next/image";
import { ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

const legalLinks = [
  { label: "Kebijakan Privasi", href: "/privacy-policy" },
  { label: "Syarat & Ketentuan", href: "/terms" },
];

export default function Footer() {
  return (
    <footer
      className="bg-white text-slate-800 border-t border-slate-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Image
              src="/logo-text.png"
              alt="Teman Sekolah — Sistem Manajemen Sekolah All-in-One"
              width={160}
              height={40}
              className="h-10 w-36 object-cover mb-4"
            />
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Sistem manajemen sekolah all-in-one yang terjangkau — absensi
              digital, pembayaran SPP online, rapor online, dan komunikasi orang
              tua dalam satu platform. Digunakan oleh sekolah SD, SMP, dan SMA
              di Indonesia.
            </p>
            <address className="mt-4 text-slate-400 text-sm not-italic">
              <p>Indonesia</p>
              <p className="mt-1">
                <a
                  href="https://app.teman-sekolah.com"
                  className="hover:text-primary transition-colors"
                >
                  app.teman-sekolah.com
                </a>
              </p>
            </address>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="font-semibold text-primary mb-4">Navigasi</h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Akses</h4>
            <div className="space-y-3">
              <a
                href="https://app.teman-sekolah.com"
                className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Masuk Admin Panel
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Download di Play Store
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-slate-500 hover:text-primary text-sm transition-colors"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Download di App Store
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Teman Sekolah. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-slate-400 hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
