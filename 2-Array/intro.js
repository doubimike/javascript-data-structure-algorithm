/*
* @Author: zhanghang
* @Date:   2018-01-23 21:03:15
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-23 21:37:34
*/
var averageTempJan = 31.9
var averageTempFeb = 35.3
var averageTempMar = 42.4
var averageTempApr = 52
var averageTempMay = 60.8

var averageTemp = []
averageTemp[0] = 31.9
averageTemp[1] = 35.3
averageTemp[2] = 42.4
averageTemp[3] = 52
averageTemp[4] = 60.8

var daysOfWeek = new Array()
var daysOfWeek = new Array(7)
var daysOfWeek = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday')
var daysOfWeek = []
var daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

console.log(daysOfWeek.length)

for(var i =0;i<daysOfWeek.length;i++){
    console.log(daysOfWeek[i])
}

console.log('---')
var fibonacci =[]
fibonacci[1]=1
fibonacci[2]=2

for(var i =3 ;i<20;i++){
    
    fibonacci[i]= fibonacci[i-1] + fibonacci[i-2]
    
}

for(var i =1;i<fibonacci.length;i++){
    console.log(fibonacci[i])
}

var numbers = [0,1,2,3,4,5,6,7,8,9]
numbers[numbers.length]=10
numbers.push(11)
numbers.push(12,13)
numbers.unshift(-1)
console.log('numbers',numbers)

for(var i = numbers.length;i>0;i--){
    numbers[i]=numbers[i-1]
}
numbers[0]=-2
console.log('numbers',numbers)

// 这种方式会栈溢出
// for(var i=0;i<numbers.length;i++){
//     numbers[i+1]= numbers[i];
// }

// numbers[0]=-3

// console.log('numbers',numbers)

// 这样也不行，全部都变成-2了
// var length =numbers.length;
// for(var i=0;i<length;i++){
//     numbers[i+1]= numbers[i];
// }

// numbers[0]=-3

// console.log('numbers',numbers)
numbers.unshift(-4,-3)
console.log('numbers',numbers)

console.log(numbers.pop())
console.log('numbers',numbers)

for(var i =0;i<numbers.length;i++){
    numbers[i]= numbers[i+1]
}
console.log('numbers',numbers)

console.log(numbers.shift())
console.log('numbers',numbers)



numbers.splice(5,3)
console.log('numbers',numbers)
numbers.splice(5,0,3,4,5)

console.log('numbers',numbers)

numbers.splice(5,3,1,1,1)
console.log('numbers',numbers)
