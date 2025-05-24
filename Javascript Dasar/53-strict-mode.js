// "Jalankan kode ini dengan aturan yang lebih ketat agar bug lebih mudah ditemukan."
/*

 Hal yang Dilarang	❌ Tanpa Strict	✅ Dengan Strict
Variabel tanpa let/const/var	Diizinkan	Error
Duplikasi parameter	Diizinkan	Error
Assign ke properti hanya-baca	Diizinkan diam-diam	Error
Pakai with	Diizinkan	Error
this di fungsi biasa	Global object (window)	undefined
Nama variabel eval atau arguments	Diizinkan	Error

*/
'use strict'
console.log("hello world")


function useStrictMode(){
    'use strict';
    const person = {
        firstName : "eko"
    }

    with(person){   // with(person){} tidak diizinkan di strict mode.
        console.log(firstName);
    }
}

useStrictMode();
