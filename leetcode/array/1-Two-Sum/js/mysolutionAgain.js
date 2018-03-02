/*
 * @Author: mike.zhang
 * @Date:   2018-03-02 16:35:45
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-03-02 16:37:01
 */
var twoSum = function(nums, target) {
	var map = {}
	for (var i = 0; i < nums.length; i++) {
		var v = nums[i]
		if (map[target - v] >= 0) {
			return [map[target - v], i]
		} else {
			map[v] = i
		}
	}
}