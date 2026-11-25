let str = '({[]})'

//123321 判断是否对称 因为不是数字想办法让v8判断 { = } 用对象存储

var isValidn= function(s){  //判断字符串是否是有效的括号序列
    const obj = {
        '(':')',
        '[':']',
        '{':'}',
    }
    const stack = [] //栈
    var isValid = function(s) {
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack = []
  for (let i = 0; i < s.length; i++) {
    let item = s[i]  // '}'
    if (item in obj) {  // 是对象中的一个key 
      stack.push(item)
    } else {  // 右括号
      if (obj[stack.pop()]  !== item) {
        return false
      }  
    }
  }

  return stack.length === 0
};
    return stack.length === 0
};

console.log(isValidn(str)); //输出true
