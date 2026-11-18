let a = 1; //全局作用域的a

function foo(){
    let a = 2; //函数作用域的a
    console.log(a) 
}
  foo()
  console.log(a) 
