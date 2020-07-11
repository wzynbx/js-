//响应HTML
const fs=require('fs')
const http = require('http')
let onRequest = function (request, response) {
    console.log('Request received')
    //建议学一下Http协议
    response.writeHead(200, { 'Content-Type': 'text/html' });
    let myReadStream=fs.createReadStream(__dirname+'/10.html','utf8');

    // let htmlFile=`<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>
    // <p>hello world</p>
    // </body>
    // </html>`;
    // let myObj={
    //     name:"zs",
    //     job:'work',
    //     age:22,
    // }
    myReadStream.pipe(response);//管道流向response
}
const server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1')
console.log('Server started on locallhost port 3000');
