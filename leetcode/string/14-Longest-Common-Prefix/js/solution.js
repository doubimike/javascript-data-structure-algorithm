// 思路
// 比對前兩個字串，從頭開始取出相同的部分為共同字首
// 後面的字串只要與目前的共同字首比對即可
// ['abcd','abccc','abdec'] ，一開始'abcd','abccc'共同字首前3碼'abc'
// 接下來只要將'abc','abdec'做比對，發現剩下'ab'，也就是最長的共同字首

var longestCommonPrefix = function(strs) {
	if (strs === null || strs.length === 0) return ''

	var same = strs[0]
	for (var i = 1; i < strs.length; i++) {
		var str = strs[i]
		var j = 0
		for (; j < same.length; j++) {
			if (same[j] !== str.charAt(j)) {
				break
			}
		}
		same = same.slice(0, j)
	}



	return same
}