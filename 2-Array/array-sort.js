/*
* @Author: zhanghang
* @Date:   2018-01-23 22:56:40
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 23:05:25
*/
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.reverse())
console.log(numbers.sort())
console.log(numbers.sort(function (a,b) {
    return b -a
}))

function compare(a,b) {
    if (a<b) {
        return -1
    }
    if (a>b) {
        return 1
    }
    return 0
}


console.log(numbers.sort(compare))

var friends = [{
    name: 'John',age: 30
},{
    name: 'Ana',age: 20
},{
    name: 'Chris',age: 25
}]

function comparePerson(a,b) {
    if (a.age<b.age) {
        return -1
    }
    if (a.age>b.age) {
        return 1
    }
    return 0
}

console.log(friends.sort(comparePerson))

var names =['Ana','ana','john','John']
console.log(names.sort())

console.log(names.sort(function (a,b) {
    if (a.toLowerCase()<b.toLowerCase) {
        return -1
    }
    if (a.toLowerCase()>b.toLowerCase) {
        return 1
    }
    return 0
}))
