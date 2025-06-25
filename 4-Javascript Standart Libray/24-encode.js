const value = "Eko&Kurniawan=Khannedy;";
const url = 'http://www.contoh.com/?name=';

const encoded = encodeURIComponent(value);
console.info(url + encoded);  // http://www.contoh.com/?name=Eko%26Kurniawan%3DKhannedy%3B

const decoded = decodeURIComponent(encoded);
console.info(url + decoded); // http://www.contoh.com/?name=Eko&Kurniawan=Khannedy;
