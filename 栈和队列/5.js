var isValid = function (s) {
  const obj = {
    '(': ')',
    '{': '}',
    '[': ']'
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    // 是左括号，压进栈
    if (item in obj) {
      stack.push(item)
    } else {
      // 右括号，取出栈顶对比
      if (obj[stack.pop()] !== item) {
        return false
      }
    }
  }
  // 栈必须全部清空，左括号不能剩下
  return stack.length === 0
};
s = "()"
console.log(isValid(s));
