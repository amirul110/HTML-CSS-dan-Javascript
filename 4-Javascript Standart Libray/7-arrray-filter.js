const numbers = [1,2,3,4,5,6,8,9,10]

console.info(numbers.filter(makan => makan % 2 === 1)) // mengembalikan  kumpulan nilai (array) jika nilai pada array modulo 2 = 1 , ganjil
console.info(numbers.filter(koi => koi % 2 === 0)) // mengembalikan kumpulan nilai (array) jika nilai pada array modulo 2 = 0, genap

// array transform
const names = "Eko kurniawan kanedy" .split(" ")
console.info(names.map(value => value.toUpperCase()))

const angka = [1,2,3,4,5,6,7,8,9,10];
console.info(angka.reduce((result, nilai) => result + nilai,1)) // 56
/*
Step 1: result = 1, nilai = 1 → result + nilai = 2
Step 2: result = 2, nilai = 2 → 4
Step 3: result = 4, nilai = 3 → 7
step 4 : result = 7 , nilai = 4 -> 11
step 5 : result = 11 , nilai = 5 -> 16
step 6: result = 16, nilai = 6 -> 22
step 7 : result = 22, nilai = 7 -> 29
step 8: result = 29, nilai = 8 -> 37
step 9: result = 31, nilai = 9 -> 46
step 10: result = 46, nilai = 10 -> 56
...
Step akhir: result = 46, nilai = 10 → 56
*/

// dimulai dari kanan = 10,9,8,7,6,5,4,3,2,1 ke kiri
console.info(angka.reduceRight((result, nilai) => result + nilai )) // 55, karena tidak gunakan nilai awal

