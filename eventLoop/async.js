function A(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A');
            resolve()
        }, 1000)
    })
}

function B(){
    console.log('B');
}

A().then(B)




function A(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('A');
            resolve()
        }, 1000)
    })
    }

function B(){
    console.log('B');
}

async function foo(){   //async函数默认返回一个Promise对象
    await A()   //await只能约束Promise对象  await让右侧代码变成同步任务，将后续代码挤到微任务队列中
    B()
}
foo()
