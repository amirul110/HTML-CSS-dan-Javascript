const target = {firstName : "Eko"};
const source = {lastName : "kanedy",middleName : "kurniawan",a : "aku"};

//  property  object source ditambahkan     di object target
Object.assign(target,source); //property urut milik target dahulu, baru milik source
console.info(target); /* {
  firstName: 'Eko',
  lastName: 'kanedy',
  middleName: 'kurniawan',
  a: 'aku'
}
  */
