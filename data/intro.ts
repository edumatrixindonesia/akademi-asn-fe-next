import type { IntroProps } from "@/components/sections/intro";
import type { ResolvedLocation } from "@/lib/location-tree";

// Hand-written base texts, keyed by region `kode` (stable across slug
// changes). Each one lands here after the owner reviews it; any region
// without an entry falls back to the template in `baseText`. Drafts and
// their sources live in `.scratch/jangkauan-lokasi/intro-drafts/`.
export const introTexts: Record<string, string> = {
  // DI Yogyakarta
  "34": "Daerah Istimewa Yogyakarta dikenal sebagai kota pelajar, dengan banyak perguruan tinggi seperti UGM dan UNY. Pusat pemerintahannya berada di Kompleks Kepatihan, Kota Yogyakarta. Kantor Akademi ASN ada di Sleman, jadi peserta dari DIY bisa memilih Kelas Offline, Privat Home Visit, atau kelas online.",
  // Kota Yogyakarta
  "34.71":
    "Kota Yogyakarta adalah pusat pemerintahan DIY, tempat Keraton Yogyakarta, Kompleks Kepatihan, dan kawasan Malioboro berada. Kantor Akademi ASN berada di Jalan Monjali, Sleman, sehingga peserta dari Kota Yogyakarta bisa ikut Kelas Offline. Jika lebih nyaman belajar di rumah, pilih Privat Home Visit atau kelas online.",
  // Kabupaten Sleman
  "34.04":
    "Kabupaten Sleman membentang dari lereng Gunung Merapi di utara hingga berbatasan dengan Kota Yogyakarta di selatan, dan menjadi lokasi kampus UGM dan UNY. Kantor Akademi ASN berada di Sinduadi, Mlati, Sleman, jadi peserta dari Sleman bisa ikut Kelas Offline. Privat Home Visit dan kelas online juga tersedia.",
  // Kabupaten Bantul
  "34.02":
    "Kabupaten Bantul di selatan Yogyakarta dikenal dengan Pantai Parangtritis, sentra gerabah Kasongan, serta kampus ISI Yogyakarta dan UMY. Peserta dari Bantul bisa belajar di kantor Akademi ASN di Sleman lewat Kelas Offline. Jika ingin belajar dari rumah, tutor Privat Home Visit bisa datang ke tempat Anda.",
  // Kabupaten Kulon Progo
  "34.01":
    "Kabupaten Kulon Progo, dengan ibu kota Wates, menjadi lokasi Yogyakarta International Airport di Kapanewon Temon, gerbang udara utama DIY. Peserta dari Kulon Progo bisa memilih Privat Home Visit agar tutor datang ke rumah, ikut kelas online, atau datang ke Kelas Offline di kantor Akademi ASN di Sleman.",
  // Kabupaten Gunungkidul
  "34.03":
    "Kabupaten Gunungkidul, dengan ibu kota Wonosari, adalah kabupaten terluas di DIY, dengan bentang alam karst Pegunungan Sewu dan deretan pantai di pesisir selatan. Wonosari berjarak sekitar 39 km dari Kota Yogyakarta, jadi peserta dari Gunungkidul bisa belajar lewat Privat Home Visit atau kelas online. Kelas Offline di Sleman tetap terbuka bagi yang ingin belajar tatap muka.",
  // Jawa Barat
  "32": "Jawa Barat adalah provinsi dengan jumlah penduduk terbanyak di Indonesia, beribu kota di Bandung. Wilayahnya mencakup kota seperti Bandung, Bekasi, Depok, dan Bogor, hingga kabupaten di pegunungan dan pesisir selatan. Peserta dari seluruh Jawa Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Bandung
  "32.73":
    "Kota Bandung adalah ibu kota Jawa Barat, dengan Gedung Sate sebagai kantor Gubernur. Kota ini juga menjadi lokasi kampus Ganesha Institut Teknologi Bandung (ITB). Tutor Privat Home Visit Akademi ASN bisa datang ke rumah atau kantor Anda di Bandung, atau Anda bisa ikut kelas online.",
  // Kabupaten Bandung
  "32.04":
    "Kabupaten Bandung, dengan ibu kota di Soreang, berbatasan langsung dengan Kota Bandung. Wilayah pegunungannya di selatan, seperti Ciwidey dan Pangalengan, dikenal dengan perkebunan teh dan udaranya yang sejuk. Peserta dari Kabupaten Bandung bisa belajar lewat Privat Home Visit tanpa perlu ke pusat kota, atau lewat kelas online.",
  // Kabupaten Bandung Barat
  "32.17":
    "Kabupaten Bandung Barat, dengan ibu kota Ngamprah, dibentuk pada 2007 sebagai pemekaran Kabupaten Bandung. Wilayahnya mencakup kawasan Lembang, Padalarang, dan Cililin. Peserta dari Bandung Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kabupaten Sumedang
  "32.11":
    "Kabupaten Sumedang dikenal dengan tahu Sumedang dan kawasan pendidikan Jatinangor, tempat kampus IPDN, Unpad, dan ITB Jatinangor berada. IPDN adalah lembaga pendidikan kedinasan di bawah Kementerian Dalam Negeri yang mendidik kader pemerintahan. Peserta dari Sumedang bisa menyiapkan seleksi lewat Privat Home Visit atau kelas online Akademi ASN.",
  // Kabupaten Bogor
  "32.01":
    "Kabupaten Bogor, dengan ibu kota Cibinong, mengelilingi Kota Bogor dan menjadi wilayah penyangga Jakarta. Wilayahnya mencakup sebagian kawasan Puncak, seperti Cisarua dan Megamendung. Privat Home Visit dan kelas online Akademi ASN membantu Anda belajar sesuai jadwal tanpa perlu menempuh perjalanan jauh.",
  // Kota Bogor
  "32.71":
    "Kota Bogor dijuluki Kota Hujan dan menjadi lokasi Kebun Raya Bogor serta Istana Kepresidenan Bogor. Kota ini terhubung dengan Jakarta lewat KRL Commuter Line Bogor. Peserta dari Kota Bogor bisa belajar lewat Privat Home Visit atau kelas online di sela kesibukan harian.",
  // Kabupaten Cianjur
  "32.03":
    "Kabupaten Cianjur dikenal dengan beras Pandan Wangi, dan wilayahnya membentang dari kawasan Puncak di Cipanas hingga pesisir Samudra Hindia di selatan. Wilayah yang luas membuat jarak ke pusat kota tidak selalu dekat. Privat Home Visit Akademi ASN mendatangkan tutor ke rumah Anda, dan kelas online bisa diikuti dari mana saja di Cianjur.",
  // Kabupaten Bekasi
  "32.16":
    "Kabupaten Bekasi, dengan pusat pemerintahan di Cikarang Pusat, dikenal sebagai salah satu kawasan industri terbesar di Indonesia, dengan kawasan seperti Jababeka dan MM2100. Bagi Anda yang bekerja dengan jadwal padat, Privat Home Visit dan kelas online Akademi ASN memungkinkan persiapan seleksi di luar jam kerja.",
  // Kota Bekasi
  "32.75":
    "Kota Bekasi berbatasan langsung dengan Jakarta Timur di sebelah barat dan menjadi bagian dari kawasan metropolitan Jabodetabek. Tutor Privat Home Visit Akademi ASN bisa datang ke rumah Anda di Bekasi, atau Anda bisa ikut kelas online sesuai jadwal Anda.",
  // Kota Depok
  "32.76":
    "Kota Depok adalah lokasi kampus utama Universitas Indonesia dan terhubung dengan Jakarta lewat KRL Commuter Line Bogor. Peserta dari Depok bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // DKI Jakarta
  "31": "Jakarta terbagi atas lima kota administrasi dan satu kabupaten administrasi, yaitu Kepulauan Seribu, dan merupakan provinsi dengan kepadatan penduduk tertinggi di Indonesia. Di wilayah ini berdiri Monas, Istana Merdeka, dan Pelabuhan Tanjung Priok. Peserta dari seluruh Jakarta bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Jakarta Pusat
  "31.71":
    "Jakarta Pusat adalah lokasi Monumen Nasional di Kecamatan Gambir, Istana Merdeka, dan Balai Kota Jakarta di Jalan Medan Merdeka Selatan. Kawasan Gambir juga dikelilingi berbagai kantor kementerian dan lembaga nasional. Tutor Privat Home Visit Akademi ASN bisa datang ke rumah atau kantor Anda di Jakarta Pusat, atau Anda bisa ikut kelas online.",
  // Kota Jakarta Utara
  "31.72":
    "Jakarta Utara adalah lokasi Pelabuhan Tanjung Priok, pelabuhan terbesar dan tersibuk di Indonesia, serta kawasan wisata Taman Impian Jaya Ancol. Peserta dari Jakarta Utara bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit di rumah atau kantor, atau lewat kelas online.",
  // Kota Jakarta Barat
  "31.73":
    "Jakarta Barat adalah lokasi kawasan Kota Tua dengan Museum Fatahillah di Kecamatan Taman Sari. Di Kecamatan Grogol Petamburan terdapat kampus Universitas Trisakti dan Universitas Tarumanagara. Peserta dari Jakarta Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Jakarta Selatan
  "31.74":
    "Jakarta Selatan adalah lokasi kawasan bisnis Sudirman Central Business District (SCBD) di Kebayoran Baru dan Taman Margasatwa Ragunan di Pasar Minggu. Tutor Privat Home Visit Akademi ASN bisa datang ke rumah atau kantor Anda di Jakarta Selatan, sehingga persiapan seleksi bisa berjalan di sela jam kerja. Kelas online juga tersedia.",
  // Kota Jakarta Timur
  "31.75":
    "Jakarta Timur adalah wilayah terluas di Jakarta dan lokasi Bandar Udara Halim Perdanakusuma serta Taman Mini Indonesia Indah. Peserta dari Jakarta Timur bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit di rumah atau lewat kelas online.",
  // Kabupaten Kepulauan Seribu
  "31.01":
    "Kepulauan Seribu adalah satu-satunya kabupaten administrasi di Jakarta, berupa gugusan pulau di Teluk Jakarta dengan pusat pemerintahan di Pulau Pramuka. Kelas online Akademi ASN bisa diikuti dari pulau mana pun di Kepulauan Seribu, dan Privat Home Visit mendatangkan tutor ke rumah Anda.",
  // Banten
  "36": "Provinsi Banten dibentuk pada tahun 2000 sebagai pemekaran dari Jawa Barat, dengan ibu kota di Serang. Wilayahnya terdiri atas empat kota, yaitu Serang, Tangerang, Cilegon, dan Tangerang Selatan, serta empat kabupaten. Peserta dari seluruh Banten bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kabupaten Tangerang
  "36.03":
    "Kabupaten Tangerang, dengan pusat pemerintahan di Tigaraksa, membentang dari pesisir Laut Jawa di utara hingga berbatasan dengan Kabupaten Bogor di selatan. Kabupaten ini menjadi bagian dari wilayah metropolitan Jabodetabek. Privat Home Visit dan kelas online Akademi ASN membantu Anda belajar sesuai jadwal tanpa perlu menempuh perjalanan jauh.",
  // Kota Tangerang
  "36.71":
    "Kota Tangerang dibentuk pada tahun 1993 dan menjadi lokasi Bandar Udara Internasional Soekarno–Hatta di Kecamatan Benda, pintu gerbang utama penerbangan internasional Indonesia. Peserta dari Kota Tangerang bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Tangerang Selatan
  "36.74":
    "Kota Tangerang Selatan dibentuk pada tahun 2008 sebagai pemekaran dari Kabupaten Tangerang, dengan pusat pemerintahan di Ciputat. Kota ini menjadi lokasi kampus UIN Syarif Hidayatullah Jakarta dan Universitas Terbuka. Peserta dari Tangerang Selatan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Jawa Tengah
  "33": "Jawa Tengah beribu kota di Semarang dan terdiri atas 29 kabupaten dan 6 kota. Provinsi ini adalah lokasi Candi Borobudur di Kabupaten Magelang, monumen Buddha terbesar di dunia. Peserta dari seluruh Jawa Tengah bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Semarang
  "33.74":
    "Kota Semarang adalah ibu kota Jawa Tengah dan lokasi Lawang Sewu, bangunan peninggalan Belanda yang kini menjadi museum. Kota ini dilayani Pelabuhan Tanjung Emas serta menjadi lokasi kampus Universitas Diponegoro di Tembalang. Peserta dari Semarang bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kabupaten Semarang
  "33.22":
    "Kabupaten Semarang, dengan ibu kota Ungaran, berbatasan langsung dengan Kota Semarang. Kabupaten ini dikenal dengan Candi Gedong Songo di Bandungan, Rawa Pening, dan Museum Kereta Api Ambarawa. Peserta dari Kabupaten Semarang bisa belajar lewat Privat Home Visit tanpa perlu ke kota, atau lewat kelas online.",
  // Kota Surakarta
  "33.72":
    "Kota Surakarta, atau Solo, adalah lokasi Keraton Kasunanan Surakarta dan Pura Mangkunegaran, serta sentra batik Kampung Batik Laweyan. Kampus Universitas Sebelas Maret juga berada di Kentingan, Jebres. Peserta dari Solo bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Jawa Timur
  "35": "Jawa Timur beribu kota di Surabaya dan terdiri atas 29 kabupaten dan 9 kota, jumlah kabupaten/kota terbanyak di Indonesia. Provinsi ini adalah lokasi Taman Nasional Bromo Tengger Semeru dengan Gunung Semeru, gunung tertinggi di Pulau Jawa. Peserta dari seluruh Jawa Timur bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Surabaya
  "35.78":
    "Kota Surabaya, ibu kota Jawa Timur, dijuluki Kota Pahlawan karena Pertempuran 10 November 1945. Kota ini dilayani Pelabuhan Tanjung Perak dan menjadi lokasi kampus seperti Universitas Airlangga dan Institut Teknologi Sepuluh Nopember. Peserta dari Surabaya bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Malang
  "35.73":
    "Kota Malang dikenal sebagai salah satu kota pendidikan terpenting di Indonesia, dengan kampus seperti Universitas Brawijaya dan Universitas Negeri Malang di Kecamatan Lowokwaru. Peserta dari Kota Malang bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online di sela kegiatan kuliah maupun kerja.",
  // Kabupaten Malang
  "35.07":
    "Kabupaten Malang, dengan ibu kota Kepanjen, adalah kabupaten terluas kedua di Jawa Timur setelah Banyuwangi. Wilayahnya membentang hingga pesisir Samudra Hindia dengan pantai seperti Balekambang, dan sebagian wilayahnya masuk Taman Nasional Bromo Tengger Semeru. Privat Home Visit Akademi ASN mendatangkan tutor ke rumah Anda, dan kelas online bisa diikuti dari mana saja.",
  // Kabupaten Jember
  "35.09":
    "Kabupaten Jember, bagian dari kawasan Tapal Kuda Jawa Timur, dikenal sebagai salah satu sentra tembakau terbesar di Indonesia dan tuan rumah Jember Fashion Carnaval yang digelar setiap tahun sejak 2003. Peserta dari Jember bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sumatera Utara
  "12": "Sumatera Utara beribu kota di Medan dan terdiri atas 25 kabupaten dan 8 kota. Provinsi ini adalah lokasi Danau Toba, danau terbesar di Indonesia dan danau vulkanik terbesar di dunia, yang diakui sebagai UNESCO Global Geopark sejak 2020. Peserta dari seluruh Sumatera Utara bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Medan
  "12.71":
    "Kota Medan adalah ibu kota Sumatera Utara dan lokasi Istana Maimun, kampus Universitas Sumatera Utara di Padang Bulan, serta Pelabuhan Belawan, pelabuhan utama di Pulau Sumatra. Peserta dari Medan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sumatera Selatan
  "16": "Sumatera Selatan beribu kota di Palembang dan terdiri atas 13 kabupaten dan 4 kota. Sungai Musi, sungai terpanjang kedua di Pulau Sumatra, mengalir melintasi provinsi ini hingga membelah Kota Palembang. Peserta dari seluruh Sumatera Selatan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kota Palembang
  "16.71":
    "Kota Palembang, ibu kota Sumatera Selatan, disebut sebagai kota tertua di Indonesia berdasarkan Prasasti Kedukan Bukit peninggalan Kerajaan Sriwijaya dari tahun 682 Masehi. Ikon kotanya, Jembatan Ampera, membentang di atas Sungai Musi. Peserta dari Palembang bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kepulauan Riau
  "21": "Provinsi Kepulauan Riau dibentuk pada tahun 2002 sebagai pemekaran dari Provinsi Riau, dengan ibu kota di Tanjungpinang. Sekitar 96% wilayahnya berupa lautan dengan ribuan pulau, dan provinsi ini berbatasan dengan Singapura, Malaysia, Vietnam, dan Kamboja. Kelas online Akademi ASN bisa diikuti dari pulau mana pun, dan Privat Home Visit mendatangkan tutor ke rumah Anda.",
  // Kota Batam
  "21.71":
    "Kota Batam ditetapkan sebagai Kawasan Perdagangan Bebas dan Pelabuhan Bebas dan terletak sekitar 20 km dari Singapura di jalur Selat Malaka. Ikonnya, Jembatan Barelang, menghubungkan Pulau Batam, Rempang, dan Galang. Peserta dari Batam bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Aceh
  "11": "Aceh beribu kota di Banda Aceh dan terdiri atas 18 kabupaten dan 5 kota. Menurut UU Nomor 11 Tahun 2006 tentang Pemerintahan Aceh, Aceh adalah satuan pemerintahan daerah yang bersifat khusus atau istimewa, termasuk dalam pelaksanaan syariat Islam bagi pemeluknya. Peserta dari seluruh Aceh bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sumatera Barat
  "13": "Sumatera Barat beribu kota di Padang dan terdiri atas 12 kabupaten dan 7 kota. Provinsi ini adalah rumah bagi etnis Minangkabau dan Mentawai, dan di wilayah ini berdiri Jam Gadang, ikon Kota Bukittinggi. Peserta dari seluruh Sumatera Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Riau
  "14": "Riau beribu kota di Pekanbaru dan terdiri atas 10 kabupaten dan 2 kota. Provinsi ini dikenal dengan sumber daya minyak bumi dan perkebunan kelapa sawit, serta peninggalan Kesultanan Siak berupa Istana Siak Sri Indrapura. Peserta dari seluruh Riau bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Jambi
  "15": "Jambi beribu kota di Kota Jambi dan terdiri atas 9 kabupaten dan 2 kota, dilintasi Sungai Batanghari, sungai terpanjang di Pulau Sumatra. Di tepi sungai ini terdapat Kawasan Cagar Budaya Nasional Muaro Jambi, kompleks percandian seluas sekitar 3.981 hektare. Peserta dari seluruh Jambi bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Bengkulu
  "17": "Bengkulu beribu kota di Kota Bengkulu dan terdiri atas 9 kabupaten dan 1 kota. Provinsi yang dijuluki Bumi Rafflesia ini menyimpan Benteng Marlborough peninggalan Inggris dan Rumah Pengasingan Bung Karno. Peserta dari seluruh Bengkulu bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Lampung
  "18": "Lampung beribu kota di Bandar Lampung dan terdiri atas 13 kabupaten dan 2 kota. Provinsi di ujung selatan Sumatra ini terhubung dengan Pulau Jawa lewat Pelabuhan Bakauheni, dan menjadi lokasi Taman Nasional Way Kambas, pusat konservasi gajah Sumatra. Peserta dari seluruh Lampung bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kepulauan Bangka Belitung
  "19": "Kepulauan Bangka Belitung dibentuk pada tahun 2000 sebagai pemekaran dari Sumatera Selatan, dengan ibu kota di Pangkalpinang. Provinsi yang terdiri atas Pulau Bangka, Pulau Belitung, dan pulau-pulau kecil ini sudah lebih dari tiga abad dikenal sebagai penghasil timah. Peserta dari Bangka Belitung bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Bali
  "51": "Bali beribu kota di Denpasar dan terdiri atas 8 kabupaten dan 1 kota. Sistem irigasi subak di Bali, yang mencerminkan filosofi Tri Hita Karana, ditetapkan UNESCO sebagai Warisan Budaya Dunia pada tahun 2012. Peserta dari seluruh Bali bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Nusa Tenggara Barat
  "52": "Nusa Tenggara Barat beribu kota di Mataram dan terdiri atas 8 kabupaten dan 2 kota, dengan dua pulau utama, Lombok dan Sumbawa. Di provinsi ini terdapat Taman Nasional Gunung Rinjani dan Taman Nasional Gunung Tambora. Peserta dari seluruh NTB bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Nusa Tenggara Timur
  "53": "Nusa Tenggara Timur beribu kota di Kupang dan terdiri atas 21 kabupaten dan 1 kota, dengan pulau utama Flores, Sumba, dan bagian barat Pulau Timor. Provinsi ini adalah lokasi Taman Nasional Komodo, yang ditetapkan UNESCO sebagai Situs Warisan Dunia pada tahun 1991. Peserta dari seluruh NTT bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kalimantan Barat
  "61": "Kalimantan Barat beribu kota di Pontianak dan terdiri atas 12 kabupaten dan 2 kota. Garis khatulistiwa melintas tepat di atas Kota Pontianak, dan Sungai Kapuas di provinsi ini adalah sungai terpanjang di Indonesia. Peserta dari seluruh Kalimantan Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kalimantan Tengah
  "62": "Kalimantan Tengah beribu kota di Palangka Raya dan terdiri atas 13 kabupaten dan 1 kota. Provinsi ini adalah lokasi Taman Nasional Tanjung Puting, kawasan konservasi orangutan yang dikenal dunia. Peserta dari seluruh Kalimantan Tengah bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kalimantan Selatan
  "63": "Kalimantan Selatan terdiri atas 11 kabupaten dan 2 kota, dan sejak berlakunya UU Nomor 8 Tahun 2022 ibu kotanya berkedudukan di Kota Banjarbaru. Kota lain di provinsi ini adalah Banjarmasin. Peserta dari seluruh Kalimantan Selatan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kalimantan Timur
  "64": "Kalimantan Timur beribu kota di Samarinda dan terdiri atas 7 kabupaten dan 3 kota, termasuk Balikpapan dan Bontang. Wilayahnya dahulu menjadi tempat berdirinya Kerajaan Kutai dan Kesultanan Kutai Kartanegara. Peserta dari seluruh Kalimantan Timur bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Kalimantan Utara
  "65": "Kalimantan Utara dibentuk pada tahun 2012 sebagai pemekaran dari Kalimantan Timur, dengan ibu kota di Tanjung Selor, Kabupaten Bulungan. Provinsi yang terdiri atas 4 kabupaten dan Kota Tarakan ini berbatasan langsung dengan Sabah dan Sarawak, Malaysia. Peserta dari seluruh Kalimantan Utara bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sulawesi Utara
  "71": "Sulawesi Utara beribu kota di Manado dan terdiri atas 11 kabupaten dan 4 kota. Provinsi di ujung Pulau Sulawesi ini berbatasan dengan Filipina di sebelah utara, dan Pulau Bunaken menjadi salah satu tujuan wisatanya. Peserta dari seluruh Sulawesi Utara bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sulawesi Tengah
  "72": "Sulawesi Tengah beribu kota di Palu dan terdiri atas 12 kabupaten dan 1 kota. Provinsi ini adalah lokasi Taman Nasional Lore Lindu. Peserta dari seluruh Sulawesi Tengah bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sulawesi Selatan
  "73": "Sulawesi Selatan beribu kota di Makassar dan terdiri atas 21 kabupaten dan 3 kota, termasuk Kabupaten Tana Toraja dan Kabupaten Toraja Utara. Penduduknya antara lain suku Makassar, Bugis, dan Toraja. Peserta dari seluruh Sulawesi Selatan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sulawesi Tenggara
  "74": "Sulawesi Tenggara beribu kota di Kendari dan terdiri atas 15 kabupaten dan 2 kota, yaitu Kendari dan Baubau. Wilayahnya mencakup antara lain Kabupaten Buton dan Kabupaten Wakatobi. Peserta dari seluruh Sulawesi Tenggara bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Gorontalo
  "75": "Provinsi Gorontalo dibentuk pada tahun 2000 sebagai pemekaran dari Sulawesi Utara, dengan ibu kota di Kota Gorontalo. Kini provinsi ini terdiri atas 5 kabupaten dan 1 kota, dan berbatasan dengan Teluk Tomini di sebelah selatan. Peserta dari seluruh Gorontalo bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Sulawesi Barat
  "76": "Provinsi Sulawesi Barat dibentuk pada tahun 2004 sebagai pemekaran dari Sulawesi Selatan, dengan ibu kota di Mamuju. Pembentukan provinsi ini lahir dari keinginan masyarakat Mandar untuk memiliki provinsi sendiri. Peserta dari seluruh Sulawesi Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Maluku
  "81": "Maluku beribu kota di Ambon dan terdiri atas 9 kabupaten dan 2 kota. Kepulauan Banda di provinsi ini adalah asal tanaman pala, rempah yang sejak berabad-abad lalu diperdagangkan hingga Asia dan Eropa. Peserta dari seluruh Maluku bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Maluku Utara
  "82": "Maluku Utara dibentuk pada tahun 1999 sebagai pemekaran dari Provinsi Maluku. Ibu kotanya dipindahkan dari Ternate ke Sofifi di Pulau Halmahera pada 2010, dan provinsi ini dikenal sebagai penghasil cengkih dan pala. Peserta dari seluruh Maluku Utara bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Papua
  "91": "Provinsi Papua beribu kota di Jayapura. Pada tahun 2022, sebagian wilayahnya dimekarkan menjadi Provinsi Papua Selatan, Papua Tengah, dan Papua Pegunungan. Peserta dari seluruh Papua bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Papua Barat
  "92": "Papua Barat beribu kota di Manokwari dan kini terdiri atas 7 kabupaten, termasuk Fakfak, Kaimana, dan Teluk Bintuni. Pada tahun 2022, sebagian wilayahnya dimekarkan menjadi Provinsi Papua Barat Daya. Peserta dari seluruh Papua Barat bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Papua Selatan
  "93": "Provinsi Papua Selatan dibentuk pada tahun 2022 dengan ibu kota di Kabupaten Merauke. Provinsi ini terdiri atas empat kabupaten: Merauke, Boven Digoel, Mappi, dan Asmat. Peserta dari seluruh Papua Selatan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Papua Tengah
  "94": "Provinsi Papua Tengah dibentuk pada tahun 2022 dengan ibu kota di Kabupaten Nabire. Provinsi ini terdiri atas delapan kabupaten, di antaranya Nabire, Mimika, Paniai, dan Puncak Jaya. Peserta dari seluruh Papua Tengah bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Papua Pegunungan
  "95": "Provinsi Papua Pegunungan dibentuk pada tahun 2022 dengan ibu kota di Kabupaten Jayawijaya. Provinsi yang terdiri atas delapan kabupaten ini berbatasan dengan Papua Nugini di sebelah timur. Peserta dari seluruh Papua Pegunungan bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
  // Papua Barat Daya
  "96": "Provinsi Papua Barat Daya dibentuk pada tahun 2022 sebagai pemekaran dari Papua Barat, dengan ibu kota di Kota Sorong. Provinsi ini terdiri atas lima kabupaten dan satu kota, termasuk Kabupaten Raja Ampat. Peserta dari seluruh Papua Barat Daya bisa belajar bersama tutor Akademi ASN lewat Privat Home Visit atau kelas online.",
};

