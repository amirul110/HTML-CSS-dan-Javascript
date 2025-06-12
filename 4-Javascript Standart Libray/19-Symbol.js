// Symbol adlah tipe data primitif, 
// dengan 2 key yang sama akan hasilnya berbeda satu sama lain
// banyak digunakan untuk membuat key pada object
const firstName =  Symbol();
const lastName = Symbol();

const person = {};
person[firstName] = "Eko";
person[lastName] = "Kanedy";

console.info(person);
console.info(person[firstName]);
console.info(person[lastName]);

// penerapan Symbol 2 key sama dengan 2 value,hasilnya berbeda bukan sama
console.info()
console.info()
console.info('PENERAPAN SYMBOL 2 KEY YANG SAMA')
const id1 = Symbol("id");
const id2 = Symbol("id")

const user = {
    [id1] : "User A",
    [id2] : "User B"
};

console.log(user); // { [Symbol(id)]: 'User A', [Symbol(id)]: 'User B' }   
console.log(user[id1]); //  User A
console.log(user[id2]); // User B
console.log(id1 === id2); // false

console.info()
console.info()
console.info("PENERAPAN FOR PADA Symbol")
/* 

 global symbol registry menyimpan nilai "id" yang di deklarasikan oleh x? 
 dan ketika y menulis "id" lagi maka dilihat di global symbol registry apakah sudah atau atau belum ada "id" 
 ,jika sudah ada maka ambil , jika belum ada buat, dalam studi kasus ini y mengambil nila "id" di global symbol registry yaitu yang didaftarkan x
 */
const x = Symbol.for("id");
const y = Symbol.for("id"); // id, y melihat  global symbol,jika id belum ada buat
// jika sudah ada ambil,pada hal ini, y mengambil "id" milik x karena sama dan sudah masuk global symbol

console.info(x === y); // true , tidak unik

