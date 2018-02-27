/*
 * @Author: mike.zhang
 * @Date:   2018-02-27 09:53:44
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-27 10:13:14
 */
// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 思路
var sortColors = function(nums) {
	quick(nums, 0, nums.length - 1)
};

function quick(array, left, right) {
	if (array.length > 1) {
		var index = partition(array, left, right)
		if (index - left > 1) {
			quick(array, left, index - 1)
		}

		if (right - index > 1) {
			quick(array, index + 1, right)
		}
	}
	return array
}

function partition(array, left, right) {
	var pivot = array[left]
	var i = left
	var j = right
	var emptyIndex = i
	while (i < j) {
		while (i < j && array[j] >= pivot) {
			j--
		}
		// i==j 就是自己和自己换了，没必要嘛
		if (i < j) {
			array[emptyIndex] = array[j]
			emptyIndex = j
		}

		while (i < j && array[i] <= pivot) {
			i++
		}

		if (i < j) {
			array[emptyIndex] = array[i]
			emptyIndex = i
		}
	}

	array[emptyIndex] = pivot
	return emptyIndex
}



console.log(sortColors([3, 0, 0, 1, 1, 2, 2]))