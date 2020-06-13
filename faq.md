---
title: Frequently Asked Questions
layout: page
---

### Apa itu Cloud Hosting Solution?

Cloud Hosting Solution adalah provider yang menyediakan solusi buat anda yang mencari tempat untuk hosting sebuah website. Dalam DOM Cloud, kami menggunakan model Shared Cloud Hosting dan setiap user memiliki privasi ruang hosting sendiri-sendiri.

### Siapa dibelakang DOM Cloud Hosting Solution?

Anda bisa mencari tahu di halaman pribadi saya: [wellosoft.net](https://wellosoft.net). Sejauh ini DOM Cloud hanyalah sebuah project hobi, namun kami mempunyai harapan yang besar untuk mensukseskan DOM Cloud hingga dapat digunakan oleh banyak orang.

### Kenapa Bisa Begitu Murah (Bahkan Gratis)?

DOM Cloud Hosting Solution tidak membangun sendiri insfrastuktur atau hardware yang diperlukan untuk menyimpan hosting. Kami menggunakan Cloud VM dari Microsoft Azure sebagai insfrastruktur DOM Cloud. Kami berpendapat bahwa meskipun kami mempunyai budget milyaran rupiah untuk membangun insfrastuktur sendiri, kami tetap tidak bisa menandingi insfrastuktur seoptimal platfom IaaS dari tech giant (IaaS yang kami maksud adalah Google Cloud, Amazon AWS, Microsoft Azure).

Menggunakan Platfom IaaS dari tech giant mempunyai benefit sendiri. Kami tidak perlu khawatir apabila ada hacker yang berniat jahat menggoreng Hardware kami (karena kami tidak memiliki insfrastrukturnya), dan hardware IaaS tersendiri tentu sudah didukung dengan jaringan yang kuat, sehingga kami bisa fokus dengan mengelola VM seoptimal mungkin untuk seluruh pengguna DOM Cloud.

Karena kami optimis bahwa sistem kami akan sangat reliable dan ekonomis, kami berkomitmen untuk membuka paket Gratis untuk semua orang tanpa batasan waktu. Sumber utama kami untuk membayar biaya platform berasal dari pembayaran fitur premium, karena kami tidak pernah punya minat untuk memasang iklan atau bahkan mengotak-atik file anda di server.

### Apa tujuan DOM Cloud Hosting Solution memberikan solusi Hosting Gratis?

Salah satu masalah pada penggunaan shared cloud hosting ialah harganya yang "tinggi", namun banyak resource yang tidak terpakai. DOM Cloud hadir dengan fasilitas paket yang jauh lebih kecil dan hemat, sehingga penggunaan resource bisa lebih optimal dan harganya lebih menjangkau banyak kalangan.

Dengan maraknya platform cloud gratis seperti GitHub, Cloudinary, Cloudflare, TravisCI dan lain sebagainya, kami percaya bahwa inilah saatnya semua orang harus mempunyai kesempatan yang sama untuk mempunyai dan belajar membuat website mereka sendiri.

Kami tidak tahu apakah Cloud Hosting bermodel seperti ini dapat survive untuk waktu yang cukup panjang, namun kami akan melakukan yang terbaik agar terus bisa survive.

### Apakah DOM Cloud memfasilitasi domain Gratis?

Setiap hosting dalam DOM Cloud difasilitasi dengan domain yang terpasang dalam subdomain `.sv[nomor slave]` diikuti dengan `.dom.my.id`. Domain ini sangat membantu apabila anda masih mengembangkan website anda dan belum siap untuk dipublish diinternet. Subdomain ini tentunya mempunyai beberapa kekurangan, diantaranya ialah terlalu panjang dan tidak akan di Indeks oleh Google.

Jika anda ingin pilihan domain yang lain dan dapat terindeks oleh Google, anda harus membeli domain sendiri dengan provider lain (kami tidak melayani pembelian domain). Pengguna hosting selain paket Gratis dapat mengarahkan domain ke IP server dan menambahkan domain alias dalam hosting agar bisa aktif.

### Apakah DOM Cloud memfasilitasi SSL?

Kami tidak memfasilitasi SSL untuk hosting gratis. Namun, bebsite berbayar dapat menggunakan Fitur Let's Encrypt dari Webmin Panel atau memasang proteksi gratis dari CloudFlare.

### Apakah DOM Cloud memfasilitasi CPanel?

Demi memangkas biaya, kami tidak menggunakan CPanel. Kami menggunakan Webmin sebagai alternatif. Webmin mungkin kurang populer namun memiliki fitur tidak kalah lengkap dengan CPanel.

### Apakah DOM Cloud memfasilitasi selain PHP?

Saat ini kami hanya menggunakan PHP 7.2.11 dan tidak memfasilitasi bahasa lain seperti Python, Node.JS, dsb. Anda bisa menggunakan platform lain seperti Heroku atau Zeit.CO dan tetap menggunakan DOM Cloud sebagai basis database.

### Saya rasa kapasitas yang diberikan oleh Paket Gratis kurang cukup.

Anda bisa menggunakan paket yang berbayar, pembayaran dilakukan secara tahunan atau dipaket sekaligus maksimal hingga 5 tahun.

Namun sebelum anda lakukan itu, pikir kembali, apakah anda membutuhkan kuota tersebut? 50 MB adalah ukuran yang sangat cukup, dilihat dari ukuran project CI atau Wordpress yang hanya sekitar 5 MB. Jika anda khawatir soal kapasitas media yang akan membesar, anda bisa menggunakan opsi media yang lain seperti Google Drive, Dropbox atau Cloudinary.

### Apakah DOM Cloud mempunyai Sarana Promo dan Afiliasi?

DOM Cloud tidak dikelola oleh perusahaan atau korporasi dan kami memastikan semua aspek terkendali otomatis agar memangkas biaya operasional hosting se optimal mungkin. Dengan demikian, kami tidak mempunyai promo dan program afiliasi apapun.

### Apakah DOM Cloud mempunyai Jaminan Uptime?

Kami tidak mempunyai cukup data untuk itu dan kami tidak memberikan jaminan apapun soal uptime. Meski kami menggunakan hardware IaaS dari Tech Giant, kesalahan pengelolaan atau DoS dapat berdampak pada overload resource setiap saat. Jika anda khawatir uptime rendah memberikan masalah pada bisnis anda, kami sarankan anda mencari solusi hosting lain yang mempunyai pengalaman lebih lama.

### Apakah DOM Cloud mempunyai keamanan tambahan untuk Akun Hosting?

Saat ini kami tidak memfasilitasi sistem autentikasi tambahan seperti TFA atau fingerprint. Pastikan password anda unik dan cukup kuat.

### Apakah DOM Cloud mempunyai Keamanan Backup dan Fasilitas Migrasi?

Saat ini kami tidak mempunyai fasilitas backup. Kami juga mematikan fasilitas migrasi demi keamanan. Jika anda khawatir akan data hilang, anda harus menyimak baik-baik [Terms of Service](/tos) karena kami tidak memberikan jaminan apapun pada kelangsungan hosting.

### Apakah DOM Cloud memfasilitasi Upgrade?

Ya, anda dapat mengupgrade hosting kapan saja. Dalam DOM Cloud anda dapat upgrade dengan potongan harga beli sebelumnya tanpa menambah waktu masa hosting, atau kamu dapat beli baru menghapus order sebelumnya. Biaya transaksi Rp. 5000 tetap berlaku saat upgrade.

### Apakah DOM Cloud memfasilitasi Downgrade?

Ya, downgrade dapat dilakukan namun pembelian sebelumnya akan hangus dan aksi tersebut tidak dapat dikembalikan.

### Apakah DOM Cloud memfasilitasi Refund?

Kami tidak memfasilitas pengembalian uang sesuai dengan [Terms of Service](/tos) kami.

### Saya punya pertanyaan lain.

Anda bisa menghubungi saya melalui [Telegram](https://t.me/WIIIN0DE).