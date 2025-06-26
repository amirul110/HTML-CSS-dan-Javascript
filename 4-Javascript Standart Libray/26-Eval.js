// const script = "alert(`Ups , anda di heck `)";

// eval(script);

const a = 9
const b = 10

console.info(eval("a + b"))

// tanpa eval
const kode = "ak2 * b3 + 10"
const ak2 = 2;
const b3 = 3;

// tanpa eval
console.info((kode))  // ak2 * b3 + 10

// gunakan eval
console.info(eval(kode))  //16

const inputUser = "10 + 5 * 2"
console.log((inputUser)) // 10 + 5 * 2
console.log(eval(inputUser)) // 20
