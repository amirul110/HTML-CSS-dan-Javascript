// getter untuk gabung property in object
// harus gunakan return di get
// get tidak bisa gunakan parameter,karena seprti property pada umumnya ,dianggap proprty bukan func
// getter hanya untuk akses property
const ormas = {
    nama :  "pemuda pancaasila",
    seragam : "orange",
    get fullInfo(){
        return ` nama ormas  : ${this.nama} ${this.seragam}`;
    }
};

// otomatis memanggil get fullName()
console.info(ormas.fullInfo)

// setter
// setter untuk megubah data
const kuliah = {
    Jurusan : "Informatika",
    Minat : "Backend Enjiner",
    get FullKuliah(){
        return `kuliah dengan jurusan ${this.Jurusan} dengan minat ${this.Minat}`
    },

    // max gunakan 1 parameter
 set fullName(val) {             // val = "elektro iot"
    const array = val.split(" ");  // array = ["elektro", "iot"]
    this.Jurusan = array[0];       // Jurusan = "elektro"
    this.Minat = array[1];         // Minat = "iot"
}

};

console.log(kuliah.FullKuliah)
kuliah.fullName = "elektro iot";
console.log(kuliah)

console.log(kuliah.Minat);
console.log(kuliah.Jurusan)
