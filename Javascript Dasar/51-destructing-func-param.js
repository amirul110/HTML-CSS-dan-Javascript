function display({firstName : namaPertama,middleName, lastName}){
    console.log(namaPertama); // sama dengan person.firstName , namaPertama = firstName
    console.log(middleName); // sama dengan person.middleName
    console.log(lastName); // sama dengan person.lastName
}

const person = {
    firstName : "eko",
    middleName : "Kurniawan",
    lastName : "Kanedy"
};

display(person)

function sum([first, second]) {
    return first + second;
}

console.log(sum([10 ,22]))
console.log(sum([2, 33])); 
