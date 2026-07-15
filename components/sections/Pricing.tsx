"use client";

import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Dasar",
    target: "Sekolah ≤300 siswa (SD kecil)",
    monthly: "300.000",
    yearly: "3.600.000",
    highlighted: false,
  },
  {
    name: "Standar",
    target: "Sekolah 300-600 siswa (SD/SMP)",
    monthly: "500.000",
    yearly: "6.000.000",
    highlighted: true,
  },
  {
    name: "Premium",
    target: "Sekolah 600+ siswa (SMA/sekolah besar)",
    monthly: "750.000",
    yearly: "9.000.000",
    highlighted: false,
  },
];

const notes = [
  "Semua paket sudah termasuk seluruh fitur (absensi, SPP, rapor, RPP, notifikasi)",
  "Akses unlimited untuk semua guru dan orang tua",
  "Update aplikasi gratis",
  "Bayar tahunan di muka (sesuai siklus dana BOS)",
  "Diskon 10% untuk pembayaran 2 tahun sekaligus",
];

export default function Pricing() {
  return (
    <section id="harga" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Harga transparan, tanpa biaya tersembunyi.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Pilih paket sesuai ukuran sekolah Anda. Semua fitur sudah termasuk.
          </p>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className={`relative p-8 rounded-3xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-primary text-white shadow-2xl shadow-primary/30 scale-105 md:scale-110 z-10 border-2 border-accent"
                  : "bg-white border-2 border-slate-100 hover:border-primary/20 hover:shadow-xl"
              }`}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-accent text-primary text-xs font-bold rounded-full shadow-lg">
                    <Star size={12} fill="currentColor" />
                    POPULER
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.highlighted ? "text-white" : "text-primary"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.target}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    Rp
                  </span>
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-accent" : "text-primary"
                    }`}
                  >
                    {plan.monthly}
                  </span>
                </div>
                <span
                  className={`text-sm ${
                    plan.highlighted ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  /bulan
                </span>
                <p
                  className={`mt-1 text-xs ${
                    plan.highlighted ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  atau Rp {plan.yearly}/tahun
                </p>
              </div>

              {/* CTA */}
              <a
                href={`https://wa.me/6281517053450?text=${encodeURIComponent(`Halo, saya tertarik dengan paket ${plan.name} Teman Sekolah. Boleh info lebih lanjut?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-accent text-primary hover:bg-accent-400 shadow-lg shadow-accent/25"
                    : "bg-primary text-white hover:bg-primary-600"
                }`}
              >
                Hubungi Kami
              </a>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div
          className="mt-16 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
            <h4 className="font-semibold text-primary mb-4">
              Semua paket termasuk:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {notes.map((note, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600">{note}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
