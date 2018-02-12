// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

// [show hint]

// Related problem: Reverse Words in a String II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 分析  
// 最简单的就是用splice  然后可以试试循环 倒序的
var rotate = function(nums, k) {
	var arr = nums.splice(nums.length - k, k)
	while (arr.length) {
		nums.splice(0, 0, arr.pop())
	}
	console.log(nums)
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
// console.log(rotate([1], 1))

var rotate = function(nums, k) {
	while (k > 0) {
		nums.unshift(nums.pop())
		k--
	}
	console.log(nums)
}
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))