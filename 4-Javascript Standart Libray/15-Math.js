/*

Math merupakan class di js yang berisi static method dan method untuk operasi matematika

Math hanya untuk tipe data Number, tdk bisa untuk BigInt


Math.round() jika desimal < 0.5 dibulatkan ke bawah arah nol atau mendekati 0
             jika desimal >= 0.5 dibulatkan ke atas arah positif atau menjauhi 0
Untuk bilangan negatif, .5 ke atas → turun ke bawah (lebih negatif). 
contoh -10.8 = -11 karena -11 menjauhi 0;

Math.floor() selalu membulatkan ke bawah
Math.floor(3.83)  = 3 , karena angka bulat 3 lebih kecil dar 3.83
Math.floor(-3.83) = -4 , karena angka bulat -4 lebih kecil dari -3.83
*/

console.info(Math.max(10,11,8,33,44,99)) // 99 , mencari nilai maximal
console.info(Math.min(3,2,4,21,1,0)) // 0 , mencari nilai minim
console.info(Math.round(11.5)); // 12
console.info(Math.round(10.4)); // 10, 
console.info(Math.round(-10.4)); //  - 10, lebih kecil dari - 10.4
console.info(Math.round(-10.9)); // - 11 , karena .9 dibulatkan menjauhi nol
console.info(Math.floor(3.83)) // 3   , karena angka bulat 3 lebih kecil dari 3.83
console.info(Math.floor(-3.83)) // - 4 , karena angka bulat lebih kecil dari - 3.83 yaitu 4
console.info(Math.trunc(10.939)); // 10 , hanya memotong angka dibelakang koma tdk dibulatkan
