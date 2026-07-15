"use client";

import {
  Zap,
  Eye,
  Shield,
  Smartphone,
  FileCheck,
  WifiOff,
  PiggyBank,
  Users,
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Hemat waktu",
    description:
      "Absensi dari 30 menit → 2 menit. Rapor dari berminggu-minggu → beberapa hari.",
  },
  {
    icon: Eye,
    title: "Transparansi ke orang tua",
    description:
      "Orang tua tidak perlu menunggu rapor untuk tahu perkembangan anak.",
  },
  {
    icon: Shield,
    title: "Data aman & terpisah",
    description:
      "Setiap sekolah punya data terpisah. Tidak bisa saling lihat antar sekolah.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first",
    description: "Guru dan orang tua cukup pakai HP. Tidak perlu laptop.",
  },
  {
    icon: FileCheck,
    title: "Audit trail keuangan",
    description:
      "Setiap transaksi tercatat permanen — siapa, kapan, berapa. Tidak bisa dimanipulasi.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    description:
      "Guru tetap bisa input absensi walau internet mati. Data tersinkron otomatis.",
  },
  {
    icon: PiggyBank,
    title: "Harga terjangkau",
    description:
      "Mulai dari Rp 300.000/bulan — lebih murah dari biaya fotokopi rapor sebulan.",
  },
  {
    icon: Users,
    title: "Tanpa batasan user",
    description:
      "Tidak ada biaya tambahan per guru atau per orang tua. Unlimited.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Kenapa sekolah memilih Teman Sekolah?
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Advantages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 75}
              className="group text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
