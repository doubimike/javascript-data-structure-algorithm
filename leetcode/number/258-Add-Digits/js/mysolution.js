/*
* @Author: zhanghang
* @Date:   2018-02-10 09:06:54
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 09:16:37
*/
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

/**
 * @param {number} num
 * @return {number}
 */
 // 递归
var addDigits = function(num) {

    if ((num+'').length===1) {
        return num
    }

    var numStr = num+''
    var result = 0
    for(var i=0;i<numStr.length;i++ ){
        result+= parseInt(numStr[i])
    }
    return addDigits(result)
        
};  

console.log(addDigits(38))
console.log(addDigits(48))