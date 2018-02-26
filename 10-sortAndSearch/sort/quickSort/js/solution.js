function quickSort(array) {
	return quick(array, 0, array.length - 1)
}

function quick(array, left, right) {
	var index
	if (array.length > 1) {

		index = partition(array, left, right)
		if (left < index - 1) {
			quick(array, left, index - 1)
		}
		if (index < right) {
			quick(array, index, right)
		}
	}

	return array
}


var partition = function(array, left, right) {
	// 要不就给自己一个定义好了，偶数数组中间项一定是前面那项
	var pivot = array[Math.floor((right + left) / 2)],
		i = left,
		j = right
	console.log('pivot', pivot)
	while (i <= j) {
		while (array[i] < pivot) {
			i++
		}
		while (array[j] > pivot) {
			j--
		}
		if (i <= j) {
			swap(array, i, j)
			i++
			j--
			console.log('aaa', array)
		}
	}
	console.log('array', array)
	console.log('i', i)

	return i
}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

// console.log(quickSort([5, 4, 3, 2, 1]))
// console.log(quickSort([2, 1]))
// console.log(quickSort([3, 2, 1]))
// console.log(quickSort([4, 3, 2, 1]))
// console.log(quickSort([5, 4, 3, 2, 2, 1]))
// console.log(quickSort([55, 422, 3111, 2232, 12342, 1341, 999]))
// var arr = [5, 1, 3, 4]
// partition(arr, 0, 3)
// console.log(arr)
var arr2 = [2, 8, 6, 8]
console.log(partition(arr2, 0, 3))
// console.log(arr2)
// console.log(quickSort(arr2))