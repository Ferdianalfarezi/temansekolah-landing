"use client";

import {
  UserCheck,
  Wallet,
  GraduationCap,
  Bell,
  BookMarked,
  School,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Absensi Digital",
    color: "bg-blue-50 text-blue-600",
    items: [
      "Guru input kehadiran dari HP dalam 2 menit",
      "Notifikasi otomatis jika anak tidak hadir",
      "Bisa digunakan tanpa internet (offline mode)",
      "Rekap otomatis per kelas, bulan, semester",
      "Penugasan guru pengganti otomatis",
    ],
  },
  {
    icon: Wallet,
    title: "Pembayaran SPP Online",
    color: "bg-emerald-50 text-emerald-600",
    items: [
      "Buat tagihan bulanan atau setahun sekaligus",
      "Orang tua bayar dari HP — upload bukti transfer",
      "Bendahara verifikasi dalam satu klik",
      "Sistem cicilan otomatis (max 2x per tagihan)",
      "Audit trail keuangan permanen",
    ],
  },
  {
    icon: GraduationCap,
    title: "Rapor Online",
    color: "bg-purple-50 text-purple-600",
    items: [
      "Guru input nilai langsung dari website",
      "Wali kelas review dan finalisasi — ranking otomatis",
      "Orang tua lihat rapor anak dari HP",
      "Support Kurikulum Merdeka (bisa dicustom)",
      "Export ke Excel untuk laporan ke dinas",
    ],
  },
  {
    icon: Bell,
    title: "Notifikasi Otomatis",
    color: "bg-amber-50 text-amber-600",
    items: [
      "Anak tidak hadir → orang tua langsung tahu",
      "Tagihan baru → notifikasi ke HP",
      "Pembayaran disetujui/ditolak → langsung tahu",
      "Rapor tersedia → notifikasi otomatis",
    ],
  },
  {
    icon: BookMarked,
    title: "Portal RPP / Modul Ajar",
    color: "bg-rose-50 text-rose-600",
    items: [
      "Guru buat dan simpan RPP/modul ajar digital",
      "Upload file PDF/Word/PPT atau tulis langsung",
      "Semua guru bisa saling berbagi dan download",
      "Favorit dan search untuk akses cepat",
    ],
  },
  {
    icon: School,
    title: "Manajemen Sekolah Lengkap",
    color: "bg-cyan-50 text-cyan-600",
    items: [
      "Data siswa, kelas, guru, tahun ajaran terpusat",
      "Kenaikan kelas massal di akhir tahun",
      "Jadwal pelajaran per semester",
      "Onboarding orang tua via upload Excel",
      "Konfigurasi fleksibel per sekolah",
    ],
  },
];

export default function Features() {
  return (
    <section id="fitur" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Satu platform, semua kebutuhan sekolah.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Dari absensi hingga rapor, semua terintegrasi dalam satu sistem yang
            mudah digunakan.
          </p>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative p-6 md:p-8 rounded-2xl border border-slate-100 hover:border-primary/20 bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-primary mb-4">
                {feature.title}
              </h3>

              {/* Bullet points */}
              <ul className="space-y-2.5">
                {feature.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
