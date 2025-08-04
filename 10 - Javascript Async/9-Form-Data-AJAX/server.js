const Lohttp = require('http');
const Loquerystring = require('querystring')

let LolastData = null


const Loserver = Lohttp.createServer((Lorequest, Lorespon) => {

    Lorespon.setHeader('Access-Control-Allow-Origin', '*');
    Lorespon.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    Lorespon.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (Lorequest.method === 'POST' && Lorequest.url === '/') {
        let Lobody = ''

        Lorequest.on('data', chunk => {
            Lobody += chunk.toString();
        })

        Lorequest.on('end', () => {

            const LoparsedData = Loquerystring.parse(Lobody);
            LolastData = LoparsedData;

            // untuk cetak data yang dikirim client dicetak di terminal IDE
           console.log("Data diterima (POST):", LoparsedData);

            Lorespon.writeHead(200, { 'Content-Type' : 'text/plain'});
            Lorespon.end(`Server menerima:\nUsername: ${LoparsedData.username}\nPassword : ${LoparsedData.password}`)
        })
    } else if (Lorequest.method === 'GET' && Lorequest.url === '/') {
                Lorespon.writeHead(200, { 'Content-Type': 'text/html'});
               // Lorespon.end(...): inilah isi halaman yang dikirim ke client (browser).
                Lorespon.end(`
                 <h2>Data terakhir yang dikirim (POST): </h2>
                                <!--  ?. digunakan untuk optional chaining, jika data LolastData tdk ada maka bernilai udefined, dan cetak Username : (Belum ada) di hal server  -->
                 <p>Username : ${LolastData?.username || '(Belum ada)'}</p>
                 <p>Password : ${LolastData?.password || '(Belum ada)'}</p>
                           `
/*
 Ketika client belum mengirimkan data POST, maka:

js
Salin kode
LolastData = null;
✅ Kalau kamu buka server pakai browser (GET /), maka tidak ada data yang dikirim dari client.

❌ Kalau langsung akses:

js
Salin kode
LolastData.username
akan error:
TypeError: Cannot read properties of null (reading 'username')

✅ Maka digunakan:

js
Salin kode
LolastData?.username
Agar tidak error saat LolastData masih null atau belum berisi data dari POST.

✅ Ditambah:

js
Salin kode
LolastData?.username || '(Belum ada)'
Supaya kalau belum ada username dikirim, tetap ada tampilan aman:
"Username : (Belum ada)"


 */
                    )
    } else{
        Lorespon.writeHead(405, {'Content-Type': 'text/plain'})
        Lorespon.end('Hanya menerima POST server')
    }



})

Loserver.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000')
})
