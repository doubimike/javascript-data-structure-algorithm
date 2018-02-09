// Given two binary strings,
// return their sum(also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// 思路  考点    maybe 栈
// 我的思路   先把二进制转换成十进制，然后想加，然后把和再转换成二进制，转换成二进制我知道，用栈，可惜这个解法在大数据情况下好像通不过，可能是代码有问题
// 
// 
// 一開始的想法是將a,b轉為數字，相加後再轉回bits，程式碼在下面，不過題目給的string長度轉成int時會超過int max，所以這個方法不能用
var addBinary = function(a, b) {

	var sum = changeToTen(a) + changeToTen(b)
	console.log(sum)
	return changeToBinary(sum)
}


var changeToTen = function(s) {
	var sum = 0
	for (var i = s.length - 1, j = 0; i >= 0; i--, j++) {
		// console.log('s[i]', s[i])
		// console.log('pow', Math.pow(2, j))
		sum = sum + parseInt(s[i] * Math.pow(2, j))
		console.log('sum', sum)
	}
	return sum
}
var changeToBinary = function(s) {
	var stack = []
	console.log(s % 2)
	while (s !== 0) {
		stack.push(s % 2)
		s = Math.floor(s / 2)
	}
	console.log(stack)
	var result = ''
	while (stack.length > 0) {
		result += stack.pop()
	}


	return result === '' ? '0' : result
}


// console.log(changeToTen('1000'))
// console.log(Math.pow(2, 1))
// console.log(addBinary('1000', '1000'))

// 21046984  + 27883295 = 48930279

console.log(addBinary('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101', '110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011'))

console.log(changeToTen('10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101'))



var addBinary = function(a, b) {
	var sum = parseInt(a, 2) + parseInt(b, 2)
	var bitStr = ''
	while (sum > 0) {
		bitStr = sum % 2 + bitStr
		sum = Math.floor(sum / 2)
	}

	return bitStr === '' ? '0' : bitStr
}