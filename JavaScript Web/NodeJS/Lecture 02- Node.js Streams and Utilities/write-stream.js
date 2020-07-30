const http = require('http');
const fs = require('fs');
const port = 4000;

http.createServer((req, res) => {
    if (req.method === 'POST') {
        const stream = fs.createWriteStream("./dataStorage.txt");
        req.on("data", data => {
            stream.write(data);
        });

        req.on('end', () => {
            res.end();
        })
    }
}).listen(port)