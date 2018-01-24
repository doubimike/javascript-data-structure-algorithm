function arrReverse(arr) {
	var result = [],
		len = arr.length
	for (var i = 0; i < len; i++) {
		result[i] = arr[len - i - 1]
	}
	return result
}

console.log(arrReverse([1, 2, 3, 4, 8, 6]));

(function(arr) {
	var result = [],
		len = arr.length - 1
	for (var right = len; right >= 0; right--) {
		result.push(arr[right])
	}

	console.log(result.join(''))
})('字符倒序测试'.split(''));

(function(arr) {
	console.log(arr.reverse().join(''))
	return arr.reverse().join('')

})('字符倒序测试'.split(''));


(function(array) {
	var left, right, length = array.length,
		temp
	for (left = 0; left < length / 2; left++) {
		right = length - 1 - left
		temp = array[left]
		array[left] = array[right]
		array[right] = temp
	}
	console.log(array.join(''))
})('字符倒序测试'.split(''))