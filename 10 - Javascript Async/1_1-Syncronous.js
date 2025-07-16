console.log("1. mulai")

function prosesSync() {
    console.log("2. proses selesai (sync")
}

prosesSync()

console.log("3. Selesai")

/*
 main thread =
    a. get product
    b. show product
    c. show header
    d. show footer

    urutan eksekusi syncrhonus (default js)

    a -> selesai -> b -> selesai -> c -> selesai -> d -> selesai,

    jadi harus nunggu kode atas selesai dijalankan, baru jalankan kode bawah
 */
