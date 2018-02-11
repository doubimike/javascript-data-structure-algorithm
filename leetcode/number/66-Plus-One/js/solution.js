// 思路
// 陣列最後一個數是個位數，所以從後面開始讀，個位數+1後，如果有進位，儲存進位值，val = 0，沒進位直接存儲。
// 處理十位數，如果個位數有進位，十位數+1，再判斷十位數是否有進位
// 重複上面動做值到陣列結束

// 其实自己是想到了进位的，只不过懒到不想自己去实现了而已，这是一点需要改进的地方
var plusOne = function(digits) {
	var carry = 0
	for (var i = digits.length - 1; i >= 0; i--) {
		digits[i] = digits[i] + carry
		if (i === digits.length - 1) {
			digits[i] = digits[i] + 1
		}

		if (digits[i] == 10) {
			digits[i] = 0
			carry = 1
		} else {
			carry = 0
		}
	}

	if (carry === 1) {
		digits.unshift(carry)
	}

	return digits
}