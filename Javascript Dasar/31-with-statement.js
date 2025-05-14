// kode tanpa with statement
const person = {
    firstName : "muhammad",
    middleName : "amirul",
    lastName : "muchminiin"
}

console.log(person.firstName);
console.log(person.middleName);
console.log(person.lastName);

// kode dengan with statement

const buah = {
    Nama : "mangga",
    Jenis : "mangga madu",
    Warna : "hijau ke kuning kungingan"
}

with(buah){
    console.log(Nama);
    console.log(Jenis);
    console.log(Warna)
};

/*
Walaupun with bisa membuat kode lebih singkat, with tidak disarankan karena:

    Bisa membingungkan: Tidak jelas dari mana asal nama variabel.

    Sulit dibaca dan di-debug.

    Tidak diizinkan di mode strict ('use strict').
*/
