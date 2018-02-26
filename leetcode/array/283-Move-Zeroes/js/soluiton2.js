/*
 * @Author: mike.zhang
 * @Date:   2018-02-26 17:34:53
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-26 19:20:05
 */
var moveZeroes = function(nums) {
	// 时间复杂度O(n)
	// 空间复杂度O(n)
	var noneZeroes = []
	for (var i = 0; i < nums.length; i++) {
		if (nums[i]) {
			noneZeroes.push(nums[i])
		}
	}

	for (var i = 0; i < noneZeroes.length; i++) {
		nums[i] = noneZeroes[i]
	}

	for (var i = noneZeroes.length; i < nums.length; i++) {
		nums[i] = 0
	}
	console.log(nums)
}

// console.log(moveZeroes([1, 2, 0, 3, 0, 4]))

// 优化
// 问题 用了辅助空间  原地
// k- [0,k)中保存所有当前遍历过的非0元素


var moveZeroes = function(nums) {
	// 时间复杂度O(n)
	// 空间复杂度O(1)
	var k = 0 //nums中，【0，k)的元素均为非0元素
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[k] = nums[i]
			k++
		} else if (nums[i] === 0) {
			// 不做操作
		}
	}

	for (; k < nums.length; k++) {
		nums[k] = 0
	}
	console.log(nums)
}



// 继续优化 
// 直接交换位置
// 这个我老想不清楚

var moveZeroes = function(nums) {
	// 时间复杂度O(n)
	// 空间复杂度O(1)
	var k = 0 //nums中，【0，k)的元素均为非0元素
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			swap(nums, k, i)
			k++
		} else if (nums[i] === 0) {
			// 不做操作
		}
	}
	console.log(nums)
}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}



// 继续优化，自己和自己相等的时候不需要 比如全部是0

var moveZeroes = function(nums) {
	// 时间复杂度O(n)
	// 空间复杂度O(1)
	var k = 0 //nums中，【0，k)的元素均为非0元素
	for (var i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			if (i !== k) {
				// i等于k就是自己和自己交换，没有必要的
				swap(nums, k, i)
				k++
			} else {
				k++
			}
		} else if (nums[i] === 0) {
			// 不做操作
		}
	}
	console.log(nums)
}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}
console.log(moveZeroes([1, 2, 0, 3, 0, 4]))