// jika pengguna tidak inputan nilai parameter atau inputkan undefined maka ,default parameter akan di cetak kelayar
function register(name, gender = "WOMAN"){
    console.log(name);
    console.log(gender);
}

register("Eko","MALE"); // Eko MALE
register("Budi") //Budi WOMAN
register("Joko",undefined) //Joko,WOMAN
