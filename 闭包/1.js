var arr = []

for(var i = 0;i<=5;i++){
    arr.push(function(){
        console.log(i)
    })
}//for循环不形成作用域 i作用全局 i=6

for(let j = 0;j<arr.length;j++){
    arr[j]()
}

//用var和let结果不同
//用var结果：0123456
//用let结果：012345
//原因：var是函数作用域,let是块级作用域
//var是函数作用域,在函数内部定义的变量,在函数外部可以访问
//let是块级作用域,在函数内部定义的变量,在函数外部不能访问