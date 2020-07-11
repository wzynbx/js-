console.log("hello")
setTimeout(() => {
    console.log("1秒后输出")
}, 1000);
let time = 1;
const timer = setInterval(() => {
    console.log(time);
    time += 2;
    if (time > 8)
        clearInterval(timer)

}, 2000)