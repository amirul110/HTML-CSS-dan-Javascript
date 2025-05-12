let kaus;
const people = {
    firstName : "amirul",
    lastName : "muchminiin",
    age  : undefined,
    height : null
}

// cek property di object,array jika ada bernilai true , tdk ada false
const hasil = "lastName" in people // true
console.log(hasil)

const output1 = "height" in people
console.log(output1)
