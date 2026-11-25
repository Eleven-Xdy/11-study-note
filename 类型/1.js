const s = '[1, 2, 3]' //九个字符 空格也算字符  
const s1 = '[1,2,3]'  

const n = 123 //number类型
const b = true //boolean类型
const u = undefined //undefined类型
const m = null //null类型 空值
const o = {} //object类型
const a = [] //array类型
const f = function () {} //function类型
const p = Symbol('s') //symbol类型 独一无二的值 世界上没有两个值是相等的
const x = 123n //bigint类型
const y = -123 //-Infinity 负无穷大

console.log(s1 == s)  //false

new Date()