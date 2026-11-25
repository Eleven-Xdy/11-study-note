var obj = {
    name:'Tom',
    age : 18,
}
function foo(o){
o.age = 20
var person = o
person.age = 30
console.log(obj)
console.log(person)
}
obj.age = 19
foo(obj)

