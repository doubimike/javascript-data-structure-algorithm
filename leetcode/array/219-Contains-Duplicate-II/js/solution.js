// 使用一個map存放出現過的數字以及位置
// 如果出現重複的數字，判斷目前位置與儲存的位置距離是否小於等於k，有的話直接回傳true
// 陣列中沒有符合的配對，回傳false


// 这个思路运用到了map，比我的方法好，而且自己以前也遇到过这种，可以通用的+
var containsNearbyDuplicate = function(nums, k) {
	if (nums.length <= 1) {
		return false
	}

	var map = {}
	for (var i in nums) {
		var v = nums[i]
		if (map[v] && (i - map[v] <= k)) {
			return true
		}
		map[v] = i
	}

	return false
}