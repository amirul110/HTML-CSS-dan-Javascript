// for of untuk iterasi nilainya,sedangkan for in iterasi property di object atau index di array

/* For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.
Iterable adalah data yang bisa diiterasi (diloop) menggunakan for...of, yaitu data yang memiliki method bernama Symbol.iterator.

Contoh data yang iterable:

    Array

    String

    Map

    Set

    TypedArray
    */
const fruits = ["melon","anggur","semangka"];

for (const nama of fruits) {
    console.log(`${nama}`);
}

a = [1,2,3,4,5,6,7,8,9,10]

for (const iterasi of a) {
    console.log(`${iterasi}`);
}

const namaku = "muhammad amirul muchminiin"

for (const char of namaku) {
    console.log(`${char}`);
}
