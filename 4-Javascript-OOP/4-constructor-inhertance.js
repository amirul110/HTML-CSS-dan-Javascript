// biasanya constructor hanya berisi value dan func
// dalam constructor kita bisa memanggil constructor lain, 
// dengan begitu bisa mewarisi semua property di constructor lain tersebut
// cara panggil constructor lain,gunakan NamaConstructor.call(this.parameter)

// inheritance = konsep OOP dimana sebuah object bisa mewarisi property dan metode dari object lain,
// inheritance biasa disebut sebagai parent atau superclass

function Karyawan(namaPertama){
    this.firstName = namaPertama;
    this.sayHallo = function(nama){
        console.info(`Hallo ${nama}, nama saya yaitu ${this.firstName}`)
    }
}

function Manager(namaSatu, namaTerakhir){
    Karyawan.call(this,namaSatu); // memanggil
    this.lastName = namaTerakhir;

}

const bambang = new Manager("bambang","pamungkas");

console.log(bambang.lastName) 
//  walaupun bambang merupakan object dari class Manager
//tapi untuk mengakses "bambang" harus gunakan firstName yang merupakan property dari class Karyawan
// karena ""
console.log(bambang.firstName); 
bambang.sayHallo("marko")


/*
 Penjelasan Karyawan.call(this, namaSatu)

    Fungsi Karyawan memiliki parameter:

function Karyawan(namaPertama) {
    this.firstName = namaPertama;
    ...
}

    Artinya, apapun nilai yang dikirim ke parameter namaPertama, akan disimpan ke properti this.firstName.

Dalam Manager, kamu memanggil:

    Karyawan.call(this, namaSatu);

        Ini berarti kamu memanggil fungsi Karyawan dari dalam fungsi Manager, dengan konteks this (objek yang sedang dibuat oleh Manager).

        Parameter namaSatu dari Manager dikirim ke parameter namaPertama di Karyawan.

    Jadi secara teknis:

        namaSatu milik Manager

        → dikirim ke namaPertama milik Karyawan

        → lalu disimpan dalam this.firstName

    Akhirnya, objek bambang yang dibuat dari Manager akan memiliki:

        firstName → dari hasil Karyawan.call(this, namaSatu)

        lastName → dari this.lastName = namaTerakhir

✅ Kesimpulan

    Apakah benar namaSatu tersebut disimpan di firstName?

✅ Ya, benar. Karena namaSatu dikirim ke Karyawan.call(this, namaSatu), lalu disimpan ke this.firstName di dalam constructor Karyawan.
*/
