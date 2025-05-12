let nama;

if (nama == undefined) {
    console.log("UNDEFINED")
} else {
    console.log("DEFINED")
}

// undefined array value
const binatang = ["ayam","kambing"];

if (binatang[2] == undefined) {
    console.log("INDEX 2 tidak ada")
} else {
    console.log(`Hello ${binatang[2]}`)
}


let people = {};

if (people.name == undefined) {
    console.log("tidak ada data,UNDEFINEd")
} else {
    console.log(`Hello ${people.nama}`)
}

console.table(typeof people)
