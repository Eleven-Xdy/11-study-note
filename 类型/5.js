var person = {
    name:'Tom',
    age : 18,
    like:{
        sport:'篮球',
        music:'摇滚'
    }
}

var person2 = person
person.like={sport:'足球', music:'流行'}
person.age = 30
console.log(person2)