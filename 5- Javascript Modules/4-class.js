export class Person {
    constructor(name) {
        this.jeneng = name // isi jeneng dari nilai parameter constructor , yaitu = Eko
        this.kulo = null // belum diisi
    }

    setKota(kota){
        this.kulo = kota // kulo = "Madiun"
    }

    sayHello(motor){
        console.info(`Hallo bang ${motor} , my name is ${this.jeneng} from ${this.kulo} `)
    }
}
