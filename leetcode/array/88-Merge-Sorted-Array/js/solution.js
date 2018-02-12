// 這題可以分成兩個步驟就會變得很簡單，先把nums2的值放到nums1裡面
// ex. nums1 = [1,2,6,null,null] , nums2 = [4,5] --> [1,2,6,4,5]
// 然後將nums1裡面的元素重新排序 [1,2,4,5,6]
// 
// 他的思路和我就不一样，所以这个突显了我的缺点，我太着急了，应该先把思路想清楚，多想想，有没有其他更好的思路的，而不是火急火燎的写代码，我想做任何事情都是这个样子的
var merge = function(nums1, m, nums2, n) {
	var index = 0
	//將nums2裡面的值放在nums1
	for (var i = m; i < m + n; i++) {
		nums1[i] = nums2[index]
		index++
	}
	//使用泡沫排序法重新排序
	for (var j = 0; j < nums1.length - 1; j++) {
		for (var k = j + 1; k < nums1.length; k++) {
			if (nums1[j] > nums1[k]) {
				var temp = nums1[j]
				nums1[j] = nums1[k]
				nums1[k] = temp
			}
		}
	}
}