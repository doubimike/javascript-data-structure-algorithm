// 思路
// 用split把字串拆成陣列，例如 "Hello World " -> ['Hello','World', ' ']
// 取陣列最後一個元素，上面範例取出來的是空字串' '
// 空字串不是我們要的單字，往前再取到'World'，因此最後一個單字長度為5


var lengthOfLastWord = function(s) {
	var ary = s.split(/\s/)
	if (s.length === 0) {
		return 0
	}

	if (ary.length === 0) {
		return 0
	}

	while (ary.length > 0) {
		var v = ary.pop()
		if (v.length > 0) {
			return v.length
		}
	}

	return 0
}