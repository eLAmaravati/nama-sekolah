# Sakooola - Praktik Membuat Web dari Public API

Web ini dibuat dalam rangka praktik membuat web dari public API. Sumber tutorial dari Web Programming Unpas (WPU).

## Live Website

Live website bisa diakses di sini: [https://elamaravati.github.io/nama-sekolah/](https://elamaravati.github.io/nama-sekolah/)

## Catatan

_Goal_-nya cukup 'sederhana':

- Membuat sebuah website berisi daftar nama sekolah di Indonesia yang datanya diambil dari public API.
- Dilengkapi dengan fitur filter per provinsi dan kabupaten/kota.
- Dilengkapi dengan fitur filter per jenjang (SD, SMP, SMU, SMK).
- Dilengkapi dengan fitur pencarian nama sekolah.

Tapi ternyata, praktiknya TIDAK SEDERHANA. Ada beberapa hambatan yang saya hadapi:

- Datanya sendiri sebanyak 215.372 (dua ratus ribu!) sekolah.
- Data sebanyak itu tentu tidak bisa ditampilkan dalam satu halaman dalam 1 kali _load_, itu sebabnya base URL-nya memakai _pagination_. Masalahnya, saya belum bisa membuat _pagination_ dan menampilkan halaman yang sesuai dengan jQuery dari base URL tersebut.
- Public API-nya sendiri tidak menyediakan key untuk filter per provinsi/kota. Saya sudah mencoba menggunakan _search_ dan tidak berhasil.
- Hanya ada URL untuk filter per jenjang dan fitur pencarian nama sekolah.

_So, i think_, karena "ilmu kanuragan" saya baru sampai segini, saya kira ini sudah cukup.

**P.S. Saya juga membuat web yang sama versi cURL(PHP). Sekadar ingin tahu pendekatan mana yang lebih baik.**

## Sumber

- [Tutorial public API](https://www.youtube.com/watch?v=vQJJ_K1JbEA&list=PLFIM0718LjIW7AsIbnhFg15t9yx4H-sQ0&index=1)
- [API Data Sekolah](https://github.com/wanrabbae/api-sekolah-indonesia)

## Dibuat dengan

- jQuery (in JavaScript we trust!)
- Ajax
- Bootstrap (for the sake of supaya gak usah ngoding CSS)
- Postman
