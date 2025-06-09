const person = {
    firstName : "eko",
    lastName : "kurniawan"
};

// mengambil value gunakan .values
console.info(Object.values(person)) // [ 'eko', 'kurniawan' ]

// mengambil key gunakan .getOwnPropertiesNames
console.info(Object.getOwnPropertyNames(person)) // [ 'firstName', 'lastName' ]
