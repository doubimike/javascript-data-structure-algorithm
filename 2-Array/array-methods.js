/*
* @Author: zhanghang
* @Date:   2018-01-23 22:16:08
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 22:24:47
*/

var zero =0
var positiveNumbers = [1,2,3]
var negativeNumbers = [-3,-2,-1]
var numbers = negativeNumbers.concat(zero,positiveNumbers)
console.log(numbers)


var isEven = function(x) {
    console.log(x)
    // return (x%2===0)?true: false
    return (x %2===0)
}

var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


console.log(numbers.every(isEven))
console.log(numbers.some(isEven))

numbers.forEach(function (x) {
    console.log(x%2===0)
})

var myMap = numbers.map(isEven)
console.log(myMap)
var evenNumbers = numbers.filter(isEven)
console.log(evenNumbers)

console.log(numbers.reduce(function (previous,current,index,array) {
    console.log('previous',previous)
    console.log('current',current)
    console.log('index',index)
    return previous + current
}))

