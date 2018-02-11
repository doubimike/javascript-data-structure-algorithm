// 翻譯
// 判斷一個32bits的int整數是否為4的倍數。
// 進階：不用迴圈，遞迴解題。
// 思路
// 一直除4，如果出現餘數，就不是4的整數。

var isPowerOfFour = function(num) {
	if (num <= 0) {
		return false
	}
	if (num === 1) {
		return true
	}
	if (num % 2 === 1) {
		return false
	}

	while (num >= 4) {
		if (num % 4 !== 0) {
			return fasle
		}
		num = parseInt(num / 4)
	}

	return num === 1
}