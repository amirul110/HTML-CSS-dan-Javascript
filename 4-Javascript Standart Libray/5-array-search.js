const source = [1,2,3,4,5,10,1,10]

console.info(source.find(value => value > 3)) // 4 , Mencari elemen pertama yang lebih dari 3
console.info(source.findIndex(value => value > 7)) // 5  , mencari eleme pertama yang lebih dari 3
console.info(source.includes(9)) // false , Mengecek apakah nilai 9 ada dalam arrayMengecek apakah nilai 9 ada dalam array
console.info(source.indexOf(3)) // 2, cari indek yang berisi 3 di array
console.info(source.lastIndexOf(10)) // 7, cari indek terakhir dari nilai 10
