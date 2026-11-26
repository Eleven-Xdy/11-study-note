let a = 1
console.log(a)  //不耗时 同步代码

for (let i = 0; i < 1000; i++) {   //不耗时 同步代码
  console.log(i)
}

//setTimeout(() => {}, 1000)

setTimeout(() => {
  console.log('hello world')
},3000)
//耗时 异步代码 回调函数 沙漏模型 执行一次

setInterval(() => {
    console.log('hello world')
}, 3000);
//耗时 异步代码 回调函数 沙漏模型 执行多次

fetch('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer')
.then(res => {
    return res.json()
}).then(data => {
    console.log(data)
})
