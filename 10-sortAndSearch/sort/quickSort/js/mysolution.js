/*
 * @Author: mike.zhang
 * @Date:   2018-02-24 14:55:56
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-24 17:22:14
 */
// 思路 
// 好像是选定一个基准，然后左右都开始比较，比基准小的放左边，大的放右边，
// 一般取中间的作为基准，但是也可以选其他的
// 要考虑全面比如 长度不是奇数的数组咋办·

function quickSort(array) {
	var len = array.length
	if (len === 0) {
		return array
	}
	if (len === 1) {
		return array
	}

	var mid = Math.floor(len - 1 / 2)

	var midItem = array[mid]
	var i = 0
	var j = len - 1
	while (i <= j) {
		while (array[i] < midItem) {
			// console.log('i', i)
			i++
		}
		while (array[j] > midItem) {
			// console.log('j', j)
			j--
		}

		if (i <= j) {
			// console.log('i,j', i, j)
			swap(array, i, j)
			// console.log('aaa', array)
			i++
			j--
			// console.log(i, j)
		}
	}

	// 应该是这里出了问题
	// var left = array.slice(0, i)
	// if (0<(i-1)) {
	// 	quickSort()
	// }

	// if (len>i) {

	// }

	// var right = array.slice(i, len)

	// return quickSort(left).concat(array[i]).concat(quickSort(right))


}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}



// console.log(quickSort([5, 4, 3, 2, 1]))
console.log(quickSort([2, 1]))
// console.log(quickSort([5, 1, 3, 4]))
// console.log(quickSort([3, 2, 1]))
// console.log(quickSort([4, 3, 2, 1]))
// console.log(quickSort([5, 4, 3, 2, 2, 1]))
// console.log(quickSort([55, 422, 3111, 2232, 12342, 1341, 999]))

// 上面的答案是有缺陷的，偶数的时候不行
// 思路感觉不对了，越写越复杂
// 先看下答案吧