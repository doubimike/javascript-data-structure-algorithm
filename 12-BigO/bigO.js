// O(1)
function increment(num) {

	return ++num
}

// O(n)

function sequentialSearch(array, item) {


	for (var i = 0; i < array.length; i++) {
		if (item === array[i]) {
			return i
		}
	}

	return -1
}


function sequentialSearch(array, item) {
	var cost = 0
	for (var i = 0; i < array.length; i++) {
		cost++
		if (item === array[i]) {
			return i
		}
	}

	console.log('cost for sequentialSearch with input size ' + array.length + ' is ' + cost)

	return -1
}

console.log(sequentialSearch([1, 2, 2, 3, 3, 4, 4, 6], 7))

// O(n^2)

function bubbleSort(array) {
	var cost = 0
	// 这层循环是后来加上的
	for (var j = 0; j < array.length; j++) {
		cost++
		// 先把最简单的情况写出来，然后再加上外层的循环，最开始的时候没有j
		for (var i = 0; i < array.length - 1 - j; i++) {
			cost++
			if (array[i] > array[i + 1]) {
				var temp = array[i]
				array[i] = array[i + 1]
				array[i + 1] = temp
			}
		}
	}
	console.log('cost for sequentialSearch with input size ' + array.length + ' is ' + cost)
	return array
}

console.log(bubbleSort([1, 2, 2, 3, 3, 4, 4, 6, 9, 10]))