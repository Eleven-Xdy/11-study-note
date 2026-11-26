Promise.prototype.then = function(thenCB){
    this.arr.push(thenCB)
}

function Promise(fn){
    this.status = 'pending' //状态
    this.arr = [thenCB]
    this.catchArr = []

   const resolve = () => { 
    this.status = 'fulfilled'  //成功
    for(let i = 0; i < this.arr.length; i++){   //执行的是then当时存起来的函数
        this.arr[i]()
    }
   }
   const reject = () => { 
    this.status = 'rejected'  //失败
    for(let i = 0; i < this.catchArr.length; i++){   //执行的是catch当时存起来的函数
        this.catchArr[i]()
    }
   }
   fn(resolve, reject)  //实参
}

let p = new Promise((resolve, reject) => {     //形参
   setTimeout(() => {
    resolve()
   }, 3000);
})

p.then(() => {
    foo()
})
.catch(() => {
    bar()
})
//then里面的代码要想执行，必须保证前面Promise的实例对象状态是fulfilled
//catch里面的代码要想执行，必须保证前面Promise的实例对象状态是rejected