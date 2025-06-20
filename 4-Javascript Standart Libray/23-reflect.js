
/*
Reflect adalah objek bantu (utility) di JavaScript yang digunakan untuk melakukan operasi terhadap objek secara fungsional — bukan dengan operator, tapi dengan fungsi.


*/
const people = {};

Reflect.set(people, 'firstName','eko');
Reflect.set(people, 'lastName','kandey');

console.info(people); // { firstName: 'eko', lastName: 'kandey' }

console.info(Reflect.has(people, 'firstName')); // true
console.info(Reflect.has(people,'middleName')); // false

// get untuk dapatkan nilai nya
console.log(Reflect.get(people, 'firstName')); // eko
console.log(Reflect.get(people, "lastName")); // kandey


/*

Berikut penjelasan kode tersebut dengan bahasa yang mudah dipahami oleh pemula:

Kode ini memperkenalkan penggunaan objek Reflect di JavaScript. Reflect adalah kumpulan fungsi yang digunakan untuk memanipulasi objek dengan cara yang lebih terstruktur, bukan memakai operator biasa (seperti titik . atau kurung siku []), tapi memakai fungsi.

Penjelasan per baris:
1. Membuat objek kosong bernama people:
   const people = {};

2. Menambahkan properti (data) ke dalam objek people menggunakan fungsi Reflect.set:
   - Reflect.set(people, 'firstName','eko'); // Menambahkan properti firstName dengan nilai 'eko'
   - Reflect.set(people, 'lastName','kandey'); // Menambahkan properti lastName dengan nilai 'kandey'

3. Menampilkan isi objek people ke konsol:
   console.info(people); 
   // Hasil: { firstName: 'eko', lastName: 'kandey' }

4. Mengecek apakah objek people punya properti tertentu menggunakan Reflect.has:
   - console.info(Reflect.has(people, 'firstName')); // true, karena firstName memang ada
   - console.info(Reflect.has(people,'middleName')); // false, karena middleName tidak ada

5. Mengambil nilai properti dari objek people menggunakan Reflect.get:
   - console.log(Reflect.get(people, 'firstName')); // Hasil: 'eko'
   - console.log(Reflect.get(people, "lastName")); // Hasil: 'kandey'

Kesimpulan:
- Reflect.set digunakan untuk menambah/mengubah data pada objek.
- Reflect.has digunakan untuk memeriksa apakah properti ada di objek.
- Reflect.get digunakan untuk mengambil nilai dari objek.

Semua fungsi ini membuat manipulasi objek jadi lebih jelas dan mudah dibaca, terutama saat membuat kode yang dinamis atau bekerja dengan properti yang nama/isinya bisa berubah-ubah.
*/