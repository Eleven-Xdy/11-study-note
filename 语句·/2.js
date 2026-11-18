let arr = [1,2,3,4,5]

//let res = [arr[0]**2,arr[1]**2,arr[2]**2,arr[3]**2,arr[4]**2]
for (let i=0;i<arr.length;i++){
    let val = arr[i]**2
    res.push(val)
}
console.log(res);