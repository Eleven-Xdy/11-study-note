const n = 123 //数字对象new Number(123)
n.a = 2 //往数字对象身上添加属性a 添加后被删除 自动delete n.a
console.log(n)//123 [[PrimitiveValue]]
console.log(n.a)//undefined
