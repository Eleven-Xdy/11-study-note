console.log(1);  //同步
new Promise((resolve, reject) => {
  console.log(2);    //同步
  resolve()
}).then(() => {    //异步
  console.log(3);
  setTimeout(() => {
    console.log(4);
  }, 0)
})
setTimeout(() => {
  console.log(5);
}, 0)
console.log(6);
