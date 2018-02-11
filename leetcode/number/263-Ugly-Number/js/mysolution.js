// Write a program to check whether a given number is an ugly number.

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

// Note that 1 is typically treated as an ugly number.


/**
 * @param {number} num
 * @return {boolean}
 */

// 分析 考点  
// 14  2 7 
// 6  2 3
// 8 2 2 2 
// 换成问题就是找到所有的除数？这里可以用一个循环  先除2再除3再除5
// 看了一下答案，觉得自己的方案更好
var isUgly = function(num) {
	if (num === 0) {
		return false
	}
	var arr = [2, 3, 5]

	for (var i = 0; i < arr.length; i++) {
		while (num !== 1 && num % arr[i] === 0) {
			num = parseInt(num / arr[i])
		}

		if (num === 1) {
			return true
		}
	}

	return false

};

// 可以先把测试用例写好，必须想清楚那些边界极限情况

console.log(isUgly(14))
console.log(isUgly(6))
console.log(isUgly(8))
console.log(isUgly(1))
console.log(isUgly(0))