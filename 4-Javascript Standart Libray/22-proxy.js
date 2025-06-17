const target = {};

const handler = {
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
