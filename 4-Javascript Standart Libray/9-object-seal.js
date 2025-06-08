const timnas = {
    nama : "verdonk" , 
    umur : 33
}
// Object.seal = berfungsi mengubah atribut/property , namun tidak bisa hapus property/index dalam object
Object.seal(timnas);

delete timnas.nama; // tidak berubah
timnas.nama = "henhen"; 
delete timnas.nama; // tidak terhapus
timnas.umur = 22;

console.info(timnas); // { nama: 'henhen', umur: 22 }

