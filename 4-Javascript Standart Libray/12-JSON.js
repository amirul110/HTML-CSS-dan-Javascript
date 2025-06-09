const person = {
    firstName : "Eko",
    lastName : 'kanedy',
    alamat : {
        negara : "Indonesia",
        city : "madiun"
    }
}

// konversi object ke string JSON
const json = JSON.stringify(person);

// konversi string JSON ke object , buat object baru bukan termasuk object person
const orang = JSON.parse(json)

console.info(json); // {"firstName":"Eko","lastName":"kanedy","alamat":{"negara":"Indonesia","city":"madiun"}}
console.info()
console.info(orang) /* {
  firstName: 'Eko',
  lastName: 'kanedy',
  alamat: { negara: 'Indonesia', city: 'madiun' }
}
  */
