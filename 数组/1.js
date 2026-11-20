let arr = [1, 2, 3, 4, 5];
arr.unshift(0);   //在数组开头添加一个元素
console.log(arr);
arr.shift();   //删除数组开头的元素
console.log(arr);
arr.push(6);   //在数组结尾尾添加一个元素
console.log(arr);
arr.pop();   //删除数组结尾尾的元素
console.log(arr);

let res = arr.splice(2,2);   //第一个2：从2开始删  第二个2：删2个元素
console.log(res);  //[3 4]删掉的部分
console.log(arr);  //[1 2]还剩下的数组

