/*
 * @Author: mike.zhang
 * @Date:   2018-02-28 14:10:45
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-28 15:07:38
 */
// 想象一个滑动的窗口
// 

var minSubArrayLen = function(s, nums) {
	//时间复杂度 O(n)
	//空间复杂度 O(1)
	var l = 0,
		r = -1, //nums[l,r]为我们的滑动窗口
		sum = 0,
		res = nums.length + 1

	// while (l < nums.length) {
	// 	console.log('ee')
	// 	if (r + 1 < nums.length && sum < s) {
	// 		sum += nums[++r]
	// 	} else if (sum >= s) {
	// 		res = Math.min(res, r - l + 1)
	// 		sum -= nums[l++]
	// 	}
	// }
	// if (res === nums.length + 1) {
	// 	res = 0
	// }

	while (l < nums.length) {
		console.log('---enter sum', sum, s)

		if (r + 1 < nums.length && sum < s) {
			console.log('add r', r)
			r++
			sum += nums[r]
			console.log('add r sum', sum)
			// if (r == 5) {
			// 	console.log('rrr', r)
			// 	break
			// }
		} else {



			sum -= nums[l]
			l++
			console.log('sum', sum)
			console.log('res', res)
			console.log('l', l)
			// break

		}

		if (sum >= s) {
			res = Math.min(r - l + 1, res)
		}
		console.log(l)
	}
	if (res === nums.length + 1) {
		return 0
	}
	return res
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 2, 3]))
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]))