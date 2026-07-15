"use client";

import { ArrowRight, Download } from "lucide-react";

export default function CTAFinal() {
  return (
    <section
      id="kontak"
      className="relative py-20 md:py-28 bg-primary overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Siap mengelola sekolah dengan lebih efisien?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
            Hubungi kami untuk demo gratis atau langsung daftarkan sekolah Anda.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/6281281790149?text=Halo%2C%20saya%20tertarik%20dengan%20Teman%20Sekolah.%20Boleh%20info%20lebih%20lanjut%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary font-bold rounded-full hover:bg-accent-400 transition-all duration-200 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5 text-lg"
            >
              Hubungi Kami
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:border-white hover:bg-white hover:text-primary transition-all duration-200 text-lg"
            >
              <Download size={20} />
              Download Aplikasi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
