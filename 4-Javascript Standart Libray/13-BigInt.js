// BigInt untuk penggunaan angka yang lebih besar
// BigInt harus dioperasikan sesama BigInt , dengan Number tidak bisa


const a = BigInt(Number.MAX_SAFE_INTEGER); // MAX_SAFE_INTEGER untuk dapatkan angka max yang aman
const b = BigInt(Number.MAX_SAFE_INTEGER);

const c = a + b;

console.info(c); // 18014398509481982n
console.info(typeof c); // bigint

console.info(a) // 9007199254740991n  tanda n, menunjukkan BigInt
console.info(typeof a) // bigint

const d = BigInt(100)
console.info(d); // 100n
console.info(typeof d); // BigInt
