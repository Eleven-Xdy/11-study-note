const myQueue = function () {
  this.stack1 = [] // 接收新增元素（入队）
  this.stack2 = [] // 输出元素（出队）
}
// 入队：新元素全部放到stack1
myQueue.prototype.push = function (x) {
  this.stack1.push(x)
}
// 出队
myQueue.prototype.pop = function () {
  // 如果输出栈空，把输入栈全部倒过来
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop()
}
// 查看队伍最前面是谁，不移除
myQueue.prototype.peek = function (){
  if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2[this.stack2.length - 1]
}
// 判断队列是不是空
myQueue.prototype.empty = function(){
  if (this.stack1.length === 0){
    if (this.stack2.length === 0) {
      return true
    }
  }
  return false
}
