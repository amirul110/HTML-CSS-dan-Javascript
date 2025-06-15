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



const mabur = "motor mabor nduwur";
const regexpLastWord = /\w+$/; // mencari nilai terakhir , karena ada $

console.log(mabur.match(regexpLastWord)); // [ 'nduwur', index: 12, input: 'motor mabor nduwur', groups: undefined ]

const regexpWord = /\b\w+\b/g; // Regex ini memecah string menjadi semua kata berbasis batas kata.
console.log(mabur.match(regexpWord)); // [ 'motor', 'mabor', 'nduwur' ]

const regexpFoxQuality = /\w+(?= mabor)/ //mencari kalimat sebelum mabor dan ada spasi
console.log(mabur.match(regexpFoxQuality)); // [ 'motor', index: 0, input: 'motor mabor nduwur', groups: undefined ]


// mendapatkan index secara detail gunakan matchAll
for (const m of mabur.matchAll(regexpWord)){
  console.log(m[0], 'mulai=', m.index, 'akhir=', m.index + m[0].length - 1)
} /* motor mulai= 0 akhir= 4
mabor mulai= 6 akhir= 10
nduwur mulai= 12 akhir= 17
*/

const spesifik = /\bmabor\b/; // mencari nilai mabor, tanpa spasi 
console.log(mabur.match(spesifik))  // [ 'mabor', index: 6, input: 'motor mabor nduwur', groups: undefined ]

// Character Classes : membedakan antara huruf dan angka
const chessStory = "He played z9 the King in a8 and she moved her Queen in c2.";
const regexpCoordinates = /\w\d/g; // mencari pola huruf kombinasi dengan angka tanpa spasi
console.log(chessStory.match(regexpCoordinates)); // [ 'z9', 'a8', 'c2' ]

const cocokPersis = [...chessStory.matchAll(/(\w)(\d)/g)] // memisahkan huruf dan angka
console.log(cocokPersis.map(k => [k[1], k[2]])) // [ [ 'z', '9' ], [ 'a', '8' ], [ 'c', '2' ] ]

const moods = "happy 🙂 , confused 😕 , sad 😢" ;
const regexpEmoticons = /[\u{1F600}-\u{1F64F}]/gu; // mencari emoji dengan unicode dengan rentang tertentu
console.log(moods.match(regexpEmoticons)); // [ '🙂', '😕', '😢' ]


//
// group(...) , mengelompokkan beberapa karakter menjadi satu unit

const text = "ha HAHAHAH hahaha";
const hasil = text.match(/(ha)+/gi); // mencari ha muncul satu atau lebih berturut turut hiraukan case sensitif
console.log(hasil); // [ 'ha', 'HAHAHA', 'hahaha' ]

// Range
const coba = "Password12!";
const hasil1 = coba.match(/[A-Za-z0-1]/g); // menyatakan rentang huruf dan angka
console.log(hasil1); /* [
  'P', 'a', 's',
  's', 'w', 'o',
  'r', 'd', '1'
]
  */


//Quantifiers
const coba1 = "bb bb bbb bbbbb BBBBBbbbbbbbbbbb";
const hasil2 = coba1.match(/b{2,3}/gi); // mencari b dengan panjang karaketer 2 sampai max 3
console.log(hasil2)  // jika ada karakter b lebih dari 3, maka akan di potong ,misal BBBBBbbbbbbbbbbb dipotong2 menjadi max 3 karaketer b
/*
[
  'bb',  'bb',  'bbb',
  'bbb', 'bb',  'BBB',
  'BBb', 'bbb', 'bbb',
  'bbb'
]
  */


//
