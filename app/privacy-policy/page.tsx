import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description:
    "Kebijakan Privasi aplikasi Teman Sekolah — informasi tentang bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
  alternates: {
    canonical: "https://teman-sekolah.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-block">
            <Image
              src="/logo-text.png"
              alt="Teman Sekolah"
              width={140}
              height={36}
              className="h-9 w-auto object-cover"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
          Kebijakan Privasi
        </h1>
        <p className="text-slate-500 mb-10">
          Terakhir diperbarui: 20 Juli 2026
        </p>

        <div className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-blue-600">
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">1. Pendahuluan</h2>
            <p>
              Teman Sekolah (&quot;kami&quot;, &quot;aplikasi&quot;) adalah
              platform manajemen sekolah yang menyediakan layanan untuk sekolah,
              guru, dan orang tua siswa. Kebijakan privasi ini menjelaskan
              bagaimana kami mengumpulkan, menggunakan, menyimpan, dan
              melindungi informasi pribadi Anda saat menggunakan aplikasi mobile
              dan panel administrasi Teman Sekolah.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              2. Informasi yang Kami Kumpulkan
            </h2>

            <h3 className="text-lg font-medium mt-6 mb-3">
              2.1 Informasi yang Anda Berikan
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Data akun:</strong> nama, email, nomor telepon, dan
                peran pengguna (guru/orang tua/admin).
              </li>
              <li>
                <strong>Data siswa:</strong> nama siswa, kelas, dan hubungan
                dengan orang tua (diinput oleh admin sekolah).
              </li>
              <li>
                <strong>Data pembayaran:</strong> bukti transfer yang diunggah
                untuk verifikasi pembayaran SPP.
              </li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-3">
              2.2 Informasi yang Dikumpulkan Secara Otomatis
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Device token:</strong> token perangkat untuk pengiriman
                notifikasi push (Firebase Cloud Messaging).
              </li>
              <li>
                <strong>Informasi perangkat:</strong> jenis perangkat
                (Android/iOS) dan versi aplikasi.
              </li>
              <li>
                <strong>Log aktivitas:</strong> waktu login dan aktivitas
                penggunaan untuk keperluan keamanan.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              3. Penggunaan Informasi
            </h2>
            <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                Menyediakan layanan manajemen sekolah (absensi, tagihan, rapor,
                jadwal).
              </li>
              <li>
                Mengirim notifikasi push terkait kehadiran, pembayaran, dan
                pengumuman sekolah.
              </li>
              <li>
                Memverifikasi identitas pengguna dan menjaga keamanan akun.
              </li>
              <li>Meningkatkan kualitas layanan dan pengalaman pengguna.</li>
              <li>Memenuhi kewajiban hukum yang berlaku.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              4. Penyimpanan dan Keamanan Data
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Data disimpan pada server yang aman dengan enkripsi saat transit
                (TLS/SSL) dan saat disimpan.
              </li>
              <li>
                Akses ke data dibatasi berdasarkan peran pengguna — setiap
                sekolah (tenant) hanya dapat mengakses data miliknya sendiri.
              </li>
              <li>
                Token autentikasi menggunakan standar JWT dengan masa berlaku
                terbatas.
              </li>
              <li>
                Bukti pembayaran yang diunggah disimpan pada penyimpanan cloud
                yang terenkripsi.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">5. Berbagi Informasi</h2>
            <p>
              Kami <strong>tidak menjual</strong> data pribadi Anda kepada pihak
              ketiga. Informasi hanya dibagikan dalam konteks berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>
                <strong>Dalam lingkungan sekolah:</strong> data siswa dan
                kehadiran dibagikan antara guru, admin, dan orang tua sesuai
                peran masing-masing.
              </li>
              <li>
                <strong>Penyedia layanan:</strong> kami menggunakan layanan
                pihak ketiga (Firebase untuk notifikasi, penyimpanan cloud untuk
                file) yang terikat perjanjian kerahasiaan.
              </li>
              <li>
                <strong>Kewajiban hukum:</strong> jika diwajibkan oleh hukum
                atau proses hukum yang berlaku di Indonesia.
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">6. Hak Pengguna</h2>
            <p>Anda memiliki hak untuk:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Mengakses data pribadi yang kami simpan tentang Anda.</li>
              <li>Meminta koreksi data yang tidak akurat.</li>
              <li>Meminta penghapusan akun dan data terkait.</li>
              <li>
                Menonaktifkan notifikasi push melalui pengaturan aplikasi.
              </li>
              <li>Menarik persetujuan penggunaan data kapan saja.</li>
            </ul>
            <p className="mt-3">
              Untuk menjalankan hak-hak di atas, hubungi admin sekolah Anda atau
              kirim email ke alamat kontak di bawah.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              7. Penyimpanan Data Anak
            </h2>
            <p>
              Teman Sekolah menyimpan data siswa (termasuk anak di bawah umur)
              yang diinput oleh admin sekolah dan guru. Data ini hanya dapat
              diakses oleh pihak sekolah yang berwenang dan orang tua/wali yang
              terdaftar. Kami tidak mengumpulkan data langsung dari anak-anak
              tanpa persetujuan orang tua atau sekolah.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">
              8. Perubahan Kebijakan
            </h2>
            <p>
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu.
              Perubahan akan diberitahukan melalui aplikasi atau email. Dengan
              terus menggunakan layanan setelah perubahan berlaku, Anda dianggap
              menyetujui kebijakan yang diperbarui.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">9. Hubungi Kami</h2>
            <p>
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau
              ingin menjalankan hak-hak Anda, silakan hubungi:
            </p>
            <ul className="list-none pl-0 mt-3 space-y-1">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@teman-sekolah.com">
                  support@teman-sekolah.com
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://teman-sekolah.com">teman-sekolah.com</a>
              </li>
            </ul>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Teman Sekolah. All rights reserved.
          </p>
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-800 mt-2 inline-block"
          >
            ← Kembali ke beranda
          </Link>
        </div>
      </footer>
    </main>
  );
}
