Number([1,2,3])
console.log(Number([1,2,3]))
//ToNumber([1,2,3]) ==> ToPrimitive([1,2,3], Number) ==> [1,2,3].toString() ==> "1,2,3"
//ToNumber("1,2,3") ==> NaN

if([]){
    console.log(123)
}