/*
* @Author: zhanghang
* @Date:   2018-01-23 23:06:15
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 23:12:38
*/
'use strict'
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.indexOf(10))
console.log(numbers.indexOf(100))
numbers.push(10)
console.log(numbers.lastIndexOf(10))
console.log(numbers.lastIndexOf(100))

let numbersTwo = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function multipleOf13(element,index,array) {
    return (element%13===0)
}

console.log(numbersTwo.find(multipleOf13))
console.log(numbersTwo.findIndex(multipleOf13))

// console.log(numbers.includes(10))
// console.log(numbers.includes(4,5))


