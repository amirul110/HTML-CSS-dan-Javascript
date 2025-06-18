// proxy digunakan sebgai proteksi/pengawasan dari object
const target = {};

const handler = {
    
    // digunakan untuk memanggil setiap property dari sebuah object dibaca
    // target  yaitu object asli ?
    // property yaitu nama2 property yang ingin dibaca
    get: function (target, property) {
        return target[property];
    },
    set: function (target, property, value){
        target[property]  = value;
        return true;
    }
}

const proxy = new Proxy(target, handler);
proxy.firstName = "Eko";
proxy.lastName = "Kanedy";

console.info(proxy.firstName);
console.info(proxy.lastName);
