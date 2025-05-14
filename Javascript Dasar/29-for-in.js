
/*

FOR IN HANYA ITERASI PROPERTY ATAU INDEX

${person[property]} itu sama halnya dengan person["lastName"] hanya saja disini pada bagian person["lastName"] kita sudah tahu nama property apa yang ingin kita dapatkan nilainya
 dan sedangkan di ${person[property]} itu tidak ada tidak tahu nama property yang kita akses ,dan cara kerjanya adalah const property in person) berarti mengiterasi nama2 property di var person nah kalau sudah iterasi dan nilai tersebut disijmpan di const property maka seprti ${person["lastName"]} dan dari situ dapatkan nilai nya


 */

const person = {
    firstName : "Muhammad",
    middleName : "amirul",
    lastName : "muchminiin"
    
}

for (const property in person) {
    console.log(`Property ${property} : ${person[property]}`)
}

let a = person["lastName"]
console.log(a)


const names = ["muhammad","amirul","muchminiin"];

for(const index in names) {
    console.log(`Index ${index} : ${names[index]}`)
}

const b = names[2];
console.log(b)
