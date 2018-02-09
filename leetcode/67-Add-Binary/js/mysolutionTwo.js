// 一開始的想法是將a,b轉為數字，相加後再轉回bits，程式碼在下面，不過題目給的string長度轉成int時會超過int max，所以這個方法不能用
// 改用純字串來處理，先處理位數一樣的部分，ex. "111"+"10" ，先處理"11"+"10"
// 以 "11"+"10"為例，個位數1+0=1； 十位數1+1=2，因為bits是二進位，因此2->0，然後儲存進位資訊，這時候要回傳的字串為'10'
// "111"最前面的"1"+剛才的進位1 = 2， 2-> 0 ， 會傳字串為'010'
// 因為剛才還有進位，所以要把進位的1加到字串前面，最後回傳'1010'


var addBinary = function(a, b) {
	var sumStr = ''
	var carry = 0
	var longStr, shortStr
	if (a.length > b.length) {
		longStr = a
		shortStr = b
	} else {
		longStr = b
		shortStr = a
	}

	for (var i = shortStr.length - 1, j = longStr.length - 1; i >= 0; i--, j--) {
		var sum = parseInt(shortStr[i]) + parseInt(longStr[j]) + carry
		// console.log('parseInt(shortStr[i])', parseInt(shortStr[i]))
		// console.log('parseInt(longStr[i])', parseInt(longStr[i]))
		// console.log('sum', sum)
		if (sum >= 2) {
			carry = Math.floor(sum / 2)
			sumStr = (sum % 2) + sumStr
		} else {
			sumStr = sum + sumStr
			// console.log('sumStr', sumStr)
			carry = 0
		}
	}

	leftStr = longStr.slice(0, longStr.length - shortStr.length)
	// console.log('carr]', carry)
	if (!carry) {
		return leftStr + sumStr
	}

	if (carry) {
		return addBinary(leftStr, carry.toString()) + sumStr
	}

	// return sumStr
}

console.log(addBinary('10', '1'))
console.log(addBinary('1011', '1'))