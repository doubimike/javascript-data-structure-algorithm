/*
 * @Author: mike.zhang
 * @Date:   2018-03-01 15:19:36
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-03-01 15:39:04
 */
// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// 思路  暴力解法 
// 利用map


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	if (!s) {
		return 0
	}

	var max = 1
	// 从第一个字符开始
	for (var i = 0; i < s.length - 1; i++) {
		var maxPerRound = 1
		var map = {}
		map[s.charAt(i)] = true

		for (var j = i + 1; j < s.length; j++) {
			if (map[s.charAt(j)]) {
				break
			} else {
				map[s.charAt(j)] = true
				maxPerRound++
			}
		}
		if (maxPerRound > max) {
			max = maxPerRound
		}
	}


	return max
};

// console.log(lengthOfLongestSubstring('abcabcbb'))
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('a'))
// console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('au'))