let obj = {   //创建对象字面量
    name:'张三',
    age:18,
}
obj.girlfriend = '李四' //添加属性
obj.age = 20 //修改属性

delete obj.girlfriend //删除属性

let a = 'hello'
obj[a] = 'world'
console.log(obj)
