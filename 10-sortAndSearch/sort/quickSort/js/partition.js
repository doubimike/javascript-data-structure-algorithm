/*
 * @Author: mike.zhang
 * @Date:   2018-02-26 15:15:08
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-26 15:56:14
 */

var partition = function(array, left, right) {
	// 要不就给自己一个定义好了，偶数数组中间项一定是前面那项
	var pivot = array[Math.floor((right + left) / 2)],
		i = left,
		j = right

	console.log('mid', Math.floor((right + left) / 2))
	console.log('pivot', pivot)
	while (i <= j) {
		// 这个是存在bug的，因为存在相等元素 比如 [2,8,6,8]这会导致分区失败
		while (array[i] < pivot) {
			i++
		}
		while (array[j] > pivot) {
			j--
		}
		console.log('judge i', i)

		console.log('judeg j', j)

		if (i <= j) {
			console.log('---')
			console.log('i', i)
			console.log('array[i]', array[i])
			console.log('j', j)
			console.log('array[j]', array[j])
			swap(array, i, j)
			console.log('after swap', array)
			i++
			j--
			console.log('after swap i', i)
			console.log('after swap j', j)

		}
	}


	// console.log('array', array)
	return i
	// 你要理解这个i，其实比中间的pivot的值多了一个1，其实这里返回i-1会更好
}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

console.log(partition([2, 8, 6, 8], 0, 3))


function partition(array, left, right) {

	// 直接取第一个为基准元素
	var pivot = array[left],
		i = left,
		j = right,
		emptyIndex = i

	console.log('mid', Math.floor((right + left) / 2))
	console.log('pivot', pivot)
	while (i < j) {

		while (i < j && array[j] >= pivot) {
			j--
		}

		if (i < j) {
			array[emptyIndex] = array[j]
			emptyIndex = j
		}

		while (i < j && array[i] <= pivot) {
			i++
		}
		if (i < j) {
			array[emptyIndex] = array[emptyIndex = i]
		}
		array[emptyIndex] = pivot

	}


	// console.log('array', array)
	return i
	// 你要理解这个i，其实比中间的pivot的值多了一个1，其实这里返回i-1会更好
}