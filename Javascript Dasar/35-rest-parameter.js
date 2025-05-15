/*
Rest Parameter
● Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu
parameter, dan secara otomatis akan di konversi menjadi Array



function sum(nama , ...data) {
    let total = 0
    for (const item of data) {
        total += item; // total += item benar-benar menyimpan hasil dari total + item kembali ke dalam total.
    }
    console.log(`Total ${nama} is ${total}`) // Total Orange is 20
    console.log(`Data ${nama}: [${data}]`); // Data Orange: [2,3,4,5,6] 
console.log(`Total ${nama} is ${total}`); // Total Orange is 20

    console.log(typeof data);
    console.log(Array.isArray(data));
}
sum("Orange",2,3,4,5,6);

a = sum("Grape",...[1,2,3,4,5]);
console.log(a)
*/

function sum(nama, ...data) {
    let total = 0;
    for (const item of data) {
        total += item;
    }
    return [nama,total]; // ✅ ini yang membuat bisa disimpan di variabel
}

let a = sum("Grape", ...[1, 2, 3, 4, 5]);
console.log(a); // 15





