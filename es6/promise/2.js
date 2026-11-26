function xq(){
    setTimeout(() => {
        console.log('相亲成功')
    }, 3000);
}

function marry(){
    setTimeout(() => {
        console.log('结婚成功')
    }, 2000);
}

xq()
marry()  //这里会先打印结婚成功,再打印相亲成功






function xq(){
    setTimeout(() => {
        console.log('相亲成功')
        marry()
    }, 3000);
}

function marry(){
    setTimeout(() => {
        console.log('结婚成功')
    }, 2000);
}
xq() //这里会先打印相亲成功,再打印结婚成功
 






function xq(){
    return new Promise((resole, reject) => {
       setTimeout(() => {
        console.log('相亲成功');
        resole()
    }, 3000); 
    })
}

function marry(){
    return new Promise((resole, reject) => {
       setTimeout(() => {
        console.log('结婚成功');
        resole()
    }, 2000);
    })
}

function baby(){
    return new Promise((resole, reject) => {
       setTimeout(() => {
        console.log('生孩子成功')
        resole()
       }, 1000);
    })
}

xq().then(() => {
    return marry() 
    })
    .then(() => {
        baby()
    })

// xq().then(() => {
//     marry().then(() => {
//         baby()
//     })
// })



