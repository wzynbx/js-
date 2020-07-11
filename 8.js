//实现一个外服务器，响应一个纯文本给客户端
const http = require('http')
let onRequest = function (request, response) {
    console.log('Request received')
    //建议学一下Http协议
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('hello from out application');
}
const server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1')
console.log('Server started on locallhost port 3000');
