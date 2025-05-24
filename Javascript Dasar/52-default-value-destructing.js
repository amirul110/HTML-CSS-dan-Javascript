// kode defau;t value destructuring array

const names = ["eko","kurniawan"];
const [firstName, middleName, lastName = "khannedy"] = names;

console.log(firstName);
console.log(middleName);
console.log(lastName);


// default value destructuring object
const person = {
    namaPertama : "muhammad",
    namaTerakhir : "muchminiin"
};

const {namaPertama,namaTengah = "amirul", namaTerakhir} = person
console.info(namaPertama);
console.log(namaTengah);
console.log(namaTerakhir);

// menggunakan nama variable lain

// konversi array ke object
const people = {
    namaAwal : names[0],
    namaAntara : names[1]
}

 const {
    namaAwal : namakeSatu ,
    namaAntara : namakeDua ,
    namaAkhir : namakeTiga = "muchminiin tuan"
 } = people

 console.log(namakeSatu);
 console.log(namakeDua);
 console.log(namakeTiga);

 
