console.log("1. Mulai");

// langsung di delegasikan ke node.js
setTimeout(function () {
    console.log("2. Proses selesai (async)")
} , 5000)

console.log("3. Selesai")


/*

| Waktu  | Apa yang terjadi                                                   |
| ------ | ------------------------------------------------------------------ |
| 0ms    | `console.log("1. Mulai")` langsung jalan                           |
| 0ms    | `setTimeout` diserahkan ke Web API, mulai hitung 2 detik           |
| 1ms    | `console.log("3. Lanjut kode bawahnya")` langsung jalan            |
| 2000ms | Web API selesai → masukkan callback ke Callback Queue              |
| 2001ms | Event Loop cek stack kosong → ambil callback dari queue → jalankan |
| 2001ms | `console.log("2. Callback async selesai")` dijalankan              |

 */
