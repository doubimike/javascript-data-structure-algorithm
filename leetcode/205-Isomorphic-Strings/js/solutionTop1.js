var isIsomorphic = function(s, t) {
	var locationS = new Array(256)
	var locationT = new Array(256)
	locationS.fill(0)
	locationT.fill(0)

	// 这个逻辑说实话不那么明显啊
	// 将s和t的相对应字符指向同一个值，代表他们相等，如果值不相等，那么就不一样，是逆向的
	for (var i = 0; i < s.length; i++) {
		if (locationS[s.charCodeAt(i)] !== locationT[t.charCodeAt(i)]) {
			return false
		}
		locationS[s.charCodeAt(i)] = i + 1 //这个1其实应该是随便的
		locationT[t.charCodeAt(i)] = i + 1 //这个1其实应该是随便的
	}

	return true
}

// console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
// console.log(isIsomorphic('paper', 'title'))