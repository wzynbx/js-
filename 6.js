const fs=require('fs');
// fs.unlink('writeMe.txt',()=>{
//     console.log('删除文件writeMe.txt');
// });//删除文件，异步
fs.mkdir('stuff',()=>{
    fs.readFile('readMe.txt','utf8',(err,data)=>{
        fs.writeFile('./stuff/writeMe.txt',data,()=>{
            console.log('copy successfully');
        })
    })
})