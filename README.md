# Sakooolaaa - Praktik Membuat Web dari Public API

Web ini dibuat dalam rangka praktik

## Live Website

Live website bisa diakses di sini:

## Catatan

_Goal_-nya cukup 'sederhana':

- Membuat sebuah website berisi daftar nama sekolah di Indonesia yang datanya diambil dari public API.
- Dilengkapi dengan fitur filter per provinsi dan kabupaten/kota.
- Dilengkapi dengan fitur per jenjang (SD, SMP, SMU, SMK).
- Dilengkapi dengan fitur pencarian nama sekolah.

Tapi ternyata, praktiknya TIDAK SEDERHANA. Ada beberapa hambatan yang saya hadapi:

- Datanya sendiri sebanyak 215.372 (dua ratus ribu!) sekolah.
- Data sebanyak itu tentu tidak bisa ditampilkan dalam satu halaman dalam 1 kali _load_, itu sebabnya base URL-nya memakai _pagination_. Masalahnya, saya belum bisa membuat _pagination_ dan menampilkan halaman yang sesuai dengan jQuery dari base URL tersebut.
- Public API-nya sendiri tidak menyediakan key untuk filter per propinsi/kota. Saya sudah mencoba menggunakan search dan tidak berhasil.
- Hanya ada URL untuk filter per jenjang dan fitur pencarian nama sekolah.

_So, i think_, karena "ilmu kanuragan" saya baru sampai segini, saya kira ini sudah cukup.

P.S. Saya juga membuat web yang sama versi cURL(PHP). Sekadar ingin tahu pendekatan mana yang lebih baik.

## Sumber

- [Tutorial]
- [API Daftar Nama Sekolah]

## Dibuat dengan:

- jQuery
- Ajax
- Bootstrap (for the sake of supaya gak usah ngoding CSS)
- Postman
