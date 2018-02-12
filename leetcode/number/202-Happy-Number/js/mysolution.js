/*
* @Author: zhanghang
* @Date:   2018-02-10 23:18:37
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 00:03:30
*/
// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 19 is a happy number
// 下面是1的平方+9的平方
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

// 判斷一個數字是否為happy number。
// happy number 定義如下：當一個數的每位數平方後相加，大於1則重複每位數開平方相加的動作，如果最後得到1的話，這個數就是happy number，如果進入無窮迴圈，這個數就不是happy number。
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    var sum = 0
    var s = n +''

    for(var i =0;i<s.length;i++){
        sum = Math.pow(s[i],2)
    }

    if (sum===1) {
        return true
    }

    while(sum!==1){
        
    }

};