const baseText = (
  { region, ancestors }: ResolvedLocation,
  texts: Record<string, string>,
) =>
  texts[region.kode] ??
  `${region.nama} berada di ${ancestors.at(-1)?.nama ?? "Indonesia"}. Peserta dari ${region.nama} bisa belajar bersama Akademi ASN lewat kelas online atau les privat dengan tutor yang datang ke rumah.`;

// Track sentences follow each page's base text on every location, down to
// villages, so they only state what is true everywhere: the test content.
// Sources: PermenPANRB 27/2021 (SKD), PP 49/2018 and BKN PPPK materi pokok
// 2024 (PPPK), and RBB 2025/2026 test outlines (TKD and AKHLAK in both).
const introLocation =
  (track: string, trackSentence: (nama: string) => string) =>
  (location: ResolvedLocation, texts = introTexts) =>
    ({
      title: `${track} di ${location.region.nama}`,
      description: `${baseText(location, texts)} ${trackSentence(location.region.nama)}`,
    }) satisfies IntroProps;

export const introHomeLocation = introLocation(
  "Bimbel CPNS PPPK BUMN",
  (nama) =>
    `Bagi peserta dari ${nama}, SKD CPNS terdiri atas TWK, TIU, dan TKP; seleksi PPPK menguji kompetensi teknis, manajerial, sosial kultural, dan wawancara; sedangkan Rekrutmen Bersama BUMN menguji kemampuan dasar dan nilai inti AKHLAK.`,
);

export const introCpnsLocation = introLocation(
  "Bimbel CPNS",
  (nama) =>
    `Peserta CPNS dari ${nama} menghadapi SKD berbasis CAT yang terdiri atas Tes Wawasan Kebangsaan (TWK), Tes Intelegensia Umum (TIU), dan Tes Karakteristik Pribadi (TKP).`,
);

export const introPppkLocation = introLocation(
  "Bimbel PPPK",
  (nama) =>
    `Peserta PPPK dari ${nama} menghadapi seleksi kompetensi teknis, kompetensi manajerial, kompetensi sosial kultural, dan wawancara.`,
);

export const introBumnLocation = introLocation(
  "Bimbel BUMN",
  (nama) =>
    `Peserta Rekrutmen Bersama BUMN dari ${nama} perlu menyiapkan Tes Kemampuan Dasar (TKD) dan tes nilai inti AKHLAK yang menjadi budaya kerja BUMN.`,
);
