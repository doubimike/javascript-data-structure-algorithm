/*
* @Author: zhanghang
* @Date:   2018-02-10 23:02:04
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 23:08:29
*/
// Given an integer, write a function to determine if it is a power of three.

// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if (n===0) {
        return false
    }
    if (n===1) {
        return true
    }
  while (n!==3) {
        if (n%3===0) {
            n = Math.floor(n/3)
        }else {
            return false
        }
    }

    return true  
};

console.log(isPowerOfThree(3))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(27))
console.log(isPowerOfThree(28))