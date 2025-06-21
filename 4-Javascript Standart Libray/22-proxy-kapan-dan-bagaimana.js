// kapan dan bagaimana data diakses

const session = { role : "admin123"};

const karyawan = {
    nama : "Doni",
    gaji : 20_000_000,
    alamat : "Jakarta"
};

const karyawanProxy = new Proxy(karyawan, {
    
    get(target, prop, receiver){
        console.log(`[LOG] Akses property "${prop}" pada ${new Date().toLocaleTimeString()}`);
    
    const jam = new Date().getHours();
    if (jam < 9 || jam >= 16){
        throw new Error("Di luar jam kerja - akses di tolak")
    }

    if (prop == "gaji" && session.role !== "admin"){
        throw new Error("Akses gaji hanya untuk admin");
    }

    // akan cetak nilai asli dari property nama
    return Reflect.get(target, prop, receiver);
}
});

console.log(karyawanProxy.nama); /*[LOG] Akses property "nama" pada 15:50:09
Doni */
console.log(karyawanProxy.gaji) // 20000000
