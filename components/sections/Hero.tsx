"use client";

import {
  ArrowRight,
  LogIn,
  Users,
  CheckCircle,
  Bell,
  Smartphone,
  FileText,
  Wallet,
} from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Hero — Sistem Manajemen Sekolah Teman Sekolah"
      className="relative min-h-[calc(100svh-64px)] sm:min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-br from-rose-50/40 via-white to-amber-50/30"
    >
      {/* Subtle gradient blobs in corners */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-gradient-to-br from-rose-100/60 to-transparent rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[150px] sm:w-[250px] h-[150px] sm:h-[250px] bg-gradient-to-bl from-amber-100/50 to-transparent rounded-full blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-center w-full">
        {/* Social proof badge */}
        <div
          data-aos="fade-down"
          data-aos-delay="0"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-full mb-6 sm:mb-8 shadow-sm"
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center">
              <Users
                size={10}
                className="text-primary sm:w-3 sm:h-3"
                aria-hidden="true"
              />
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-accent/20 border-2 border-white flex items-center justify-center">
              <span
                className="text-[9px] sm:text-[10px] font-bold text-primary"
                aria-hidden="true"
              >
                👩‍🏫
              </span>
            </div>
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-alert/10 border-2 border-white flex items-center justify-center">
              <span
                className="text-[9px] sm:text-[10px] font-bold text-primary"
                aria-hidden="true"
              >
                👨‍👩‍👧
              </span>
            </div>
          </div>
          <span className="text-xs sm:text-sm font-medium text-slate-700">
            Digunakan oleh sekolah di Indonesia
          </span>
        </div>

        {/* Headline — H1 with primary keywords */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#01B0F9] leading-[1.15] sm:leading-[1.1] tracking-tight max-w-5xl mx-auto"
        >
          Kelola <span className="text-primary">sekolah</span> lebih ringan,{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic font-bold text-primary">
              orang tua lebih tenang
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-full h-2 sm:h-3 text-accent/60 z-0"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0,5 Q50,0 100,5 T200,5"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline — keyword-rich description */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0"
        >
          Sistem manajemen sekolah all-in-one: absensi digital, pembayaran SPP
          online, rapor online, dan notifikasi otomatis ke orang tua — semua
          dalam satu platform. Mulai dari Rp 300.000/bulan.
        </p>

        {/* CTA Buttons */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="https://wa.me/6281517053450?text=Halo%2C%20saya%20tertarik%20dengan%20Teman%20Sekolah.%20Boleh%20info%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 bg-[#01B0F9] text-white font-semibold rounded-full hover:bg-slate-800 transition-all duration-200 hover:shadow-2xl hover:shadow-[#01B0F9]/20 hover:-translate-y-0.5 text-base sm:text-lg w-full sm:w-auto justify-center"
            aria-label="Hubungi kami via WhatsApp untuk demo Teman Sekolah"
          >
            Hubungi Kami
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
          <a
            href="https://app.teman-sekolah.com"
            className="inline-flex items-center gap-2 px-6 py-3 sm:py-4 text-slate-600 font-medium hover:text-primary transition-colors text-sm sm:text-base"
            aria-label="Masuk ke panel admin Teman Sekolah"
          >
            <LogIn size={18} aria-hidden="true" />
            Masuk Admin Panel
          </a>
        </div>

        {/* Floating UI cards — decorative illustration band */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-10 sm:mt-16 relative"
          aria-hidden="true"
        >
          {/* Yellow ribbon/band behind cards */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-12 sm:h-16 md:h-20 bg-accent/40 rounded-full blur-sm transform -rotate-2" />

          {/* Floating cards */}
          <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 py-4 sm:py-8">
            {/* Card 1: Absensi */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-3 sm:p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <CheckCircle
                    size={16}
                    className="text-blue-500 sm:w-5 sm:h-5"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Absensi Hari Ini
                  </p>
                  <p className="text-[10px] sm:text-xs text-green-500 font-medium">
                    ✓ Selesai — 2 menit
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Notifikasi */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-3 sm:p-4 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Bell size={16} className="text-amber-500 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Notifikasi Orang Tua
                  </p>
                  <span className="text-[10px] bg-accent/20 text-amber-700 font-semibold px-2 py-0.5 rounded-full">
                    Real-time
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: SPP */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-3 sm:p-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Wallet
                    size={16}
                    className="text-emerald-500 sm:w-5 sm:h-5"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    SPP Bulan Juli
                  </p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <div className="h-1.5 w-12 sm:w-16 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-emerald-400 rounded-full" />
                    </div>
                    <span className="text-[10px] text-slate-500">75%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Rapor */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-3 sm:p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300 hidden md:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <FileText
                    size={16}
                    className="text-purple-500 sm:w-5 sm:h-5"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Rapor Semester 1
                  </p>
                  <span className="text-[10px] bg-purple-50 text-purple-600 font-semibold px-2 py-0.5 rounded-full">
                    Tersedia
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5: Mobile */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 p-3 sm:p-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300 hidden lg:block">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-rose-50 rounded-lg sm:rounded-xl flex items-center justify-center">
                  <Smartphone
                    size={16}
                    className="text-rose-500 sm:w-5 sm:h-5"
                  />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800">
                    Akses dari HP
                  </p>
                  <span className="text-[10px] bg-rose-50 text-rose-600 font-semibold px-2 py-0.5 rounded-full">
                    Offline Mode
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
