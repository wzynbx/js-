//读写文件
const fs=require('fs');
//let readMe=fs.readFileSync("readme.txt",'utf8');//同步
let readMe=fs.readFile("readme.txt",'utf8',(err,data)=>{
    fs.writeFile('writeMe.txt',data,function(){
        console.log('writeMe has finished');
    })
});//异步

//等待4秒
// var waitTill=new Date(new Date().getTime()+4*1000);
// while(waitTill>new Date()){}

console.log('finished')
//console.log(readMe);
//fs.writeFileSync('writeMe.txt',readMe);