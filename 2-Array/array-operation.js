var arr1 = [1, 2, 3, 4],
	arr2 = [4, 5, 6, 7]
// 交集
//利用filter和数组自带的indexOf方法
var arr = arr1.filter(function(n) {
	return arr2.indexOf(n) !== -1
})

console.log(arr)

// 并集
Array.prototype.merge = function(a) {
	var result = this.concat(a)
	return result.filter(function(item, index, array) {
		return array.indexOf(item) === index
	})
}
console.log(arr1.merge(arr2))

// 数组求差集
//利用filter和indexOf方法
Array.prototype.diff = function(a) {
	return this.filter(function(i) {
		return a.indexOf(i) < 0
	})
}

console.log(arr1.diff(arr2))