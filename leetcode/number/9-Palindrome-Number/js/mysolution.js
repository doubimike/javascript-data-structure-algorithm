// Determine whether an integer is a palindrome. Do this without extra space.

/**
 * @param {number} x
 * @return {boolean}
 */
// 分析 考点 循环 边界值判断

var isPalindrome = function(x) {
	var str = '' + x

	for (var i = 0, j = str.length - 1; i <= j; i++, j--) {
		if (str[i] !== str[j]) {

			return false
		}
	}

	return true
};


console.log(isPalindrome(0))
console.log(isPalindrome(121))
console.log(isPalindrome(12))

//上面这种方式是不行的  如果你想用字串來解是不行的，因為不能使用額外的空間。