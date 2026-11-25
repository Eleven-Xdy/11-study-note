let obj = {};
let arr = [];
let func = function() {};

console.log(Object.prototype.toString.call(arr));
//Object.prototype.toString它会读取对象值的内部属性[[Class]]属性,并返回一个字符串
//call方法可以改变this指向,将Object.prototype.toString方法调用,并返回一个字符串
//返回值为字符串[object Array]

console.log(Object.prototype.toString.call(arr).slice(8,13)); 
//使用slice方法可以切割截取字符串,返回值为字符串Array,左闭右开包括8,不包括13

