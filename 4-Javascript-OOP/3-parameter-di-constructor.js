// mengirim data lewat parameter class.
// inputan nilai di paramSatu didsimpan di namaPertama
// inputan nilai di paramDua disimpan di namaTerakhir
function Identitas(paramSatu, paramDua){
    this.namaPertama = paramSatu;
    this.namaTerakhir = paramDua;
    this.sayHi = function(nami){
        console.log(`Hi ${nami} , my names is ${this.namaPertama}`)
    }
}

const budi = new Identitas("budi","speed"); // nilai yang diinputan di parameter ,akan disimpan sebgai namaPertama dan namaTerakhir
budi.namaPertama = "yapping"; // manual bukan parameter
budi.sayHi("jaka");
