/*
Destructuring adalah fitur di JavaScript yang memungkinkan kamu untuk mengambil nilai dari array atau object dan menyimpannya ke dalam variabel dengan cepat dan mudah
*/
// mengambil data di array
const hadiah = ["elpiji","peranian","peternakan","unta","sapi","sate"];
const siang = hadiah[0];
const sore = hadiah[1];
const malam = hadiah[2];

console.log(siang);
console.log(sore);
console.log(malam);


// destructuring array
const [firstName, middleName, lastName, ...others] = hadiah;

console.info(firstName);
console.info(middleName);
console.log(lastName);
console.info(others)

// megambil data di obejct

const person = {
    firstName : "eko",
    lastName : "kanedy",
    address : {
        street : "Jalan Belum baru",
        city : "Jakarta",
        country : "Indonesia"
    },
    hobby : "Game",
    channel : "PZN"
};

const namaPertama = person.namaPertama();
const namaterakhir = person.lastName;


const {namaku, namaTengah, address, ...lainnya}    = person
console.info(namaPertama);
console.info(namaTengah);
console.info(address)
console.info(lainnya);
;
