
/*
Arrow Function (juga anonymous)

arrow func alternatif dari func biasa karena lebih sederhana
idak memiliki fitur arguments object
○ tidak bisa menggunakan function generator
○ tidak bisa mengakses this (yang nanti akan dibahas di function di object)
○ tidak bisa mengakses super (yang nanti akan dibahas di JavaScript Object Oriented Programming)
*/
const sayHello = (nama) => {
    const say = `Hello ${nama}`;
    console.log(say);
}

sayHello("EKOOO")
console.log(sayHello.nama)

// arrow function tanpa block, hanya untuk 1 baris
const hiNama = (unta) => console.info(`Hello ${unta}`);

hiNama("MAGUIRE");

let hiWorld = (air) => console.log(`Hello ${air}`);
hiNama("bang")

//arrow function return value tanpa block
const sum = (first,second) => first + second;
console.log(sum(10,5));

// arrow function return value dgn block
const kurang = (pertama, kedua) => {
    hasil = pertama - kedua
    return "hasil pengurangan yaitu" , hasil
}

console.log(kurang(10,8));


// arrow function sebagai parameter
 function giveMeName(callback){
    callback("EKOOoo");
    // nami sbgai parameter pertama
 }


giveMeName(nami => console.info(`Hello ${nami}`));

