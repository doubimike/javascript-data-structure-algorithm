/*
 * @Author: mike.zhang
 * @Date:   2018-03-02 15:12:17
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-03-02 15:18:30
 */
var intersection = function(nums1, nums2) {
	var map = {}
	var result = []
	for (var i = 0; i < nums1.length; i++) {
		if (typeof map[nums1[i]] === 'undefined') {
			map[nums1[i]] = nums1[i]
		}
	}
	for (var i = 0; i < nums2.length; i++) {
		if (typeof map[nums2[i]] !== 'undefined' && result.indexOf(map[nums2[i]]) < 0) {
			result.push(map[nums2[i]])
		}
	}

	return result
}

console.log(intersection([1, 2, 2, 1], [2, 2]))
console.log(intersection([8, 0, 3], [0, 0]))