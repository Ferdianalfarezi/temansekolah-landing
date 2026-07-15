export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Teman Sekolah",
    url: "https://teman-sekolah.com",
    logo: "https://teman-sekolah.com/logo.png",
    description:
      "Sistem manajemen sekolah all-in-one — absensi digital, pembayaran SPP online, rapor online, dan komunikasi orang tua dalam satu platform.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+6281281790149",
      availableLanguage: "Indonesian",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Teman Sekolah",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Android, iOS, Web",
    description:
      "Sistem manajemen sekolah all-in-one: absensi digital, pembayaran SPP online, rapor online, notifikasi otomatis ke orang tua, portal RPP, dan manajemen sekolah lengkap.",
    featureList: [
      "Absensi Digital dengan Offline Mode",
      "Pembayaran SPP Online",
      "Rapor Online Kurikulum Merdeka",
      "Notifikasi Otomatis ke Orang Tua",
      "Portal RPP dan Modul Ajar",
      "Manajemen Sekolah Lengkap",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apakah data sekolah kami aman?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Setiap sekolah memiliki data yang 100% terpisah dari sekolah lain (multi-tenant). Tidak ada kemungkinan data bocor antar sekolah. Seluruh komunikasi dienkripsi.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara orang tua login?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Orang tua cukup login dengan nomor HP — tanpa password, tanpa kode SMS. Sangat mudah bahkan untuk orang tua yang kurang familiar dengan teknologi.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa digunakan kalau internet di sekolah tidak stabil?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bisa. Guru bisa input absensi tanpa internet (offline mode). Data otomatis tersinkron saat internet tersedia kembali.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah pembayaran SPP lewat payment gateway?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Saat ini orang tua transfer manual ke rekening sekolah, lalu upload bukti transfer di aplikasi. Ini menghindari potongan 2-3% per transaksi yang biasanya dikenakan payment gateway.",
        },
      },
      {
        "@type": "Question",
        name: "Rapor bisa dicustom sesuai kurikulum sekolah kami?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya. Template default mengikuti Kurikulum Merdeka, tapi bisa disesuaikan: skala nilai (angka/huruf/deskripsi), komponen wajib/opsional, semuanya bisa dikonfigurasi.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses onboarding sekolah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Setelah data siswa dan guru disiapkan dalam format Excel, admin bisa upload langsung dan sistem siap digunakan di hari yang sama.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada kontrak jangka panjang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kontrak minimum 1 tahun (sesuai siklus tahun ajaran). Perpanjangan otomatis kecuali sekolah memutuskan berhenti.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara mengetahui harga Teman Sekolah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hubungi tim kami via WhatsApp untuk mendapatkan penawaran harga yang disesuaikan dengan kebutuhan sekolah Anda.",
        },
      },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Teman Sekolah — Sistem Manajemen Sekolah All-in-One",
    description:
      "Kelola sekolah lebih ringan, orang tua lebih tenang. Absensi digital, pembayaran SPP online, rapor online, dan notifikasi otomatis ke orang tua.",
    url: "https://teman-sekolah.com",
    inLanguage: "id",
    isPartOf: {
      "@type": "WebSite",
      name: "Teman Sekolah",
      url: "https://teman-sekolah.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Beranda",
        item: "https://teman-sekolah.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
