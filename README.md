# SetaraKita - Website Edukasi Kesetaraan Gender

Selamat datang di repositori SetaraKita! Ini adalah website edukasi yang bertujuan untuk meningkatkan kesadaran tentang pentingnya kesetaraan gender, membongkar mitos yang ada, menunjukkan dampak nyata ketidaksetaraan, dan mengajak pengunjung untuk beraksi.

## Deskripsi Singkat

SetaraKita adalah platform informatif dan interaktif yang dirancang untuk:
* Menyajikan informasi fundamental mengenai kesetaraan gender.
* Meluruskan persepsi keliru terkait peran dan kemampuan gender di berbagai aspek kehidupan, terutama di dunia kerja.
* Menggambarkan konsekuensi nyata dari ketidaksetaraan gender.
* Menginspirasi dan memandu pengunjung untuk mengambil langkah-langkah konkret menuju masyarakat yang lebih setara.
* Menampilkan proyek dan inisiatif yang telah dilakukan terkait isu kesetaraan gender.

## Fitur Utama

* **Halaman Beranda Dinamis:** Dengan hero section yang menarik, efek mengetik, dan navigasi yang jelas.
* **Konten Edukatif Terstruktur:**
    * Mengapa Kesetaraan Penting?
    * Mitos vs Fakta (dengan format akordion interaktif).
    * Dampak Nyata Ketidaksetaraan.
    * Yuk, Beraksi! (dengan ajakan bertindak dan preview proyek).
* **Halaman Proyek:** Menampilkan detail proyek-proyek yang telah atau akan dilakukan (saat ini "Segera Hadir").
* **Formulir Kontak:** Terintegrasi dengan Formspree untuk memudahkan pengunjung mengirim pesan.
* **Mode Gelap/Terang:** Untuk kenyamanan visual pengguna.
* **Animasi Halus:** Menggunakan AOS (Animate On Scroll) untuk pengalaman pengguna yang lebih menarik.
* **Desain Responsif:** Tampilan website menyesuaikan dengan berbagai ukuran perangkat (desktop, tablet, mobile).

## Teknologi yang Digunakan

* **HTML5:** Untuk struktur dasar halaman web.
* **CSS3:** Untuk styling dan tampilan visual, termasuk:
    * Variabel CSS (Custom Properties) untuk tema yang konsisten.
    * Flexbox dan CSS Grid untuk layout.
    * Media Queries untuk desain responsif.
    * Animasi dan transisi CSS.
* **JavaScript (ES6+):** Untuk fungsionalitas interaktif, seperti:
    * Toggle mode gelap/terang.
    * Efek mengetik.
    * Menu hamburger mobile.
    * Scrollspy untuk navigasi aktif.
    * Fungsi akordion.
    * Validasi formulir dasar.
* **AOS (Animate On Scroll):** Library JavaScript untuk animasi saat scroll.
* **Google Fonts:** Untuk tipografi (Poppins dan Playfair Display).
* **Formspree:** Untuk backend formulir kontak.

## Struktur File Proyek (Utama)



## Cara Menjalankan Secara Lokal

1.  **Clone repositori ini :
    ```bash
    https://github.com/hilmybaihaqii/kesetaraan-gender/
    cd kesetaraan-gender
    ```
    Atau, jika Anda memiliki file secara lokal, cukup buka folder proyek.
3.  **Buka `index.html` di browser:**
    * Cara termudah adalah dengan menggunakan ekstensi "Live Server" di Visual Studio Code. Klik kanan pada file `index.html` dan pilih "Open with Live Server".
    * Atau, Anda bisa langsung membuka file `index.html` di browser pilihan Anda.

## Deployment

Website ini adalah situs statis dan dapat di-deploy dengan mudah ke berbagai platform hosting, seperti:
* Netlify
* GitHub Pages
* Vercel
* Cloudflare Pages

Formulir kontak pada halaman `index.html` menggunakan endpoint dari **Formspree**. Pastikan Anda telah mengkonfigurasi akun Formspree Anda dan mengganti URL `action` pada formulir dengan endpoint yang benar.


## Status Proyek

Saat ini, website utama telah selesai dikembangkan. Halaman "Proyek Kami" (`proyek.html`) masih dalam status "Segera Hadir" dan akan diisi dengan konten proyek di masa mendatang.

## Kontribusi

Saran dan kontribusi untuk pengembangan lebih lanjut sangat diterima. Silakan buat *issue* atau *pull request*.

---

Semoga README ini bermanfaat!
