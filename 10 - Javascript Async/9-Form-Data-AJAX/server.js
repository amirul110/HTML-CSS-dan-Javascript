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

            console.log("Data diterima (POST):", LoparsedData);

            Lorespon.writeHead(200, { 'Content-Type' : 'text/plain'});
            Lorespon.end(`Server menerima:\nUsername: ${LoparsedData.username}\nPassword : ${LoparsedData.password}`)
        })
    } else if (Lorequest.method === 'GET' && Lorequest.url === '/') {
                Lorespon.writeHead(200, { 'Content-Type': 'text/html'});
                Lorespon.end(`
                 <h2>Data terakhir yang dikirim (POST): </h2>
                 <p>Username : ${LolastData?.username || '(Belum ada)'}</p>
                 <p>Password : ${LolastData?.password || '(Belum ada)'}</p>
                `

                    )
    } else{
        Lorespon.writeHead(405, {'Content-Type': 'text/plain'})
        Lorespon.end('Hanya menerima POST server')
    }



})

Loserver.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000')
})
