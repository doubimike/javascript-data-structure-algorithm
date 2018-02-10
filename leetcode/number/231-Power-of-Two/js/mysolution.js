/*
* @Author: zhanghang
* @Date:   2018-02-10 23:15:26
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 23:16:14
*/
// Given an integer, write a function to determine if it is a power of two.

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n>1){
        if (n%2!==0) {
            return false
        }
        n = parseInt(n/2)
    }

    return n===1
};