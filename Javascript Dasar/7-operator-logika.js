let kacang = true
let permata = true
let musisi = false 


//operator AND &&, 
// akan hasilkan true  jika kedua nilai bernilai true
let buku = kacang && permata
console.log(buku) //true

let merah = kacang && musisi
console.log(merah) // false

// operator  OR ||
// akan hasilkan true jika ada nilai true

let panda = kacang || musisi
console.log(panda) //true

let jerapah = musisi || false
console.log(jerapah) // false,karena tidak ada nilai true di kedua pihak


// operator NOT ! , berarti kebalikan sebelumnya true jadi false,false jadi true
let bambu = !musisi
console.log(bambu) // true

let manggis = !kacang
console.log(manggis) // false
