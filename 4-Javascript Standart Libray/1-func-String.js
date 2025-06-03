// func Number untuk konversi ke tipe data Number
// jika tidka bisa dikonversi, maka hasilnya NaN

const input = "12345"
const angka = Number(input);

console.log(angka);

// number static properties
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308  , maximal
console.log(Number.MIN_VALUE) // 5e-324 , minimal


// number static method
console.log(Number.isInteger(angka)); // true,  untuk cek apakah berisi integer
console.log(Number.isNaN(angka)); // false, karena bukan berisi NaN

// Number instance method
const value = Number(10000)

console.log(value.toString(2)) // konversi ke biner
console.log(value.toLocaleString("id-ID")) // 10.000 , mengubah menjadi format angka local (INDONESIA)
