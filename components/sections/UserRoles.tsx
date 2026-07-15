"use client";

import {
  ShieldCheck,
  Calculator,
  BarChart3,
  PenTool,
  Heart,
} from "lucide-react";

const roles = [
  {
    icon: ShieldCheck,
    role: "Admin Sekolah",
    access: "Website (laptop/PC)",
    description:
      "Kelola data siswa, kelas, guru, tahun ajaran, konfigurasi sekolah",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Calculator,
    role: "Bendahara",
    access: "Website (laptop/PC)",
    description: "Buat tagihan, verifikasi pembayaran, pantau tunggakan",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: BarChart3,
    role: "Kepala Sekolah",
    access: "Website (laptop/PC)",
    description:
      "Lihat dashboard kehadiran, keuangan, dan rapor seluruh sekolah",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: PenTool,
    role: "Guru",
    access: "Aplikasi HP + Website",
    description: "Input absensi, input nilai rapor, buat RPP",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: Heart,
    role: "Orang Tua",
    access: "Aplikasi HP",
    description:
      "Pantau kehadiran anak, bayar SPP, lihat rapor, terima notifikasi",
    color: "from-rose-500 to-rose-600",
  },
];

export default function UserRoles() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Dirancang untuk seluruh warga sekolah.
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Setiap pengguna punya tampilan dan akses yang sesuai kebutuhan
            mereka.
          </p>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`group relative p-6 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                index === 3 ? "lg:col-start-1" : ""
              } ${index === 4 ? "sm:col-start-1 lg:col-start-2" : ""}`}
            >
              {/* Gradient accent on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-lg shadow-primary/10`}
                >
                  <item.icon className="w-6 h-6 text-white" />
                </div>

                {/* Role */}
                <h3 className="text-lg font-bold text-primary mb-1">
                  {item.role}
                </h3>

                {/* Access badge */}
                <span className="inline-block text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full mb-3">
                  {item.access}
                </span>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
