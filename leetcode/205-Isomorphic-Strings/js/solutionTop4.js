var isIsomorphic = function(s, t) {
	if (s === t) {
		return true
	}

	var lens = s.length
	if (lens !== t.length) return false

	// 为什么从1开始，因为0这个if判断肯定成立
	var i = 1
	while (i < lens) {
		if (s.indexOf(s[i]) === t.indexOf(t[i])) {
			i++
		} else break
	}

	return i === lens
}
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))