/*
 * @Author: mike.zhang
 * @Date:   2018-03-02 15:30:18
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-03-02 15:34:29
 */
var intersect = function(nums1, nums2) {
	var map = {}
	var result = []
	for (var i = 0; i < nums1.length; i++) {
		if (typeof map[nums1[i]] === 'undefined') {
			map[nums1[i]] = 1
		} else {
			map[nums1[i]]++
		}
	}
	for (var i = 0; i < nums2.length; i++) {
		if (typeof map[nums2[i]] !== 'undefined' && map[nums2[i]] > 0) {
			result.push(nums2[i])
			map[nums2[i]]--
		}
	}

	return result
}
console.log(intersect([1, 2, 2, 1], [2, 2]))