let obj = {};
let arr = [];
let func = function() {};
console.log(typeof obj);//object
console.log(typeof arr);//object
console.log(typeof func);//function

console.log(obj instanceof Object);//true
console.log(arr instanceof Array);//true  
// arr.__proto__ === Array.prototype array的原型对象是Array.prototype
console.log(arr.__proto__ === Array.prototype);//true
//Array.prototype的原型对象是Object.prototype
console.log(func instanceof Function);//true
