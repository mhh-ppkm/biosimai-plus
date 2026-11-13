# BioSimAI+ · Pecutan Terakhir SPM 2026 (Biologi 4551)

Disediakan oleh **Ir. Ts. Dr. Muhammad Hafiz HASSAN**, Pusat Pengajian Kejuruteraan Mekanik, Universiti Sains Malaysia.

Aplikasi web (PWA) satu halaman dalam format yang sama dengan PhysicsSimAI+ dan MathSimAI+:

- **Papan Pemuka**: kira detik ke 4551/1 (Rabu 2 Dis 2026, 8:15 pagi), ramalan gred, format 4551, pelan 19 hari, peta penguasaan 28 bab, rujukan percubaan 2025.
- **Nota Infografik**: 28 bab KSSM Tingkatan 4 & 5, dengan 12 video penerangan beranimasi.
- **Aplikasi Industri**: 28 kajian kes (satu setiap bab), setiap satu dengan video, simulator dua pemboleh ubah dan soalan cabaran.
- **Kertas 1** (40 objektif) dan **Kertas 2** (Bahagian A 60, B 20 pilih 1, C 20): Set Pecutan 1–3 tetap + set rawak tanpa had, jam peperiksaan, skema K/N/P.
- **Simulator**: 12 simulator biologi interaktif dipautkan kepada soalan.
- **Analisis**: sejarah ujian, prestasi ikut bab, CSV, sandaran/pulih rekod (IndexedDB + localStorage).

## Muat naik ke GitHub Pages

1. Cipta repositori baharu bernama `biosimai-plus` di akaun `mhh-ppkm`.
2. Muat naik **semua** fail dalam folder ini (semua fail berada di aras utama: `index.html`, `manifest.webmanifest`, `sw.js`, ikon `icon-*.png`, `maskable-512.png`, `favicon-32.png`, `.nojekyll`) ke cabang `main`.
3. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
4. Selepas 1–2 minit laman tersedia di `https://mhh-ppkm.github.io/biosimai-plus/`.

Jika nama repositori berbeza, tukar pemalar `PWA_URL` dalam `index.html`.

## Pasang di telefon (luar talian)

- **Android (Chrome)**: buka pautan → tekan **Pasang aplikasi** di halaman, atau menu ⋮ → *Install app*.
- **iPhone/iPad (Safari)**: ikon Kongsi ⬆ → *Add to Home Screen*.

Buka aplikasi sekali semasa ada internet. Service worker menyimpan semua fail; selepas itu semua ciri berfungsi tanpa internet. Hanya pautan PDF percubaan 2025 memerlukan internet.

Semua soalan ialah soalan asal gaya SPM, bukan soalan bocor atau ramalan.

## Jika ikon tidak muncul (huruf "G" kelabu)

Android menyimpan ikon lama. Selepas memuat naik versi baharu:
1. Tekan lama ikon BioSimAI+ → *Uninstall / Nyahpasang* (atau *Remove*).
2. Buka Chrome → ⋮ → Settings → Site settings → All sites → `mhh-ppkm.github.io` → *Clear & reset*.
3. Buka semula pautan dalam **Chrome**, tunggu 10 saat, kemudian tekan **Pasang aplikasi**.
