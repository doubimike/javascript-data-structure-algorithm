/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 17:24:21
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 17:41:33
 */
// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.


// Example 1:

// Input: 2
// Output:  2
// Explanation:  There are two ways to climb to the top.

// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output:  3
// Explanation:  There are three ways to climb to the top.

// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
// 用递归会出现溢出错误，很尴尬
// 用下面这种方式优化一下就可以了，进行缓存
var map = {}
map[1] = 1
map[2] = 2
var climbStairs = function(n) {
	if (n === 1) {
		return 1
	}
	if (n === 2) {
		return 2
	}

	return map[n] = (map[n - 1] ? map[n - 1] : climbStairs(n - 1)) + (map[n - 2] ? map[n - 2] : climbStairs(n - 2))
};

console.log(climbStairs(3))
console.log(map)