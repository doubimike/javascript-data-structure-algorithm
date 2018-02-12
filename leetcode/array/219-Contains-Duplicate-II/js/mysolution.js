// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//  翻譯
// 給一個陣列nums跟一個整數k，判斷能不能在陣列中找到nums[i] = numsj，而且i跟j的距離不能比k還大。
// 範例:
// nums = [1,2,3,4,1] k=3; nums[0] = nums[4] = 1 , j=4, i=0, i,j距離為4比k還大，因此為false nums = [1,2,3,4,1] k=4; nums[0] = nums[4] = 1 , j=4, i=0, i,j距離為4沒有比k大，因此為true

// 分析 分成小问题 找到相同的元素  判断距离
// 如何找到相同的元素？  可以通过循环
// 很失望啊  尝试了很多次都没成功
// 循环不是每次都能解决问题的，我不要思维上太偷懒
var containsNearbyDuplicate = function(nums, k) {
	// var flag = false
	// for (var i = 0; i < nums.length; i++) {
	// 	nums.forEach(function(item, index) {
	// 		// console.log('index', index)
	// 		// console.log('i', i)
	// 		if (index !== i) {
	// 			// console.log('index - i', index - i)
	// 			// console.log('item', item)
	// 			// console.log('nums[i]', nums[i])
	// 			// console.log(item === nums[i])
	// 			if (item === nums[i] && Math.abs((index - i)) <= k) {
	// 				flag = true
	// 			}
	// 		}
	// 	})
	// }
	// return flag
	if (nums.length < 2) {
		return false
	}

	var flag = false
	for (var i = 0; i < nums.length; i++) {
		// nums.forEach(function(item, index) {
		// 	// console.log('index', index)
		// 	// console.log('i', i)
		// 	if (index !== i) {
		// 		// console.log('index - i', index - i)
		// 		// console.log('item', item)
		// 		// console.log('nums[i]', nums[i])
		// 		// console.log(item === nums[i])
		// 		if (item === nums[i] && Math.abs((index - i)) <= k) {
		// 			flag = true
		// 		}
		// 	}
		// })

		for (var j = i + 1; j < nums.length; j++) {
			if (nums[j] === nums[i] && j - i <= k) {
				return flag = true
			}
		}
	}
	return flag
};

// console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 3))
console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 4))
console.log(containsNearbyDuplicate([1, 0, 1], 0))