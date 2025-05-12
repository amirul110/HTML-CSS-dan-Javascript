const people = {};

people["nama"] = "amirul";
people["alamat"] = "indonesia";
people["umur"] = 30;

console.table(people)

// menghapus
delete people["umur"]

console.table(people)

people["nama"] = "mason mount" //mengubah
console.table(people)

// membuat object dengan properties
const mangga = {
    nama : "mangga lokal",
    warna : "kuning langsat",
    kuantitas : 29
};

console.table(mangga)

// mengakses property di object
console.info(`Nama : ${mangga.nama}`)
console.log(`warna : ${mangga.warna}`)
