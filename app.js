const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("Hello, Faizan Khan");
});


server.listen(4000);