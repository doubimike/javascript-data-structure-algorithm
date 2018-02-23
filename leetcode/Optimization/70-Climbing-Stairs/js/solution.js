/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 17:24:21
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 17:49:12
 */

//  n = 1， result = 1
// n = 2, result = 1+1 (爬1階兩次 + 一次爬兩階)
// n = 3, result = 1+2 (前面兩個case相加)
// n = 4, result = 3+2 (前面兩個case相加)
// 發現其實這題就是算費氏數列

var climbStairs = function(n) {
	if (n <= 1) {
		return 1
	}

	// 表示看不懂啊
	var prev = 1
	var cur = 1
	for (var i = 2; i <= n; i++) {
		var temp = cur
		cur = cur + prev
		prev = temp
	}

	return cur
}