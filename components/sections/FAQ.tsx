"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah data sekolah kami aman?",
    answer:
      "Ya. Setiap sekolah memiliki data yang 100% terpisah dari sekolah lain (multi-tenant). Tidak ada kemungkinan data bocor antar sekolah. Seluruh komunikasi dienkripsi.",
  },
  {
    question: "Bagaimana cara orang tua login?",
    answer:
      "Orang tua cukup login dengan nomor HP — tanpa password, tanpa kode SMS. Sangat mudah bahkan untuk orang tua yang kurang familiar dengan teknologi.",
  },
  {
    question: "Apakah bisa digunakan kalau internet di sekolah tidak stabil?",
    answer:
      "Bisa. Guru bisa input absensi tanpa internet (offline mode). Data otomatis tersinkron saat internet tersedia kembali.",
  },
  {
    question: "Apakah pembayaran SPP lewat payment gateway?",
    answer:
      "Saat ini orang tua transfer manual ke rekening sekolah, lalu upload bukti transfer di aplikasi. Ini menghindari potongan 2-3% per transaksi yang biasanya dikenakan payment gateway.",
  },
  {
    question: "Rapor bisa dicustom sesuai kurikulum sekolah kami?",
    answer:
      "Ya. Template default mengikuti Kurikulum Merdeka, tapi bisa disesuaikan: skala nilai (angka/huruf/deskripsi), komponen wajib/opsional, semuanya bisa dikonfigurasi.",
  },
  {
    question: "Berapa lama proses onboarding sekolah?",
    answer:
      "Setelah data siswa dan guru disiapkan dalam format Excel, admin bisa upload langsung dan sistem siap digunakan di hari yang sama.",
  },
  {
    question: "Apakah ada kontrak jangka panjang?",
    answer:
      "Kontrak minimum 1 tahun (sesuai siklus tahun ajaran). Perpanjangan otomatis kecuali sekolah memutuskan berhenti.",
  },
  {
    question: "Support seperti apa yang tersedia?",
    answer:
      "Kami menyediakan WhatsApp support untuk pertanyaan sehari-hari dan dedicated account manager untuk onboarding serta kebutuhan khusus sekolah Anda.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Pertanyaan yang sering ditanyakan.
          </h2>
          <div className="mt-4 w-16 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* FAQ items */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-200 hover:border-primary/20"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-primary pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
