//var say Bukan Nama Function, Tapi Hanya Variabel Penyimpan
let say = function (nama) {
    console.info(`Hello ${nama}`);
};

/*

    Jika Anda menulis say(), JavaScript akan:

        Mengecek isi variabel say.

        Menemukan bahwa isinya adalah fungsi.

        Menjalankan fungsi tersebut seolah-olah say adalah nama fungsinya.
*/
say("Eko")


function berikuNama(callback) {
    callback("eko");
}

berikuNama(function (nama) {
    console.log(`Hello ${nama}`);
})
