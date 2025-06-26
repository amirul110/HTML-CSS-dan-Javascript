/*

Tujuannya agar data tersebut bisa ditransmisikan melalui media yang hanya mendukung teks (seperti email, URL, JSON, XML, dll).
Prinsip dasar:

    Ambil 3 karakter (3 byte = 24 bit)

    Potong menjadi 4 blok 6-bit

    Setiap 6-bit dipetakan ke 1 karakter ASCII khusus dari tabel Base64 (total 64 karakter)

    Jika sisa karakter kurang dari 3, tambahkan padding =

*/

const original = "eko kurniawan kanedy"

const hasilEncoded = btoa(original);
console.info(hasilEncoded);

const hasilDecoded = atob(hasilEncoded);
console.info(hasilDecoded)
