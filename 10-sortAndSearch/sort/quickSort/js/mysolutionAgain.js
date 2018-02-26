/*
 * @Author: mike.zhang
 * @Date:   2018-02-26 14:20:26
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-26 17:02:09
 */
// 这个答案才是正确的，没有bug的，不能全部相信书籍，
function quickSort(array) {
	//  转换[left,right]中的顺序
	return quick(array, 0, array.length - 1)
}

function quick(array, left, right) {
	if (array.length > 1) {
		//先要分区  把小的放  左边，大的放右边  pivot值怎么求？
		// 最终会找出一个index,index左边的比其小，右边的比其大
		var index = partition(array, left, right)
		console.log('array', array)
		console.log('index', index)
		console.log('left', left)
		console.log('right', right)
		// if (index > left) {
		// 这里真的理解不了

		// 如果分割点左侧有2个以上的元素，
		if (index - left > 1) {

			quick(array, left, index - 1)
		}

		// 如果分割点右侧有2个以上的元素，
		if (right - index > 1) {
			// if (index < right) {
			quick(array, index + 1, right)
		}
	}
	return array
}

function partition(array, start, end) {

	// 直接取第一个为基准元素
	var
		i = start,
		j = end,
		pivot = array[i],
		emptyIndex = i

	while (i < j) {

		while (i < j && pivot <= array[j]) {

			j--
		}

		if (i < j) {
			// console.log('emptyIndex before', emptyIndex)
			array[emptyIndex] = array[j]
			emptyIndex = j
			// console.log('array[emptyIndex]', array[emptyIndex])
			// console.log('emptyIndex after', emptyIndex)
			// console.log('array', array)
		}

		// console.log('iii', i)
		// console.log('iiinew', array[i])
		while (i < j && array[i] <= pivot) {
			i++
		}
		// console.log('i,j', i, j)
		if (i < j) {
			// console.log('i,j', i, j)
			array[emptyIndex] = array[i]
			emptyIndex = i
		}

	}
	array[emptyIndex] = pivot


	// console.log('array', array)
	return emptyIndex
	// 你要理解这个i，其实比中间的pivot的值多了一个1，其实这里返回i-1会更好
}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}


console.log(quickSort([2, 8, 6, 8]))