/*
Generator function (function*) adalah jenis fungsi yang bisa berhenti di tengah jalan, menyimpan posisinya, dan dilanjutkan lagi nanti.


tidak bisa diubah data nya
tidak bisa diakses melalui index
hanya mengambil data yang dibutuhkan

Generator function (function* createNames()) disebut generator,
tapi hasil pemanggilannya (createNames()) adalah iterator.

setelah yield "EKo" dieksekusi maka akan lanjut 
*/ 
function* createNames() {
    yield "Eko";         // <-- akan dieksekusi saat names.next() pertama
    yield "kurniawan";   // <-- akan dieksekusi saat names.next() kedua
    yield "khannedy";    // <-- akan dieksekusi saat names.next() ketiga
}

const names = createNames(); // iterator dibuat, belum jalan

console.log(names.next());   // 🔥 Eksekusi dimulai → yield "Eko"
// Output:
// Masuk ke generator
// { value: "Eko", done: false }

console.log(names.next());   // 🔥 Lanjut dari titik terakhir (setelah yield "Eko")
// Output:
// Setelah Eko
// { value: "Kurniawan", done: false }

console.log(names.next());   // 🔥 Lanjut dari titik terakhir (setelah yield "Kurniawan")
// Output:
// Setelah Kurniawan
// { value: "Khannedy", done: false }

console.log(names.next());   // 🔥 Generator selesai
// Output:
// Setelah Khannedy
// { value: undefined, done: true }



function* buatGenap(value){
    for (let i = 0; i <= value; i++){
        if (i % 2 == 0){
            yield i;
        }
    }
}

const angkaGenap = buatGenap(20);
for (const angka of angkaGenap) {
    console.log(angka)
}
