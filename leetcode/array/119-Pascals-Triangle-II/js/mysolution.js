// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note:
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	return generate(rowIndex + 1)[rowIndex]
};

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