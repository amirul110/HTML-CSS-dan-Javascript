/*

gunakan new Date (y,m,d) => bulan pada m dimulai dari 0 (januari),
gunakan new Parse (y, m , d ) => bulan m dimulai dari 1 (Januari)
*/

const date10 = new Date();
console.info(date10); // 2025-06-08T23:43:40.330Z , Z = Zona waktu UTC

const date20 = new Date(2025,5,9); // menampilkan versi UTC berdasarkan inputan parameter
console.info(date20); // 2025-06-08T17:00:00.000Z

const date30 = new Date(2025,5,9, 4,2,2,9)
console.info(date30); // 2025-06-08T21:02:02.009Z

const date40 = new Date();

// Waktu lokal dalam bentuk string
console.info(date40.toString()) // Mon Jun 09 2025 06:37:34 GMT+0700 (Western Indonesia Time)

const date50 = new Date()

// // Lokal + sesuai pengaturan bahasa/negara
console.info(date50.toLocaleString()) // 6/9/2025, 06:43:40, bulan  , tanngal, tahun


// Unix Timestamp
const timestamp = Date.now();
console.info(timestamp); // 1749426560601 berupa mili detik  sejak 1 Januari 1970

const dateUnix = new Date(timestamp); // Mengubah timestamp jadi tanggal yang bisa dibaca gunakan zona UTC
console.info(dateUnix); // 2025-06-08T23:49:20.601Z


// mengambil unix timestamp dari object Date
console.info(dateUnix.getTime()); // 1749426560601


// Date parse mendukung ISO 8601
const parseTimestamp = Date.parse("2025-06-09T06:59:18.128+07:00"); // 1749427158128 // Zona UTC + 7
console.info(parseTimestamp);

const parseDate = new Date(parseTimestamp); // 2025-06-08T23:59:18.128Z , gunakan format UTC
console.info(parseDate)

// Date Getter dan Setter
const date = new Date();

// setter mengubah tahun, gunakan setFullYear
date.setFullYear(2026);

// getter mengambil informasi waktu dari object date , termasuk perubahan karna setter
console.info(date.getFullYear()); // 2026
console.info(date.getMonth()); // 5
console.info(date.getDate()); // 9
console.info(date.getHours()); // 7
console.info(date.getMinutes()); // 27
console.info(date.getSeconds()); // 14
console.info(date.getMilliseconds()); // 946 milidetik
console.info(date.getTimezoneOffset()) // -420 menit , merupakan selisih zona waktu UTC dengan zona waktu local
