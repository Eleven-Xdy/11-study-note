function bar() {
  var myname = '曹老板'
  let test1 = 100
  if (1) {
    let myname = '邢同学'
    console.log(test1);
  }
}

function foo() {
  var myname = '煌煌'
  let test = 2  //let+{}声明的变量,块级作用域
  {
    let test = 3
    bar()//调用bar函数,bar函数的作用域是foo函数内部的作用域
  }
}
var myname = '付总'
let myage = 18
let test = 1
foo()//调用foo函数,foo函数的作用域是全局作用域

//•不是定义的时候入栈！只有调用的时候才入栈
//bar、foo 只是在全局定义，定义阶段不会进调用栈
//只有写 foo()、bar() 这一行执行的时候，才入栈 全局>foo>bar

//•哪怕bar是在foo内部调用,bar的词法环境和foo没关系,
//只是调用栈上嵌套，词法查找不走调用栈！调用栈管“谁正在执行”,词法作用链管“变量去哪里找”
