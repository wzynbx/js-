const fs = require('fs');
//const handler = require('./handler.js');

function route(handle, pathname,response,params) {//参数：路由对象和用户url
    console.log('Routing a request for ' + pathname);
    if (typeof handle[pathname] == 'function') {
        handle[pathname](response,params);
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
    }
}
module.exports.route = route;