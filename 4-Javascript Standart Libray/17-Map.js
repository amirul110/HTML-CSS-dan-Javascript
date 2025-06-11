const nama = new Map();
// name sbg key, "amirul mukminiin sbg value"
    nama.set("Name", "amirul mukminiin");
    nama.set("Address", "Indonesia")

console.info(nama);
console.info(nama.get("Name")); // ambil value berdasarkan value
console.info(nama.get("Address"));

for (const nilai of nama){
    console.info(`${nilai[0]} : ${nilai[1]}`) // mengiterasi key dan value pada map nama
}

for (const nilai of nama.values()){ // mengiterasi value pada map nama
    console.info(nilai)
}

for (const nilai of nama.keys()){  // mengiterasi key pada map nama
    console.info(nilai) // Address
}
console.info(nama.size) // mengetaui panjang map

console.info(nama.has("Name")) // true, untuk cek apakah ada key ? jika ada kembalikan true

hapus = nama.clear(nama) // menghapus isi map

console.log(hapus) // undefined

console.info(nama.size) // 0 , karena sudah di hapus clear()


const kambel = new Map();
kambel.set("a",29292).set("b",1000);

// untuk mengiterasi pada map
kambel.forEach((value,key) => {

    console.info(`${key} => ${value}`);
}) /* a => 29292
b => 1000
*/
