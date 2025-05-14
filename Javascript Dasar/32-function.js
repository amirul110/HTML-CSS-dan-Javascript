// membuat function
function hiHelloWorld() {
    console.log("Hello World")
}


hiHelloWorld();
hiHelloWorld();

// function parameter
function kendaraan(nama,roda){
    console.log(`Kendaraan ini bernama ${nama} dan menggunakan roda berjumlah ${roda}`);
}

// panggil function dengan argumen
kendaraan("mobil",4)
kendaraan("motor",2)


// function return value
// agar function bisa kembalikan value ;gunakan keyword return
// hanya bisa kembalikan 1 data saja

function nilaiUjian(nama, nilaiAkhir) {
    const nilai = `Hallo ${nama} nilai ujian mu adalah ${nilaiAkhir}`;
    return nilai;
}

const hasil = nilaiUjian("joko",89)
console.log(` ${hasil}`)
