// 思路 
// 印象中是不断切分到只有一个元素，用递归
// 注意  concat不会修改原来的数组，只会返回新数组
function mergeSort(array) {
	var len = array.length
	if (len === 1) {
		return array
	}

	var mid = Math.floor(len / 2)
	var left = mergeSort(array.slice(0, mid))
	var right = mergeSort(array.slice(mid))
	var result = []
	var i = 0,
		j = 0
	while (i < left.length && j < right.length) {

		if (left[i] <= right[j]) {
			result.push(left[i])

			i++
		} else {
			result.push(right[j])
			j++

		}
	}


	if (i == left.length) {

		result = result.concat(right.slice(j))
	}
	if (j == right.length) {


		result = result.concat(left.slice(i))

	}

	return result
}



console.log(mergeSort([5, 4, 3, 2, 1]))
console.log(mergeSort([2, 1]))
console.log(mergeSort([5, 4, 3, 2, 2, 1]))
console.log(mergeSort([55, 422, 3111, 2232, 12342, 1341, 999]))