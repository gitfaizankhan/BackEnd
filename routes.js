const fs = require('fs');

const requestHandler = (request, response)=>{
    const url = request.url;
    const method = request.method;
    if(url === '/'){
    let myd;
    return fs.readFile('message.txt', 'utf8', function(_err, data){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<hedd><title>My First Page</title></head>');
        response.write(`<body><p>${data}</p><form action="/message" method="POST"><input name="message" type="text"> <button type="submit">Send</button></form></body>`);
        response.write('</html>');
        return response.end();
    });
        
    }
    if(url === "/message" && method === "POST"){
        const body = [];
        request.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        }); //data event & function

        return request.on('end', ()=>{ // end event
            // buffer
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt',message, err=>{
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            }); // write file sync stand for synchronous
        });
        
    }
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<hedd><title>My First Page</title></head>');
    response.write('<body><h1>Hello From My Node.js Server</h1></body>');
    response.write('</html>');
    response.end();
    
}



//  +++++++++++++++++++++++ differebt types of export


// global obeject export by node.js
// module.exports = requestHandler;


module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

// module.exports.handler = requestHandler;
// exports.handler = requestHandler;