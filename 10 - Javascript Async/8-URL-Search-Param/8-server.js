const iKihttp = require('http');
const iKiurl = require('url');

                    // (parameter request : data permintaan dari client, respon : tempat untuk bales ke clinet)
iKihttp.createServer((request, respon) => {

    // request.url berisi URL lengkap yang dikirim browser, misalnya:
    // /?search=unta&kategori=riwayat
    /*
    iKiurl.parse(..., true) akan memecahnya jadi objek query:

js
Salin kode
{
  search: "unta",
  kategori: "riwayat"
}
     */
    const iKiquery = iKiurl.parse(request.url, true). query;
    // ikiSearch berisi apakah ada value pada key search? jika ada cetak jika tidak ada  cetak 'tidak ada'
    const iKiSearch = iKiquery.search || 'tidak ada';

    /*
    ✅ Ini agar browser tidak memblokir permintaan lintas-origin (CORS).
Misalnya: client jalan di localhost:5500, server di localhost:3000 → beda port dianggap beda origin.
     */
    respon.setHeader('Access-Control-Allow-Origin', '*');
    respon.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    respon.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    respon.writeHead(200, { 'Content-Type' : 'text/plain'});
   // respon.end(...) → mengirim teks ke browser dan mengakhiri respon
    respon.end(`Kamu mennncari : ${iKiSearch}`); // http://localhost:3000/?search=makan&kategori=riwayat , untuk akses respons server
}).listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000')
});

/*
✅ Server akan mendengarkan permintaan di port 3000.
Artinya: setiap kali client mengakses http://localhost:3000, fungsi di atas akan dijalankan.


 */


/*

 ALUR KOMUNIKASI: Client ke Server
📤 1. CLIENT MENGIRIM
Client (8-URL-Search-Param.html) melakukan ini:

js
Salin kode
ikiAjax.open("GET", `http://localhost:3000?search=unta&kategori=riwayat`);
ikiAjax.send();
✅ Artinya:

Kirim permintaan GET ke server

Data dikirim melalui query string

Yang dikirim:

text
Salin kode
search=unta&kategori=riwayat
📥 2. SERVER MENERIMA & MEMBALAS
Server (8-server.js) melakukan ini:

js
Salin kode
const iKiquery = iKiurl.parse(request.url, true).query;
const iKiSearch = iKiquery.search || 'tidak ada';
respon.end(`Kamu mennncari : ${iKiSearch}`);
✅ Server:

Menerima request.url

Pecah query jadi objek

Ambil isi dari parameter search

Kirim balasan ke client

🔄 ILUSTRASI KOMUNIKASI
yaml
Salin kode
📱 Client:
  Kirim: http://localhost:3000/?search=unta&kategori=riwayat
          ↘
💻 Server:
  Terima query: { search: "unta", kategori: "riwayat" }
  Balas: "Kamu mennncari : unta"
          ↘
📱 Client:
  Terima balasan → tampilkan di console atau halaman
 */
