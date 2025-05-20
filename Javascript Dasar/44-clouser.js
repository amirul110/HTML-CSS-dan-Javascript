/*
Benar! Closure terjadi ketika fungsi dalam (inner function) mengakses variabel dari fungsi luar (outer function), dan fungsi dalam tersebut bertahan hidup lebih lama dari fungsi luarnya.
Tapi, tidak hanya variabel—fungsi dalam juga bisa mengakses:

    Parameter fungsi luar.

    Fungsi lain yang didefinisikan di dalam fungsi luar yang sama.

    Variabel, konstanta, atau fungsi apa pun yang ada di scope fungsi luar.

    - dikatakan clouser jika func dalam mengakses nilai func luar
    - func dalam mengakses parameter dari func luar
    - func dalam mengakses func dalam scope yang sama,sperti func luar bernama kopi,
    nah di func didalam func kopi terdapat func teh dan gula, func teh bisa akses func gula dan sebaliknya


    3 cara membuat clouser tanpa return
    func dalam disimpan dalam variabel global (pastikan func dalam akes nilai,var pada func luar)
    func dalam sebgai callback,misal 1 detik baru cetak pesan seperti "Hello!" yg merupakan nilai dari outer
    func dalam dikirim/digunakan untuk dikirim ke func lain
*/

function createAdder(value){
    const owner = "Eko";
    function add(param) {
        console.log(owner);
        return value + param;
    }
    return add;
}

const addTwo = createAdder(2);
console.log(addTwo(10)); //(10) sbg nilai dari parameter param pada func dalam func  add
console.log(addTwo(20)); // //(20) sbg nilai dari parameter param pada func dalam func  add
