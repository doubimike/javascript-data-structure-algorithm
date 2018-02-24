function heapSort(array) {
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


console.log(heapSort([5, 4, 3, 2, 1]))
console.log(heapSort([5, 4, 3, 2, 2, 1]))
console.log(heapSort([55, 422, 3111, 2232, 12342, 1341, 999]))