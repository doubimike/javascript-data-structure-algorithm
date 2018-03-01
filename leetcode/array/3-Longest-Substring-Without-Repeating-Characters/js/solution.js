/*
 * @Author: mike.zhang
 * @Date:   2018-03-01 15:19:36
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-03-01 17:12:08
 */

var lengthOfLongestSubstring = function(s) {
	var l = 0,
		r = -1 //滑动窗口为s[l...r]
	var res = 0
	var map = {}
	while (l < s.length) {
		if (r + 1 < s.length && !map[s[r + 1]]) {
			map[s[r + 1]] = true
			r++
		} else {
			// 重在理解  如果遇到重复的 则l要++到重复的那个
			map[s[l]] = false;
			l++
			// l会不断加加直到把  map[s[r+1]]变成false
		}

		// 每一次l或者r的变化，都会产生一个子字符串的方案，所以都可以计算一个值
		res = Math.max(res, r - l + 1)
	}

	return res

}

console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('a'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring('au'))