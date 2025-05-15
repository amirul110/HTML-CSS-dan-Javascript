function sayHallo(nama){
    console.log(`Hello ${nama}`);
}

let say = sayHallo; // menyimpan sayHalo di var say, jadi say juga berisi sama dengan fuc sayHallo

sayHallo("eko"); //Hello eko
say("wi wok"); // Hello wi wok

function giveMeName(callback){
    callback("Eko");
}

giveMeName(sayHallo);
giveMeName(say);
