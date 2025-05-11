value1 = "1";
value2 = 1;
const sum = value1 + value2;

console.log(sum);// 11 ,karena jika ada oprasi string dan number maka number akan dikonversi ke string
console.log(typeof sum); //string, ANEEEEEEEEEH

let jalan = "123.3303.393"; // konversi string ke bilangan bulat
console.log(parseInt(jalan));  // 123

let hujan = "293.393.3.2.22";  //konversi string ke bilangan pecahan, diambil pecahan . pertama saja
const manu = parseFloat(hujan); // 293.393
console.log(manu);
console.log(typeof manu);

let sabun = "2929.229299292";
let tulisan = Number(sabun); // konversi dari string ke number (bilangan bulat atau pecahan)
console.log(tulisan) ; //2929.229299292  

console.log(typeof tulisan);


//konversi number ke string

let sejarah = 123;
const kuning = sejarah.toString() // konversi number ke string
console.log(kuning) // "123"
console.log(typeof kuning) // string
