let person = null

// digunakan untuk mengecek tipe propery bertipe null atau undefined
console.log(person?.addres?.country) //?. selalu mengembalikan undefined ketika menemui null/undefined


let person1 = {
    m : 2
}

console.log(person1?.m) // kembalikan nilai jika ada nilai,bukan undefined
