/*
JavaScript membuang objek sementara (hasil autoboxing) segera setelah operasi selesai. 
Tidak ada durasi tertentu — benar-benar instan, hanya digunakan untuk satu baris kode itu saja.

*/


const nama = "Eko Kurniawan Khanedy" ;

console.log(nama.length); // 21  , property
console.info(nama.toLocaleLowerCase()); // eko kurniawan khanedy  , instance method
console.info(nama.toUpperCase()); // EKO KURNIAWAN KHANEDY
const a = " ddd dd dnd             "
console.log(a.trim()) // ddd dd dnd , menghapus spasi bagian kiri dan kanan saja,tengah tidka berubah

const pecah = nama.split(" ")
console.info(pecah); // [ 'Eko', 'Kurniawan', 'Khanedy' ] , instance method

console.info(nama) // Eko Kurniawan Khanedy  , nilai tidak berubah  
// instance method dan properties membuat data baru
