// menambahkan anonymous func yang disimpan di var sayHello
// semua object yang menggunakan class Person() akan memiliki anonymous func SayHello tersebut
function Person(){
    this.firstName = ""
    this.lastName = ""
    this.sayHello = function (name) {
        console.log(`Hay ${name} , my name is ${this.firstName}`)
    }
}

const arjuno = new Person();
arjuno.firstName = "Arjuno"
arjuno.sayHello("Budi")
