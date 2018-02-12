// 思路
// 每一列第一個值都是1。
// 每一列第n個值則是上一列n-1位子+n位子的值。
// 假如是該列最後一個值Nx，前一列沒有Nx這個值，可以視為0。
// 有了以上規則，要算出毎一列的值就很簡單了，直接看下面程式碼。

var generate = function(numRows) {
	if (numRows === 0) {
		return []
	}

	// 放入第一列
	var trigle = [
		[1]
	]
	for (var i = 1; i < numRows; i++) {
		var prevRow = trigle[i - 1] // 前一列
		var curRow = [1] // 每一列開始都是1  
		for (var j = 1; j <= i; j++) {
			// 每一列的第n個值都是 前一列pre[n-1] + pre[n]
			var pre = prevRow[j - 1]
			var cur = prevRow[j] ? prevRow[j] : 0
			curRow.push(pre + cur)
		}
		trigle.push(curRow)
	}

	return trigle
}