/*
* @Author: zhanghang
* @Date:   2018-01-24 21:04:32
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-01-24 22:31:38
*/
'use strict'
function Stack(){
    let items = []
    this.push = function (element) {
        items.push(element)
    }
    this.pop = function () {
        return items.pop()
    }
    this.peek = function () {
        return items[items.length-1]
    }

    this.isEmpty = function () {
        return items.length===0
    }

    this.size = function () {
        return items.length
    }
    this.clear = function () {
        items = []
    }
    this.print = function () {
        
            console.log(items.toString())    
        
        
    }
    this.toString = function () {
       return items.toString()
    }
}

let stack = new Stack()
console.log(stack.isEmpty())

stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)
console.log(stack.size())
console.log(stack.isEmpty())

stack.push(15)
stack.pop()
stack.pop()
console.log(stack.size())
stack.print()


// class StackES6{
//     constructor(){
//         this.items = []
//     }

//     push(element){
//         this.items.push(element)
//     }
//     // 其他方法
// }

function divideBy2(decNumber) {
    var remStack = new Stack(),
    rem,
    binaryString = ''
    while(decNumber>0){
        rem = Math.floor(decNumber%2)
        remStack.push(rem)
        decNumber = Math.floor(decNumber/2)
    }

    while(!remStack.isEmpty()){
        binaryString+= remStack.pop().toString()
    }

    return binaryString
}

// console.log(divideBy2(5))
// console.log(divideBy2(233))
// console.log(divideBy2(10))
// console.log(divideBy2(1000))



function baseConverter(decNumber,base) {
    var remStack = new Stack(),
    rem,
    baseString='',
    digits = '0123456789ABCDEF'
    while(decNumber>0){
        rem = Math.floor(decNumber%base)
        remStack.push(rem)
        decNumber = Math.floor(decNumber/base)
    }
    while(!remStack.isEmpty()){
        baseString+= digits[remStack.pop()]
    }
    return baseString
}

// console.log(baseConverter(5,3))
console.log(baseConverter(23311,16))
// console.log(baseConverter(10,3))
// console.log(baseConverter(1000,3))


function parenthesesChecker(symbols) {
    let stack = new Stack(),
    balanced = true,
    index =0,
    symbol,top,
    opens ='([{',
    closers =')]}'

    while(index<symbols.length&&balanced){
        symbol = symbols.charAt(index)
        if(opens.indexOf(symbol)>=0){
            stack.push(symbol);
            console.log(`open symbol -stacking ${symbol}`)
        }else {
            console.log(`close symbol ${symbol}`)

            if (stack.isEmpty()) {
                balanced = false
                console.log('Stack is empty, no more symbols to pop and compare')
            }else {
                top = stack.pop()
                if(!opens.indexOf(top)===closers.indexOf(symbol)){
                    balanced =false
                    console.log(`poping symbol ${top} - is not a match compared to ${symbol}`);
                }else {
                    console.log(`poping symbol ${top} - is is a match compared to ${symbol}`);
                }
            }            
        }
        index++
    }
    if (balanced&&stack.isEmpty()) {
        return true
    }
    return false
}
// console.log(parenthesesChecker('{([])}')); //true
// console.log(parenthesesChecker('{{([][])}()}')); //true
console.log(parenthesesChecker('[{()]')); //false


function towerOfHanoi(n,from,to,helper){
    if(n>0){
        towerOfHanoi(n-1,from,helper,to)
        to.push(from.pop())
        console.log('-----');
        console.log('Source: ' + from.toString());
        console.log('Dest: ' + to.toString());
        console.log('Helper: ' + helper.toString());
        towerOfHanoi(n-1, helper, to, from);
    }
}

var source = new Stack()
source.push(3)
source.push(2)
source.push(1)

var dest = new Stack()
var helper = new Stack()
towerOfHanoi(source.size(), source, dest, helper);
source.print()
helper.print()
dest.print()


