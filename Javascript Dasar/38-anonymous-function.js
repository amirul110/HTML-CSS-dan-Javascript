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


 // anonymous function di kirim sebgai parameter
 function giveMeName(aku) {
    aku("eko") // ditulis sbg function dan bernilai "eko"
 }

 giveMeName(function (nama){
    console.info(`Hello ${nama}`); // (nama) = (aku) dimana aku bernilai eko
 });
