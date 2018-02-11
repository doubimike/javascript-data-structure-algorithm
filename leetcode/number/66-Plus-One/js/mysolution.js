// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.

// You may assume the integer do not contain any leading zero, except the number 0 itself.

// The digits are stored such that the most significant digit is at the head of the list.

// 翻譯
// 給一包含非數整數的陣列，其中每一個值代表該位數的值，對這個陣列加1。
// 範例：
// 19 = [1,9] ， 19+1 = 20 = [2,0]。


/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 分析  考点 感觉没啥考点 注意边界值      考点：最大的数据表示情况
var plusOne = function(digits) {
	var str = digits.join('')
	var num = str - 0
	var newNum = num + 1
	var newStr = newNum + ''
	return newStr.split('').map(function(item) {
		return parseInt(item)
	})
};

console.log(plusOne([1, 9]))
console.log(plusOne([0, 0]))
console.log(plusOne([]))
// console.log(plusOne([1,9]))

// 上面这种超过了number的最大值的时候会失效

// Input:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// Output:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
// Expected:
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]