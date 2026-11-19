function foo() {
  var myname = '宏宏'
  let test1 = 1
  const test2 = 2  //const定义的常量,不能重新赋值(和let不同)
  var innerBar = {   //创建一个对象,对象包含getName和setName方法
    getName: function() {
      console.log(test1);   //test1=1
      return myname
    },
    setName: function(name) {
      myname = name
    }
  }
  return innerBar  //返回innerBar对象,innerBar对象包含getName和setName方法
}
var bar = foo()  //调用foo函数,foo函数的作用域是全局作用域,返回innerBar对象
bar.setName('刘少')  //调用bar对象的setName方法,设置myname为'刘少'
bar.getName()  //调用bar对象的getName方法,返回myname='刘少'
console.log(bar.getName());  //输出1,刘少

//外层函数foo执行完本来应该销毁局部变量
//但是因为返回的innerBar里面的函数还引用了myname、test1、test2,所以作用域被保留形成闭包
//执行顺序：定义foo函数,调用foo函数### 执行顺序拆解

//1.`foo` 函数定义，此时不执行
//2.`var bar = foo()`：调用 `foo()`
// 创建 `foo` 的局部作用域：`myname='宏宏'`、`test1=1`、`test2=2`
// 创建 `innerBar` 对象，里面两个函数 `getName / setName`
// 这两个函数**诞生的时候，就捕获了 foo 的局部作用域**（闭包形成）
// return `innerBar`，赋值给全局变量 `bar`
// 正常来说：`foo` 调用完毕，它的局部变量栈应该销毁
// 但是 因为 `bar` 还持有 `getName、setName`，这两个函数引用着 `foo` 内部变量，所以 `foo` 的作用域被保留不会回收
// 3. `bar.setName('刘少')`
//执行 `setName`，修改闭包里面的 `myname`，**修改的是同一个变量**
//注意：`myname` 不是全局变量，是保存在闭包作用域里的私有变量，外面直接访问不到 `myname`
// 4. `bar.getName()`
// 打印 `test1` → 输出 `1`
// return `myname`，现在已经被改成 `刘少`
// 5.`console.log(...)` 打印返回值：`刘少`
