const http = require('http');
const port=3000;

http.createServer((req,res)=>{
    res.write('helloooooooo');
    res.end();
}).listen(port);