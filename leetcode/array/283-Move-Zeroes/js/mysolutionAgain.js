/*
 * @Author: mike.zhang
 * @Date:   2018-02-26 17:18:36
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-26 17:32:13
 */
//第二次做的时候还是出现了错误   
//[ 1, 2, 3, 4, [ 0 ], [ 0 ] ]
var moveZeroes = function(nums) {
	var len = nums.length
	for (var i = 0; i < len; i++) {
		if (nums[i] === 0) {
			nums.push(nums.splice(i, 1)[0])
			i--
			len--
		}
	}

}

console.log(moveZeroes([1, 2, 0, 3, 0, 4]))