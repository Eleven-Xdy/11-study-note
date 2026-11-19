//var obj = {}
//obj.a = 1
var str = 'hello'  //字符串对象new String('hello')
str.a = 2  //往字符串对象身上添加属性a 添加后被删除 自动delete str.a
console.log(str)  //不报错但只读原始值[PrimitiveValue] 
console.log(str.a)  //undefined 


