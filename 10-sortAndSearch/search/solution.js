function struct() {
	var array = []
	this.sequentialSearch = function(item) {
		for (var i = 0; i < array.length; i++) {
			if (item === array[i]) {
				return i
			}
		}

		return -1
	}
	//二分查找法   leetcode 167可以使用
	this.binnarySearch = function(item) {
		this.quickSort()
		var low = 0,
			high = array.length - 1,
			mid, element
		while (low <= high) {
			// 中间位置是low+high  我一直以为都是high - low呢
			mid = Math.floor((low + high) / 2)
			element = array[mid]
			if (element < item) {
				low = mid + 1
			} else if (element < item) {
				high = mid - 1
			} else {
				return mid
			}
		}

		return -1
	}
}