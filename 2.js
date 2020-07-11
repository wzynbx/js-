console.log(__dirname);//当前目录
console.log(__filename);//当前文件
function callFunction(fun, name) {
    fun(name);
}
function Hi() {
    console.log("Hi...")
}
Hi();
var sayBye = function (name) {
    console.log(`bye,${name}`)
}
sayBye('ls');
callFunction(sayBye, 'zs')
callFunction((name) => {
    console.log(name + ", Bye...");
}, 'ww')