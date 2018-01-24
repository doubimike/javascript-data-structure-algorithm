// 不使用loop循环，创建一个长度为100的数组，并且每个元素的值等于它的下标

// --map跳过了数组中空的部分，换句话说，也就是数组中没有初始化的部分均会被跳过。所以必须添加fill(0)

var arr = new Array(100).fill(0)
var newarr = arr.map(function(item, index) {
	return index
})

// console.log(newarr)

// 题目描述
// 找出元素 item 在给定数组 arr 中的位置
// 输出描述:
// 如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1
// 示例1
// 输入
// [ 1, 2, 3, 4 ], 3
// 输出
// 2

function indexOf(arr, item) {
	var indexAll;
	// arr.forEach(function(itemInner, index) {
	// 	if (item === itemInner) {
	// 		indexAll = index
	// 	}
	// })
	arr.some(function(itemInner, index) {
		if (item == itemInner) {
			indexAll = index
		}
		return item == itemInner
	})
	if (indexAll === undefined) {
		indexAll === -1
	}
	return indexAll
}

// console.log(indexOf([1, 2, 3, 4], 3))


// 移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组
function remove(arr, item) {

	return arr.filter(function(i, index, array) {
		return i !== item
	})

}
// console.log(remove([1, 2, 3, 4], 3))

// 题目描述
// 移除数组 arr 中的所有值与 item 相等的元素，直接在给定的 arr 数组上进行操作，并将结果返回
// 示例1
// 输入
// [1, 2, 2, 3, 4, 2, 2], 2
// 输出
// [1, 3, 4]

function removeWithoutCopy(arr, item) {
	var len = arr.length
	for (var i = 0; i < len; i++) {
		if (arr[i] === item) {
			arr.splice(i, 1)
			len--
			i--

		}
	}
	return arr
}

var arr = [1, 2, 2, 3, 4, 2, 2]
removeWithoutCopy(arr, 2)
// console.log(arr)


// 题目描述
// 找出数组 arr 中重复出现过的元素
// 示例1
// 输入
// [1, 2, 4, 4, 3, 3, 1, 5, 3]
// 输出
// [1, 3, 4]
var arr = [1, 2, 4, 4, 3, 3, 1, 5, 3]

function duplicates(arr) {
	var newArr = arr.filter(function(item, index, array) {
		return array.indexOf(item) !== index
	})

	return newArr.filter(function(item, index, array) {
		return array.indexOf(item) === index
	})

}

console.log(duplicates(arr))