/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 15:51:10
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 15:56:31
 */
// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.

/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
	this.items = nums
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
	var result = 0
	for (var k = i; k <= j; k++) {
		result += this.items[k]
	}
	return result
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */
var n = new NumArray([-2, 0, 3, -5, 2, -1])
console.log(n.sumRange(0, 2))
console.log(n.sumRange(2, 5))