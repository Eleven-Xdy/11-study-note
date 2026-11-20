function bar(){
    console.log(myname)
}
function foo(){
    var myname = '张三'
    bar()
}
var myname = '李四'
foo()
//全局执行上下文 变量环境 myname='李四' 
//foo执行上下文 myname='张三'
//bar执行上下文 myname='张三'
//输出：张三