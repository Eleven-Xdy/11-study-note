for (let i = 0; i < 5; i++) {//i会泄露到全局作用域污染全局变量
  console.log(i);
}
console.log(i) //5
//因为let是块级作用域，所以i在for循环外部是无效的