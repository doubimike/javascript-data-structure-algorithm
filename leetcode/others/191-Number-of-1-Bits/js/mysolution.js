/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 11:15:55
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 11:23:59
 */
// Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

// For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

// 翻譯
// 給一個整數，找出這個整數有幾個'1'，例如11用32-bit表示 '00000000000000000000000000001011'，總共有3個1，return 3
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 思路  应该是先转换成二进制，然后统计多少个1
var hammingWeight = function(n) {
	// var str = ''
	var count = 0
	while (n > 0) {
		var a = n % 2
		if (a === 1) {
			count++
		}
		n = parseInt(n / 2)

		// str = a + str
	}

	return count

};

console.log(hammingWeight(5))