// GUNAKAN FIRST IN FIRST OUT
// YANG MASUK DULU LANGSUNG DICETAK
const queue = [];

queue.push("Eko"); // MENAMBAH DATA DIBELAKANG
queue.push("Kurniawan");
queue.push("kanedy");

console.info(queue.shift()); // MENGAMBIL DATA DEPAN
console.info(queue.shift());
console.info(queue.shift());

// console.info(queue[0]) juga bisa mencetak, 
// shift() mengambil & menghapus
console.info(queue.push("jarwo"))
console.info(queue.push("jarwo")) // 2, mengembalikan jumlah data di array

queue.push('akam')
console.info(queue) // [ 'jarwo', 'jarwo', 'akam' ] , mencetak isi array
