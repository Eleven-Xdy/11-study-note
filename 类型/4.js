var obj = {
    name:'Tom',
    age : 18,
}
function foo(o){
var person = {}   //创建一个新对象
person.age = o.age   //将o的age属性赋值给person的age属性19
person.name = o.name  //Tom
o.age = 20
console.log(obj) //20
console.log(person)  //19
}
obj.age = 19
foo(obj)  //调用函数

