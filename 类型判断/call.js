Function.prototype.mycall = function(context){
    //谁调用我，我就把谁里面的this指向context
    //谁调用我，我就把谁添加到context的这个对象中，再让context的这个对象执行
    context.fn = this;
    let res = context.fn();
    delete context.fn;
    return res;
}


let obj = {
    a :1
}
function foo(){
    console.log(this.a);
}
foo.mycall(obj);//1
