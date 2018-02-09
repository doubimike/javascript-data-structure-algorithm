// Write a function to find the longest common prefix string amongst an array of strings.


/**
 * @param {string[]} strs
 * @return {string}
 */

// 思路，先找到长度最短的str，然后一个个去验证
// 考点：未知  可能是循环吧 双重循环
var longestCommonPrefix = function(strs) {
	if (strs.length === 0) {
		return ''
	}
	var shortest = strs.reduce(function(prev, current) {
		return (prev.length <= current.length) ? prev : current
	})


	for (var j = 0; j < shortest.length; j++) {
		for (var i = 0; i < strs.length; i++) {
			if (strs[i].indexOf(shortest.substring(0, j + 1)) !== 0) {
				return shortest.substring(0, j) ? shortest.substring(0, j) : ''
			}
		}
	}
	return shortest

};


console.log(longestCommonPrefix(['b', 'd', 'c']))
console.log(longestCommonPrefix([]))