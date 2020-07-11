const fs=require('fs')
function home(response){
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/index.html','utf8').pipe(response);
}
function review(response){
    response.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname+'/review.html','utf8').pipe(response);
}

function api_records(response,params){
    response.writeHead(200,{'Content-Type':'application/json'});
    // let jsonObj={
    //     name:'张三',
    //     age:22,
    // };
    response.end(JSON.stringify(params));
}
module.exports={
    home,
    review,
    api_records,
}
