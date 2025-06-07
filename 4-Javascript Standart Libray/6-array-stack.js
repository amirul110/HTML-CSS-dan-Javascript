// LIFO = Last In First Out
// yang masuk terakhir ,akan di cetak dahulu
const wadah = [];

wadah.push("eko");
wadah.push("kurniawan");
wadah.push("kanedy") // push() untuk masukan data ke array
wadah.push("HIDUP JOKOWI")

// pop() untuk mengembalikan dan mencetak data array
console.info(wadah.pop()) // HIDUP JOKOWI 
console.info(wadah.pop()) // kanedy
console.info(wadah.pop()) // kurniawan
