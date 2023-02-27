const http = require('http');

// const server = http.createServer((req, res)=>{
//     console.log("Hello, Faizan Khan");
// });

const server = http.createServer((req, res) => {
  if (req.url === '/home') {
    res.end('Welcome home');
  } else if (req.url === '/about') {
    res.end('Welcome to About Us page');
  } else if (req.url === '/node') {
    res.end('Welcome to my Node Js project');
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(4000);