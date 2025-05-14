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
console.log(hasil)

// function multiple value
function getFinalScore(value) {
    if(value > 90){
        return "A";
    } else if (value > 80) {
        return "B";
    } else if (value > 70) {
        return "C";
    } else {
        return "D";
    }
}


console.log(getFinalScore(29));

// kode menghentikan eksekusi dengan return

function isContains(array,searchValue){
    for(const element of array){
        if(element === searchValue){
            return true;
        }
    }
    return false;
}

console.log(isContains([1,2,3,4,5,6,7,8,9,10],5))
