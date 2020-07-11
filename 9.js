//响应一个json给客户端
const http = require('http')
let onRequest = function (request, response) {
    console.log('Request received')
    //建议学一下Http协议
    response.writeHead(200, { 'Content-Type': 'application/json' });
    let myObj={
        name:"zs",
        job:'work',
        age:22,
    }
    response.end(JSON.stringify(myObj));
}
const server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1')
console.log('Server started on locallhost port 3000');
