/*
Generator function (function*) adalah jenis fungsi yang bisa berhenti di tengah jalan, menyimpan posisinya, dan dilanjutkan lagi nanti.
*/ 
function* createNames() {
    yield "Eko"
    yield "kurniawan"
    yield "khannedy"
}

const names = createNames(); // names sbgai iterator 

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

function* buatGenap(value){
    for (let i = 0; i <= value; i++){
        if (i % 2 == 0){
            yield i;
        }
    }
}

const angkaGenap = buatGenap(20);
for (const angka of angkaGenap) {
    console.log(angka)
}
