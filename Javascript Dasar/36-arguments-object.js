// Namun perlu diingat, bahwa untuk JavaScript saat ini, lebih baik disarankan menggunakan rest
// parameter dibanding arguments object
function oldSum() {
    let total = 0;
    for (const item of arguments) {
        total += item;
    }
    console.log(`Total is ${total}`);
}
// arguments object itu selalu ada di dalam fungsi biasa, tidak peduli kamu kirim berapa nilai saat panggil fungsi.
// argument = kirim data sbg parameter saat panggil func disebut argument
oldSum(1,2,3,4);
