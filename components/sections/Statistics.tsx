"use client";

const stats = [
  {
    value: "2",
    unit: "menit",
    description: "Waktu input absensi per kelas",
    detail: "vs 30 menit manual",
  },
  {
    value: "100",
    unit: "%",
    description: "Transparansi kehadiran anak",
    detail: "Real-time ke orang tua",
  },
  {
    value: "0",
    unit: "rupiah",
    description: "Biaya tambahan per user",
    detail: "Unlimited guru & orang tua",
  },
  {
    value: "24/7",
    unit: "",
    description: "Akses data anak",
    detail: "Kapan saja, di mana saja",
  },
];

export default function Statistics() {
  return (
    <section className="relative py-20 md:py-28 bg-primary overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,214,1,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,214,1,0.03),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Angka yang berbicara.
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center"
            >
              <div className="mb-3">
                <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-2xl md:text-3xl font-bold text-accent/70 ml-1">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-white font-medium text-sm md:text-base">
                {stat.description}
              </p>
              <p className="text-slate-400 text-xs md:text-sm mt-1">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
