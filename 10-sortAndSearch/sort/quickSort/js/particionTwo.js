/*
 * @Author: mike.zhang
 * @Date:   2018-02-26 15:56:33
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-26 16:28:11
 */

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
			console.log('emptyIndex before', emptyIndex)
			array[emptyIndex] = array[j]
			emptyIndex = j
			console.log('array[emptyIndex]', array[emptyIndex])
			console.log('emptyIndex after', emptyIndex)
			console.log('array', array)
		}

		console.log('iii', i)
		console.log('iiinew', array[i])
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


	console.log('array', array)
	return emptyIndex
	// 你要理解这个i，其实比中间的pivot的值多了一个1，其实这里返回i-1会更好
}
console.log(partition([2, 8, 6, 8], 0, 3))
// console.log(partition([2, 1], 0, 1))