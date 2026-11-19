function foo(){
    var age = 18
    let height = 1.8
    function bar(){
        console.log(age)
    }
    return bar
}

var baz = foo()
baz()
//输出：18
//height在foo函数内部定义,在bar函数外部无法访问
//bar函数可以访问foo函数内部的变量age
//bar函数可以访问foo函数内部的变量height
//bar函数的作用域是foo函数内部的作用域,而不是全局作用域