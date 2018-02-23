/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 15:38:54
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 15:46:59
 */
// Reverse bits of a given 32 bits unsigned integer.

// For example, given input 43261596 (represented in binary as 00000010100101000001111010011100), return 964176192 (represented in binary as 00111001011110000010100101000000).

// Follow up:
// If this function is called many times, how would you optimize it?

// Related problem: Reverse Integer


/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	var arr = n.toString(2).split('')
	while (arr.length !== 32) {
		arr.unshift('0')
	}
	return parseInt(arr.reverse().join(''), 2)
};

console.log(reverseBits(43261596))