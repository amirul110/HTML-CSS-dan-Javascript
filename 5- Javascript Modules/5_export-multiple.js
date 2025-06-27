const company = "Programmer Now Handal"

function sum(first, second) {
    return first + second;
}

class Company {

    constructor(name){
        this.nama = name
        console.log(`halo nama saya ${this.nama}`)

    }


}

// export banyak code sekaligus
export {company, sum, Company}
