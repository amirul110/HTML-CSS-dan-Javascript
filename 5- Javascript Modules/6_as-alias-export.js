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

//gunakan as, sbgai alias agar nama2 variabel tidak terbentuk dengan file.js yang lain
export {perusahaan as pabrik, kali as multiplication, Company as Perdagangan}
