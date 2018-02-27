/*
 * @Author: mike.zhang
 * @Date:   2018-02-27 11:14:59
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-27 17:01:04
 */
// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// You may assume that each input would have exactly one solution and you may not use the same element twice.

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 思路
// 先是暴力解  直接两重循环
var twoSum = function(numbers, target) {
	var len = numbers.length
	for (var i = 0; i < len - 1; i++) {
		var ele = numbers[i]
		for (var j = i + 1; j < len; j++) {
			var ele2 = numbers[j]
			if (ele + ele2 === target) {
				// 索引以1开始
				return [i + 1, j + 1]
			}
		}
	}
};

// 对撞指针
var twoSum = function(numbers, target) {

	//O(n)
	//空间复杂度(1)
	var i = 0,
		j = numbers.length - 1

	while (i < j) {
		if (numbers[i] + numbers[j] === target) {
			return [i + 1, j + 1]
		}
		if (numbers[i] + numbers[j] < target) {
			i++
		}
		if (numbers[i] + numbers[j] > target) {
			j--
		}
	}
}
console.log(twoSum([2, 7, 11, 15], 9))