// membuat constructor function sebagai class
function Person(){ //disarankan huruf Capital huruf pertama nama class

    // membuat property
    this.firstName = ""
   this.lastName = " "
   // lastName = " s" akan jadi variabel global bisa diakses dimana saja bukan bagian class,karena tidak pakai this.

}

// membuat object
// 1. saat new Person ,maka membuat object baru
// 2. masunkan property firstName , lastName ke object baru karena this.
// 3. setelah func person selesai,object baru yang telah terisi property disimpan di var eko
const eko = new Person();
eko.firstName = "ekoo"

const budi = new Person();
budi.firstName = "budi";
budi.lastName = "glor";


console.log(eko)
console.log(budi);
