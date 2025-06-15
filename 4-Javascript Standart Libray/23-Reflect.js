
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
