//Regexp termasuk case sensitive
//  exec() = dapatkan 1 data  yang sama dengan pola
// match() = kembalikan semua data yang sama dengan pola
//  test() =  hasilkan boolean,apakah ada data tersebut atau tidak

// akses modifier
// g = mencetak semua data
// i = merubah regex menjadi tidak case sensitif
// m = fokus perbedaan baris, tambahkan ^ diawal pola dan $ diakhir pola
const nama = `kurniawan Eko kanedy 
Eko 
eko mdekoccc
 eko`;
const regex = /eko/gi

let result = nama.match(regex); // [ 'Eko', 'Eko', 'eko', 'eko', 'eko' ] , kembalikan banyak data
console.info(result);

let test = regex.test(nama); // true ,
console.info(test)

let bunga = regex.exec(nama); // hanya kembalikan 1 data
console.info(bunga); /* [
  'Eko',
  index: 22,
  input: 'kurniawan Eko kanedy \nEko \neko mdekoccc\n eko',
  groups: undefined
]
  */

const str = `eko
aku`;

const motor = /^aku$/m; // [ 'aku' ]
console.log(str.match(motor)); // [ 'aku' ]
