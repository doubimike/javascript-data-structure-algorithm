function bubbleSort(array) {
	// 这层循环是后来加上的
	for (var j = 0; j < array.length; j++) {

		// 先把最简单的情况写出来，然后再加上外层的循环，最开始的时候没有j
		for (var i = 0; i < array.length - 1 - j; i++) {
			if (array[i] > array[i + 1]) {
				var temp = array[i]
				array[i] = array[i + 1]
				array[i + 1] = temp
			}
		}
	}
	return array
}

function find(array, item) {
	// if (array.length === 0) {
	// 	return -1
	// }

	// if (array.length === 1) {
	// 	return item === array[0]
	// }

	// var array = bubbleSort(array)

	// var left = 0
	// var right = array.length - 1
	// var mid = Math.floor((right - left) / 2)

	// console.log('array', array)
	// console.log('left', left)
	// console.log('mid', mid)
	// console.log('right', right)

	// while (true) {

	// 	if (left <= right) {

	// 		if (array[mid] < item) {
	// 			left = mid + 1

	// 			mid = Math.floor((right - left) / 2) + mid + 1
	// 			console.log('new left', left)
	// 			console.log('right', right)
	// 			console.log('new mid', mid)
	// 			// break
	// 		} else if (array[mid] > item) {
	// 			right = mid - 1
	// 			mid = Math.floor((right - left) / 2)
	// 			console.log('new right', right)
	// 			console.log('new mid', mid)
	// 			// break
	// 		} else {
	// 			return mid
	// 		}
	// 	} else {
	// 		return -1
	// 	}
	// }

	// return -1
	array = bubbleSort(array)
	console.log(array)
	// 在[low,hign]的范围里面寻找target
	var low = 0,
		high = array.length - 1,
		mid, element
	while (low <= high) { //当low = high时，区间[low,high]依旧是有效的，所以要等号
		// 中间值  (low+high)/2其实是没有变化的
		mid = Math.floor((low + high) / 2)
		element = array[mid]
		if (element < item) {
			low = mid + 1 //target 在 [mid+1,r]中
		} else if (element > item) {
			high = mid - 1 //target 在[l,mid-1]中
		} else {
			return mid
		}
	}

	return -1
}

console.log(find([1, 2, 23, 4], 23))


function find(array, item) {
	array = bubbleSort(array)
	// 在[low,high)范围内寻找
	var low = 0,
		high = array.length,
		mid, element
	while (low < high) { //如果low = high  [1,1)其实是不存在的、无效的，所以没必要等于，当然你加上等于其实程序员正确，压根不会执行
		mid = Math.floor((low + high) / 2)
		element = array[mid]
		if (element < item) {
			low = mid + 1 //target 在 [mid+1,r)中
		} else if (element > item) {
			high = mid //target 在 [l,mid)中  如果编程 high = mid -1  会漏掉一个
		} else {
			return mid
		}
	}

	return -1
}

console.log(find([1, 2, 23, 4], 23))



function find(array, item) {
	array = bubbleSort(array)
	// 在(low,high)范围内寻找
	var low = -1,
		high = array.length,
		mid, element
	while (low < high - 1) { //如果low = high  (1,1)其实是不存在的、无效的，所以没必要等于，当然你加上等于其实程序员正确，压根不会执行
		mid = Math.floor((low + high) / 2)
		element = array[mid]
		if (element < item) {
			low = mid //target 在 (mid,r)中
		} else if (element > item) {
			high = mid //target 在 (l,mid)中  如果编程 high = mid -1  会漏掉一个
		} else {
			return mid
		}
	}

	return -1
}

console.log(find([1, 2, 23, 4], 23))


// function sort(array) {
// 	// 用快排
// 	// 思路
// 	// 分区 然后调换

// 	return quickSort(array, 0, array.length - 1)
// }

// function quickSort(array, left, right) {
// 	var pivot = array[Math.floor((right - left) / 2)]
// 	var index = partition(array, left, right, pivot)
// 	if (index >= left + 1) {


// 	}
// 	if (index < right) {

// 	}
// }


// function partition(array, left, right) {

// }