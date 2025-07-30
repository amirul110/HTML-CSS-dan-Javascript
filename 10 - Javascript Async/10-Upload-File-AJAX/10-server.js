const http = require('http');
const formidable = require('formidable'); // ← install dulu dengan: npm install formidable
const fs = require('fs');

const server = http.createServer((req, res) => {
    // CORS biar bisa diakses dari localhost lain
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'POST' && req.url === '/') {
        const form = new formidable.IncomingForm({ uploadDir: './uploads', keepExtensions: true });

        form.parse(req, (err, fields, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error parsing form');
                return;
            }

            console.log("Data diterima (POST):", fields);
            console.log("File diterima:", files.profile?.filepath);

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(`Server menerima:\nUsername: ${fields.username}\nPassword: ${fields.password}\nFile: ${files.profile?.originalFilename}`);
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
