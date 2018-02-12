// Given an array and a value, remove all instances of that value in-place and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:

// Given nums = [3,2,2,3], val = 3,

// Your function should return length = 2, with the first two elements of nums being 2.


// 給一個陣列跟一個數字，移除陣列中所有跟數字相同的元素。

// 不可以使用另外的陣列來處理，全部的操作都要在同一個陣列中。
// 陣列中的元素可以隨意排序。
// 範例：  
// nums = [3, 1, 2, 3, 2]， val = 3  
// 應該要return 陣列的長度3，因為裡面的3被移除後剩[1,2,2].


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 分析  请先首先完全理解题目
var removeElement = function(nums, val) {
	// filter的方式不行， 不会改变原来的数组， 而是用新数组

	// nums.filter(function(item) {
	// 	return item !== val
	// }).length
	// console.log('a', nums)
	// return nums

	var len = nums.length
	// 按照之前的那个思想 用一个index表示,呃，这个想法我没弄出来
	for (var i = 0; i < len; i++) {
		if (nums[i] === val) {
			nums.splice(i, 1)
			len--
			i--
		}
	}
	console.log('nums', nums)
	return nums.length
};

console.log(removeElement([3, 1, 2, 3, 2], 3))
console.log(removeElement([3, 2, 2, 3], 3))