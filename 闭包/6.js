function counter() {
  let n = 0
  return function () {
    n++
    return n
  }
}
const add = counter()
console.log(add()) //1
console.log(add()) //2
console.log(add()) //3

// 1. `counter` 函数定义，此时不运行。
// 2. `const add = counter()`：调用外层函数`counter`
// 创建`counter`的局部作用域，声明局部变量 `n = 0`
// 创建内层匿名函数，**内层函数在定义时捕获了外层作用域里的变量 n，形成闭包**
// 把这个内层函数 return 出去，赋值给全局变量`add`
// 正常情况下，`counter`执行完毕，局部作用域应该销毁；但是闭包生效：内层函数`add`还持有对`n`的引用，所以`n`保留在内存，不会被回收。
// 3. `console.log(add())` 第一次执行：
// 执行内层函数，访问闭包保存的`n`，`n++` → n=1，返回 1
// 4. `console.log(add())` 第二次执行：
// 再次访问**同一个闭包里面的 n**，`n++` → n=2，返回 2
// 5. `console.log(add())` 第三次执行：
// n++ → n=3，返回 3