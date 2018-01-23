/*
* @Author: zhanghang
* @Date:   2018-01-23 23:12:52
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 23:18:36
*/
'use strict'
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(numbers.toString())
var numbersString = numbers.join('-')
console.log(numbersString)

let myArray = new Int8Array(7)

let length = 5

let int16 = new Int16Array(length)

let array16 = []
array16.length = length;

for(let i=0;i<length;i++){
    int16[i]=i+1

}

console.log(int16)
console.log(array16)
console.log(myArray)
