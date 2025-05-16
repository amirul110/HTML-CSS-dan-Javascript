function sayHallo(nama){
    console.log(`Hello ${nama}`);
}

let say = sayHallo; // menyimpan sayHalo di var say, jadi say juga berisi sama dengan fuc sayHallo

sayHallo("eko"); //Hello eko
say("wi wok"); // Hello wi wok

function giveMeName(kardus){
    kardus("Eko");
}

/*
function giveMeName(sayHallo){
    console.log(sayHallo("Eko"); cetak "hello + nilai dari param pertama yaitu eko"
}
*/

// mengirim function di parameter
giveMeName(sayHallo); 
giveMeName(say); // Hello Eko


function babi(a){
    console.log(`hallo bang ${a}`)
};

babi("arjuno")

