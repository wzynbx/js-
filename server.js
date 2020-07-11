//用模块化思想组织代码，重构路由
//响应HTML
const fs = require('fs')
const http = require('http')
const url = require('url');
//const route=require("./router.js")
const querystring = require('querystring');

function startServer(route, handle) {
    let onRequest = function (request, response) {
        let pathname = url.parse(request.url).pathname;
        //console.log(pathname) //输出不包括url的前部分
        console.log('Request received ' + pathname);
        var data = [];
        request.on("error", function (err) {
            console.error(err);
        }).on('data', function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            if (request.method === "POST") {
                if(data.length>1e6){
                    request.connection.destroy();
                }
                data=Buffer.concat(data).toString();
                route(handle, pathname, response, querystring.parse(data));//将字符串形式对象转成对象
            } else {
                var params = url.parse(request.url, true).query;//true要求得到对象
                route(handle, pathname, response, params); //每当用户有请求时，使用handle路由对象和用户请求url去执行路由处理程序route(,)  
            }
        });
    }
    const server = http.createServer(onRequest);
    server.listen(3000, '127.0.0.1')
    console.log('Server started on locallhost port 3000');
}
module.exports.startServer = startServer;
