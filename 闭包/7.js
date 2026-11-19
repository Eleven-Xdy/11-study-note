var arr = []

for(var i = 0;i<=5;i++){
    //形成独立作用域，每一轮把当前i传进去，形成闭包
    (function fn(j){
        arr.push(function(){
            console.log(j)
        })
    })
    fn(i)
}
for(let j = 0;j<arr.length;j++){
    arr[j]() // 依次输出 0 1 2 3 4 5
}
