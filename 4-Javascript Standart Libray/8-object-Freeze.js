
const person = {

    namaPertama : "eko",
    namaTerakhir : "kurniaawan"
};

// mengubah object person menjadi object yang tidak bisa dihapus dan tdk bisa di ubah atribut nya
Object.freeze(person)

person.namaPertama = "Diubahh" // tidak berubah
delete person.namaTerakhir; // tidak berubah
console.info(person); // { namaPertama: 'eko', namaTerakhir: 'kurniaawan' }   
