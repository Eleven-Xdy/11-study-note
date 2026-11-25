function myInstanceOf(l, r) {
  // 第一步：如果 l 不是引用类型（原始值 / null）直接返回false
  if (typeof l !== 'object' || l === null) {
    return false
  }
  // 沿着原型链一直往上找
  while (l !== null) {  // 找到：实例的隐式原型 === 构造函数的显式原型 → true
    if (l.__proto__ === r.prototype) {
      return true
    }    // 没找到，继续往上走一层原型
    l = l.__proto__
  }// 循环走到原型链顶端 null 都没匹配上 → false
  return false
}

console.log(myInstanceOf([], Object));  // true
console.log(myInstanceOf([], Array));  // true
console.log(myInstanceOf(123, Number)); // false（原始类型）
console.log(myInstanceOf(null, Object));// false