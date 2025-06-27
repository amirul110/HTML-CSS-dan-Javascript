export class Person {
    constructor(name) {
        this.jeneng = name // isi jeneng dari nilai parameter constructor , yaitu = Eko
        this.kulo = null // belum diisi , kulo = "Madiun"
    }

    setKota(kota){
        this.kulo = kota // kulo = "jakarta"
    }

    sayHello(motor){

        // Hallo bang Joko , my name is Eko from jakarta 
        console.info(`Hallo bang ${motor} , my name is ${this.jeneng} from ${this.kulo} `)
    }
}
