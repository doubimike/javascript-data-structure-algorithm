// 進階
// 上面雙迴圈的時間複雜度是O(n^2)，效率明顯不太好，用map就可以在一次走訪中找到i,j的位置

// 自己尝试失败了

var twoSum = function(nums, target) {
	var map = {}

	for (var i = 0; i < nums.length; i++) {
		var v = nums[i]
		// 这两个顺序不一样就会出现问题？
		// if (!map[v]) {
		// 	map[v] = i
		// }
		console.log(map)
		// 大于等于0是关键，因为索引可能是0 顺序不重要啊
		if (map[target - v] >= 0) {

			return [map[target - v], i]
		} else {
			map[v] = i
		}
	}
}
console.log(twoSum([2, 3, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))



var twoSum = function(nums, target) {
	var map = {}
	for (var i = 0; i < nums.length; i++) {
		var v = nums[i]

		if (map[target - v] >= 0) {
			// 如果 target - v可以在map中找到值x，代表之前已經出現過值x， target = x + v
			// 因此回傳 x的位置與目前v的位置 
			return [map[target - v], i]
		} else {
			// 使用map儲存目前的數字與其位置  

			map[v] = i;
		}
	}
}