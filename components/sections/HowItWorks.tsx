"use client";

import { Building2, Upload, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Daftarkan sekolah Anda",
    description:
      "Hubungi tim kami, data sekolah Anda akan disiapkan dalam sistem.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Upload data siswa dan guru",
    description:
      "Admin upload file Excel — akun guru dan orang tua langsung aktif.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Langsung gunakan",
    description:
      "Guru input absensi dari HP. Orang tua download aplikasi dan langsung memantau anak.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Mulai dalam 3 langkah.
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Connector line (desktop) — centered vertically with the 80px icon circle (40px from top) */}
          <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />

          {steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-white shadow-lg shadow-primary/10 flex items-center justify-center border-2 border-primary/10 relative z-10">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-primary shadow-md z-20">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-primary mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
