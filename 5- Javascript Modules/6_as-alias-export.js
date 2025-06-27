const perusahaan = "PT Gudang Garam";

function kali(pertama,kedua){
    return pertama * kedua
}

class Company {

    constructor(age){
        this.umur = age;
        this.namaaa = null
        console.log(`umur saya adalah ${this.umur} tahun`)
    }
}


export {perusahaan as pabrik, kali as multiplication, Company as Perdagangan}
