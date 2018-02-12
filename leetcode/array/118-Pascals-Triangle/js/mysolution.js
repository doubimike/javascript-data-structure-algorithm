// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 分析 找出数组生成的规律来  好像是  下面一个是上面两个的和的规律来着  找出来了就比较好弄了  
// 再次印证了有了思路才动笔，思路清楚了，离写出来就不远了
var generate = function(numRows) {
	var arr = []
	for (var i = 0; i < numRows; i++) {
		arr[i] = new Array(i + 1)
		if (i === 0) {
			arr[i] = [1]
		}
		if (i === 1) {
			arr[i] = [1, 1]
		}
	}

	for (var i = 2; i < numRows; i++) {
		for (var j = 0; j <= arr[i].length - 1; j++) {
			if (j === 0 || j === arr[i].length - 1) {
				arr[i][j] = 1
				console.log('arr[i][j] ', i, j)
			} else {
				arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j]
				console.log('arr[i][j] ', i, j, arr[i - 1][j - 1])
			}
		}
	}

	return arr



};

console.log(generate(1))
console.log(generate(2))
console.log(generate(3))
console.log(generate(4))
console.log(generate(5))