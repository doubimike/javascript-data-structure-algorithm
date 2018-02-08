// 这个确实有点看不懂啊
var isIsomorphic = function(s, t) {
	if (s.length !== t.length) return false
	let dict = {}
	let used_t = new Set()
	for (var i = 0; i < s.length; i++) {
		var curt_s = s.charAt(i)
		var curt_t = t.charAt(i)
		if (!(curt_s in dict)) {
			if (used_t.has(curt_t)) {
				return false
			}
			dict[curt_s] = curt_t
			used_t.add(curt_t)
		}

		if (dict[curt_s] !== curt_t) {
			return false
		}

	}

	return true

}
console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))