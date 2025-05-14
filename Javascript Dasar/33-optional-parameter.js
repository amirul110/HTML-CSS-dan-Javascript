
/*
    Kalau cuma punya nama depan, cukup isi 1.

    Kalau lengkap, isi semua.

Itulah fungsi parameter opsional — tidak wajib diisi semua, tapi tetap aman saat dipanggil.
*/

function sayHello(firstName, middleName, lastName ) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
}

sayHello("EKOOOOO","KURNIAWAN","programer")
sayHello("dd")
sayHello("ww")

// default paramter
function halo(nama = "Pengguna") {
  console.log(nama);
}

halo(); 
// output: Pengguna

/*
 Karena ada nilai default "Pengguna", maka:

    Jika user tidak isi → tetap ada nilai cadangan

    Inilah yang membuat parameter itu disebut optional
    */
