/*
forEach tidak bisa dihentikan dengan break atau return. Dia akan terus lanjut ke elemen berikutnya.

// setiap  gunakan forEach pada array harus gunakan function callback
for...of bisa dihentikan dengan break, cocok untuk kasus yang butuh keluar dari loop lebih awal.
*/

const array = ["Eko","Kurniawan","Khanedy"];

// parameter nilai = isi array , parameter indek = posisi index di array
array.forEach(function (nilai,indek){ 
    console.info(`${indek} : ${nilai}`);
})

array.forEach((nilai, indek) => console.info(`${indek} : ${nilai}`)) ;

array.forEach((nilai,indek) => console.log(nilai,indek))
