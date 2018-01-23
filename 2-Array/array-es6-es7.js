/*
* @Author: zhanghang
* @Date:   2018-01-23 22:27:06
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 22:56:26
*/
'use strict'
var numbers = [1,2,3,4]
numbers.forEach((x)=>{
    console.log(x%2===0)
})
console.log('---')
for(let n of numbers){
    console.log(n%2===0?'event': 'odd')
}

let iterator = numbers[Symbol.iterator]()

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)



let aEntries = numbers.entries()
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)
console.log(aEntries.next().value)

let aKeys = numbers.keys()
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())
console.log(aKeys.next())

// 还未完全支持
// let aValues = numbers.values()
// console.log(aValues.next())
// console.log(aValues.next())
// console.log(aValues.next())
// console.log(aValues.next())
// console.log(aValues.next())

let numbers2 = Array.from(numbers)
console.log(numbers2)

let evens = Array.from(numbers,function (x) {
    return x%2===0
})
console.log('evens',evens)


let numbers3 = Array.of(1)
console.log(numbers3)

let numbers4 = Array.of(1,2,3,4,5,6)
console.log(numbers4)
// let numbersCopy = Array.of(...numbers4)

numbers4.fill(0)

console.log(numbers4)
numbers4.fill(2,1)

console.log(numbers4)

numbers4.fill(1,3,5)

console.log(numbers4)

let ones = Array(6).fill(1)
console.log(ones)

//arr.copyWithin(目标索引, [源开始索引], [结束源索引])
let copyArray = [1,2,3,4,5,6]
copyArray.copyWithin(0,3)
console.log(copyArray)
let copyArrayTwo = [1,2,3,4,5,6]
copyArrayTwo.copyWithin(1,3,5)
console.log(copyArrayTwo)
