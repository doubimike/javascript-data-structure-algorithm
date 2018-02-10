// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.   ([])  true   ){ flase


/**
 * @param {string} s
 * @return {boolean}
 */

// 其实这个就是栈的思路
var isValid = function(s) {
	var left = '([{'
	var right = ')]}'
	if (s.length % 2 !== 0) {
		return false
	}

	if (left.indexOf(s[0]) < 0) {
		return false
	}
	var leftIndexArr = []

	for (var i = 0; i < s.length; i++) {
		var leftIndex = left.indexOf(s[i])

		if (leftIndex >= 0) {
			leftIndexArr.push(leftIndex)
			// console.log('leftIndexArr--', leftIndexArr)
		} else {
			// console.log('s[i]', s[i])
			// console.log('leftIndexArr[leftIndexArr.length - 1] ', leftIndexArr[leftIndexArr.length - 1])
			// console.log('right.indexOf(s[i])', right.indexOf(s[i]))

			if (leftIndexArr[leftIndexArr.length - 1] !== right.indexOf(s[i])) {


				return false
			}

			leftIndexArr.pop()
			// console.log('leftIndexArrhhh', leftIndexArr)
		}
	}

	return leftIndexArr.length === 0

};

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('){'))
console.log(isValid('([])'))