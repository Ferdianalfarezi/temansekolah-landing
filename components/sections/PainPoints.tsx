"use client";

import { Clock, CreditCard, BellOff, FileText, BookOpen } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Absensi manual memakan waktu",
    description:
      "Guru menghabiskan 30 menit setiap pagi hanya untuk merekap kehadiran di kertas atau spreadsheet.",
  },
  {
    icon: CreditCard,
    title: "SPP sering menunggak tanpa kontrol",
    description:
      "Bendahara kesulitan melacak siapa yang sudah bayar, siapa yang belum — apalagi kalau cicilan.",
  },
  {
    icon: BellOff,
    title: "Orang tua tidak tahu apa yang terjadi",
    description: "Anak tidak masuk? Orang tua baru tahu saat ambil rapor.",
  },
  {
    icon: FileText,
    title: "Rapor masih ditulis tangan atau Excel",
    description:
      "Proses input nilai dari guru ke wali kelas ke cetak rapor memakan waktu berminggu-minggu.",
  },
  {
    icon: BookOpen,
    title: "Materi tidak terdokumentasi",
    description:
      "RPP dibuat guru masing-masing, tidak ada tempat berbagi antar guru.",
  },
];

export default function PainPoints() {
  return (
    <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Masih pakai cara lama?
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Pain point cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-alert/30 hover:bg-white/10 transition-all duration-300 ${
                index === 3 ? "md:col-span-1 lg:col-start-1" : ""
              } ${index === 4 ? "md:col-span-1 lg:col-start-2" : ""}`}
            >
              <div className="w-12 h-12 rounded-xl bg-alert/20 flex items-center justify-center mb-5 group-hover:bg-alert/30 transition-colors">
                <point.icon className="w-6 h-6 text-alert" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
