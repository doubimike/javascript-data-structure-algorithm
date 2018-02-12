// 這跟 LeetCode 283. Move Zeroes 很像，差別在於283移除的是0，這題移除的是重複的數字。
// 使用一個count來紀錄有多少不重複的元素。
// 當陣列中下一個元素與當前的元素重複，就跳過當前的元素，不重複就放在陣列中。

var removeDuplicates = function(nums) {
	if (nums === null || nums.length === 0) {
		return 0
	}
	if (nums.length === 1) {
		return 1
	}
	var count = 0
	// 说实话这个理解有点绕啊，有我自己更好的方法，就不看这个了
	for (var i = 1; i < nums.length; i++) {
		if (nums[count] !== nums[i]) {
			count++
			nums[count] = nums[i]
		}
	}

	return ++count
}