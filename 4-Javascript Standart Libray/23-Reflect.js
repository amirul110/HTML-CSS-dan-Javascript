
/*
Reflect adalah objek bantu (utility) di JavaScript yang digunakan untuk melakukan operasi terhadap objek secara fungsional — bukan dengan operator, tapi dengan fungsi.

reflect merupakan object , fungsi2 statis untuk mengakses,mnyetel,memanipulasi object

berupa object yang mempunyai fungsi2 statis seperti .has untuk mengecek apakah ada  property ini di object? kembalikan boolean.set untuk merubah nilai , get untuk dapatan data berdarasran propertynya
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
