// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// 	You may assume that nums1 has enough space(size that is greater or equal to m + n) to hold additional elements from nums2.The number of elements initialized in nums1 and nums2 are m and n respectively.


// 翻譯
// 給兩個已經排序過的的整數陣列nums1與nums2，將nums2合併入nums1之中
// 注意：
// nums1會有有足夠的空間可以塞入兩個陣列(nums1.length = m+n)，m為nums1的元素數量，n為nums2的元素數量
// 範例： nums1 = [1,1,2,4,6,null,null,null], m = 5, nums2 = [2,3,7], n = 3
// 合併後 nums1 = [1,1,2,2,3,4,6,7]

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 分析 用循环可以解决问题  我还是无法做到完美的解决问题，可能是思路的问题了，还是太着急了，太自信了，没有那种一定要完美的做出来的认真态度，太随意了。
// 这是大缺点，要改的
// 这题挑战失败
// 要看清问题的本质
var merge = function(nums1, m, nums2, n) {
	if (m === 0) {
		nums1 = nums2
	} else {
		var compareIndex = 0
		for (var i = 0; i < nums2.length; i++) {

			// 这里有明显的考虑不周的地方，如果一直小于，你没有处理
			// while (nums2[i] >= nums1[compareIndex] && nums1[compareIndex]) {
			// 	compareIndex++
			// }
			// nums1.splice(compareIndex, 0, nums2[i])
			// compareIndex++
			// continue

			if (nums2[i] < nums1[compareIndex]) {
				nums1.splice(compareIndex, 0, nums2[i])
			} else {
				while (nums2[i] >= nums1[compareIndex] && nums1[compareIndex] !== null) {
					compareIndex++
				}
				nums1.splice(compareIndex, 0, nums2[i])
			}
		}
	}
	console.log('nums1', nums1)
};

// console.log(merge([1, 1, 2, 4, 6, null, null, null], 5, [2, 3, 7], 3))
// console.log(merge([2, 2, 2, 4, 6, null, null, null], 5, [1, 1, 1], 3))
console.log(merge([0], 0, [1], 1))

var merge = function(nums1, m, nums2, n) {
	var index = 0
	//將nums2裡面的值放在nums1
	for (var i = m; i < m + n; i++) {
		nums1[i] = nums2[index]
		index++
	}

	nums1.sort(function(a, b) {
		if (a > b) {
			return 1
		} else if (a < b) {
			return -1
		}
		return 0
	})
}