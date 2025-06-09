const booleanBang = Boolean(true);

console.info(booleanBang); // true

const StringTrue = booleanBang.toString() // konversi boolean ke string
console.info(StringTrue);
console.info("Type data StringTrue : ", typeof StringTrue) // Type data StringTrue :  string
console.info(booleanBang.valueOf()) // true, mengambil nilai primitif (asli) dari sebuah object wrapper.
// object wrapper yaitu pembungkus object tipe primitif seperti Boolean,Number,String . Sama halnya dengan new Class
