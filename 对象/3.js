//let obj = new Object()  //  {}
//console.log(obj)

//let arr = new Array()  //  []
//console.log(arr)

// let car1 = {
//     name:'su7',
//     price:1000000,
//     color:'red',
// }
// let car2 = {
//     name:'su7',
//     price:1000000,
//     color:'green',
// }

Car.prototype.push = function(){}
function Car(color){   //准备构造函数,首字母大写
    this.name = 'su7'
    this.price = 1000000
    this.length = 5000
    this.color = color   //批量赋值
    }
let car1 = new Car('red')  //car1.__proto__ === Car.prototype
let car2 = new Car('green')
let car3 = new Car('pink')

console.log(car1)  //构造函数中的属性最终会成为对象的属性,对象的属性是可变的
console.log(car2)
console.log(car3)
