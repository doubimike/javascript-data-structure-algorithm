// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

// For example:

//     1 -> A
//     2 -> B
//     3 -> C
//     ...
//     26 -> Z
//     27 -> AA
//     28 -> AB 

/**
 * @param {number} n
 * @return {string}
 */

// 分析  其实和那个转换成2进制的差不太多，其实自己没解出来，思路有了吗
var convertToTitle = function(n) {
	var stack = []
	while (n !== 0) {
		var left = (n) % 26
		if (left === 0) {
			stack.push(String.fromCharCode(64 + 26))
			// 这个-1的点我咋就没想到呢
			n = parseInt(n / 26) - 1
		} else {
			stack.push(String.fromCharCode(left + 64))
			n = parseInt(n / 26)
		}

		// stack.push(String.fromCharCode(left + 65))



	}

	return stack.reverse().join('')

};
console.log(convertToTitle(26))
console.log(convertToTitle(27))

// console.log(convertToTitle(100))
// console.log(String.fromCharCode(64))