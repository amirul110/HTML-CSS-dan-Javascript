const target = {
  name: "Eko",
  age : 29
};

const handler = {
  get(obj, prop) {
    console.log(`Akses properti: ${prop} dari objek:`, obj);
    return Reflect.get(obj, prop); // delegasikan ke Reflect
  }
};

const proxy = new Proxy(target, handler);
console.log(proxy.name); // Akses properti: name ➜ Eko

console.log(target)
const buah  = Reflect.deleteProperty(target, "age")
console.log(target)

/*
  output =
  Akses properti: name dari objek: { name: 'Eko', age: 29 }
Eko
{ name: 'Eko', age: 29 }
{ name: 'Eko' }

  */
