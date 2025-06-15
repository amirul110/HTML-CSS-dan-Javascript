// match(regex) = array hasil yang cocok

const kalimat = "saya suka belajar olahraga dan belajar matematika";
const hasil = kalimat.match(/belajar/g); // mencocokkan semua kata "makan"
console.log(hasil); // [ 'belajar', 'belajar' ]

// search(regex) = cari index pertama yang cocok dengan regex
const cariIndex = kalimat.search(/belajar/); // mencari index dari "belajar"
console.log(cariIndex); // 10

// replace(regex, value) = mengganti hanya pertama karaketer yang cocok
const ganti = kalimat.replace(/belajar/,"minum"); // hanya mengganti karakter belajar 1x yang cocok saja
console.log(ganti); // saya suka minum olahraga dan belajar matematika      

const gantiSemua = kalimat.replaceAll(/belajar/g, "menonton"); // semua karakter "belajar" diganti dengan "menonton" , pastikan gunakan modifer "g"
console.log(gantiSemua) // saya suka menonton olahraga dan menonton matematika  


// split(regex) = memecah string menjadi array berdasarkan pola
const cerita = "apel;unta,dermawan*change";
const pisah = cerita.split(/[;,*]/) // string dipotong berdasarkan ;,* 
console.log(pisah); // [ 'apel', 'unta', 'dermawan', 'change' ]

// gabungan regex + method
const password = "abc123"
const kuat = password.match(/[0-9]/g) && password.length >= 6; // password dengan karakter angka dan panjang minim 6 

// gunakan operator ternary "?", hasilkan boolean
// condition ? value_if_true : value_if_false
console.log(kuat ? "password kuat" : "Password lemah") // password kuat
