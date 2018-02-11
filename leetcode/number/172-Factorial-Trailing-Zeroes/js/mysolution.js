// Given an integer n,
// return the number of trailing zeroes in n!.

// Note: Your solution should be in logarithmic time complexity.

// 翻譯
// 給一個正整數n，回傳n!中有幾個0
// 注意：你的解法應該是log(n)的時間複雜度。
// 範例： n = 5 ; n! = 120 回傳 1。

/**
 * @param {number} n
 * @return {number}
 */
// 分析  n!  是什么啊？？？5*4*3*2吗   阶乘？ 用递归会stack overflow 啊  改成循环也会出现因为阶乘太大了，所以这种方式不行
var trailingZeroes = function(n) {
	var num = multiple(n)

	var str = num + ''
	return calZero(str)

};

var calZero = function(str) {
	var arr = str.split('')
	var count = 0
	while (arr.pop() === '0') {
		count++
	}

	return count
}

// console.log(calZero('000'))


// 有时候老觉得递归会so，并不是一种很好的方法
var multiple = function(n) {
	if (n === 0) {
		return 1
	}
	if (n === 1) {
		return 1
	}

	// return n * multiple(n - 1)
	var result = n
	while (n - 1 > 0) {
		result = result * (n - 1)
		n--
	}

	return result
}

console.log(multiple(10))
// console.log(trailingZeroes(5))
// console.log(trailingZeroes(4))
// console.log(trailingZeroes(30))

// console.log(trailingZeroes(1808548329))