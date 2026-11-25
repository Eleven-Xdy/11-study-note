const stack = []  //栈

stack.push(1)//入栈
stack.push(2)
stack.push(3)
stack.push(4)

// console.log(stack[stack.length-1])// 4  栈顶元素 (栈顶元素的索引是栈的长度减1)
// console.log(stack.pop())// 4  出栈 (出栈的元素是栈顶元素)
// console.log(stack[stack.length-1])// 3  栈顶元素 (栈顶元素的索引是栈的长度减1)

//挨个拿出
while(stack.length > 0){
    let item = stack.pop()//出栈 (每次出栈的元素是栈顶元素)
    console.log(item);//4321
}


