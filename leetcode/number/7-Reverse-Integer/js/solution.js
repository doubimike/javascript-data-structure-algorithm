var reverse = function(x) {
	// 为啥要减去1呢，可能是因为0吧
	var INT_MAX = Math.pow(2, 31) - 1
	if (0 <= x && x < 10) {
		return x
	}
	var nFlag = ''
	var str = x.toString()
	var rStr = nFlag + str.split('').reverse().join('')
	if (rStr.indexOf('-') !== -1) {
		rStr = '-' + rStr.replace('-', '')
	}

	var result = parseInt(rStr)

	if (result > INT_MAX || result < -(1 + INT_MAX)) return 0
	return result
};