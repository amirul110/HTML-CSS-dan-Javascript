//  jalankan server dengan  node 8-server.js
// Server berjalan di http://localhost:3000 berarti aktif
// Ctrl + C untuk matikan
const iKihttp = require('http');
const iKiurl = require('url');


iKihttp.createServer((request, respon) => {
    const iKiquery = iKiurl.parse(request.url, true). query;
    const iKiSearch = iKiquery.search || 'tidak ada';

    respon.setHeader('Access-Control-Allow-Origin', '*');
    respon.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    respon.setHeader('Access-Control-Allow-Headers', 'Content-Type');


    respon.writeHead(200, { 'Content-Type' : 'text/plain'});
    respon.end(`Kamu mencari : ${iKiSearch}`);
}).listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000')
});
