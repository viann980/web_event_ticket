# Web Event Ticket

Aplikasi pemesanan tiket event berbasis web.

## Daftar Isi
- [Persyaratan](#persyaratan)
- [Cara Instalasi](#cara-instalasi)
- [Cara Menjalankan](#cara-menjalankan)
- [Struktur Kode](#struktur-kode)
- [Fitur](#fitur)
- [Struktur Project](#struktur-project)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)
- [Kontak](#kontak)

## Persyaratan
Sebelum menjalankan aplikasi ini, pastikan komputer Anda telah memiliki:
- Node.js (versi 14 atau lebih tinggi)
- NPM (Node Package Manager)
- Git
- Web Browser (Chrome, Firefox, atau browser modern lainnya)

## Cara Instalasi

1. Buka terminal atau command prompt

2. Clone repository ini dengan perintah:
```bash
git clone https://github.com/[username]/web_event_ticket.git
```

3. Masuk ke direktori project:
```bash
cd web_event_ticket
git clone https://github.com/bikinkoding/web-event.git
cd web-event
git checkout bootcamp
```

4. Install semua dependencies yang diperlukan:
```bash
npm install
```

## Cara Menjalankan

1. Jalankan aplikasi dengan perintah:
```bash
npm start
```

2. Buka browser dan akses:
```
http://localhost:3000
```

## Struktur Kode

### Teknologi yang Digunakan
- Next.js 15.1.6
- React 19.0.0
- Tailwind CSS 3.4.1
- PostCSS

### Struktur Direktori
```
web_event_ticket/
├── src/
│   ├── app/
│   │   ├── components/     # Komponen yang dapat digunakan ulang
│   │   ├── services/       # Layer service untuk API calls
│   │   ├── models/         # Model dan schema data
│   │   ├── utils/          # Fungsi-fungsi helper
│   │   ├── events/         # Halaman manajemen event
│   │   ├── login/          # Sistem autentikasi
│   │   ├── dashboard/      # Panel admin/user
│   │   ├── daftar/         # Halaman pendaftaran
│   │   ├── about/          # Halaman informasi
│   │   ├── blog/           # Fitur blog
│   │   ├── layout.js       # Layout utama aplikasi
│   │   ├── page.js         # Halaman utama
│   │   └── globals.css     # Style global
│   ├── components/         # Komponen global
│   └── pages/              # Routing berbasis pages
├── public/                 # Asset statis
├── next.config.mjs         # Konfigurasi Next.js
├── tailwind.config.mjs     # Konfigurasi Tailwind CSS
├── postcss.config.mjs      # Konfigurasi PostCSS
└── package.json            # Dependency dan scripts
```

### Scripts yang Tersedia
```bash
# Mode development dengan turbopack
npm run dev

# Build project untuk production
npm run build

# Menjalankan versi production
npm run start

# Menjalankan linter
npm run lint
```

### Fitur Utama
1. **Manajemen Event** (`/events`)
   - Melihat daftar event
   - Detail event
   - Pembelian tiket

2. **Sistem Autentikasi** (`/login`)
   - Login user
   - Registrasi
   - Lupa password

3. **Dashboard** (`/dashboard`)
   - Panel admin
   - Panel user
   - Manajemen tiket

4. **Pendaftaran Event** (`/daftar`)
   - Form pendaftaran
   - Validasi data
   - Konfirmasi pendaftaran

5. **Blog dan Informasi**
   - Artikel terkait event
   - Halaman about
   - Informasi update

### Dependencies Utama
```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "next": "15.1.6",
  "tailwindcss": "^3.4.1"
}
```

## Pengembangan
Jika Anda ingin berkontribusi dalam pengembangan:

1. Fork repository
2. Buat branch fitur baru
```bash
git checkout -b fitur-baru
```
3. Commit perubahan
```bash
git commit -m "Menambah fitur baru"
```
4. Push ke branch
```bash
git push origin fitur-baru
```
5. Buat Pull Request

## Fitur
- Pemesanan tiket event
- Melihat daftar event yang tersedia
- Manajemen tiket yang sudah dibeli
- Dan lain-lain

## Struktur Project
```
web_event_ticket/
├── public/
├── src/
├── package.json
└── README.md
```

## Kontribusi
Jika Anda ingin berkontribusi pada project ini, silakan buat pull request.

## Lisensi
Project ini dilisensikan di bawah Lisensi MIT - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

## Kontak
Email: emailhendra2@gmail.com
