//使用流Stream
//All streams are instances of Eventemitter
const fs = require('fs')
const stream = require('stream');//有buffer，比fs好
//建输入流
const myReadStream = fs.createReadStream(__dirname + '/readme.txt');
const myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt')
myReadStream.setEncoding('utf8');
//使用管道
myReadStream.pipe(myWriteStream);//只要一行就可以

// let writeData = 'Hello world';
// myWriteStream.write(writeData)
// myWriteStream.end();
// myWriteStream.on('finish', () => {
//     console.log('finished')
// })

// let data = '';
// myReadStream.on('data', function (chunk) {
//     //console.log('new chunk received');
//     //data += chunk;
//     //console.log(chunk);//Buffer数据,数据多时，有许多个Buffer
//     myWriteStream.write(chunk);
// })
// myReadStream.on('end', () => {
//     //console.log(data);
// })

