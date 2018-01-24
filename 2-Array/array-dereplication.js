'use strict'
// 测试用例

var arr = [1, 1, 2, 2, 3, 3]
var arrTwo = [1, 2, 1, 2, '1', '11']
var array3 = [1, 1, 'a', 'A', 2, 2]
var array4 = [{
	value: 1
}, {
	value: 1
}, {
	value: 2
}]
var array5 = [1, 1, '1', '1', null, null, undefined, undefined, new String('1'), new String('1'), /a/, /a/, NaN,
	NaN
]
//利用数组的indexOf方法

function unique(arr) {
	var result = [];
	for (var i = 0; i < arr.length; i++) {
		if (result.indexOf(arr[i]) === -1) {
			result.push(arr[i])
		}
	}

	return result;
}


console.log(unique(arr))
console.log(unique(arrTwo))
console.log('---')

//利用hash表,可能会出现字符串和数字一样的话出错，如var a = [1, 2, 3, 4, '3', 5],会返回[1, 2, 3, 4, 5]

function uniqueTwo(arr) {
	var hash = {},
		result = []
	for (var i = 0; i < arr.length; i++) {
		if (!hash[arr[i]]) {
			hash[arr[i]] = true
			result.push(arr[i])
		}
	}
	return result
}

function uniqueTwoChange(arr) {
	var obj = {}
	return arr.filter(function(item, index, arr) {
		return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
	})
}

function uniqueTwoChangeTwo(arr) {
	var obj = {}
	return arr.filter(function(item, index, arr) {
		return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
	})
}


console.log('uniqueTwoChange', uniqueTwoChange(array4))
console.log('uniqueTwoChangeTwo', uniqueTwoChangeTwo(array4))



console.log(uniqueTwo(arr))
console.log(uniqueTwo(arrTwo))
console.log('---')
//排序后比较相邻，如果一样则放弃，否则加入到result。会出现与方法2一样的问题，如果数组中存在1,1,'1'这样的情况，则会排错
function uniqueThree(arr) {
	arr.sort()
	var result = [arr[0]]
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1]) {
			result.push(arr[i])
		}
	}
	return result
}

console.log(uniqueThree(arr))
console.log(uniqueThree(arrTwo))
console.log('---')
//最简单但是效率最低的算法,也不会出现方法2和方法3出现的bug
function uniqueFour(arr) {
	if (arr.length === 0) {
		return
	}
	var result = [arr[0]],
		isRepeate

	for (var i = 0, j = arr.length; i < j; i++) {
		isRepeate = false
		for (var k = 0, h = result.length; k < h; k++) {
			if (result[k] === arr[i]) {
				isRepeate = true
				break
			}
			// 下面这句好像没有必要的吧？
			if (k === h) {
				break
			}
		}
		if (!isRepeate) {
			result.push(arr[i])
		}
	}
	return result
}

// 上面这个方法请参考
// var array = [1, 1, '1', '1'];

// function unique(array) {
//     // res用来存储结果
//     var res = [];
//     for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
//         for (var j = 0, resLen = res.length; j < resLen; j++ ) {
//             if (array[i] === res[j]) {
//                 break;
//             }
//         }
//         // 如果array[i]是唯一的，那么执行完循环，j等于resLen
//         if (j === resLen) {
//             res.push(array[i])
//         }
//     }
//     return res;
// }


console.log(uniqueFour(arr));
console.log(uniqueFour(arrTwo));
console.log('---')
//此方法充分利用了递归和indexOf方法，感谢网友@真爱像深蓝
function uniqueFive(arr, newArr) {
	var num
	if (-1 === arr.indexOf(num = arr.shift())) {
		newArr.push(num)
	}

	arr.length && uniqueFive(arr, newArr)
	return newArr
}

console.log(uniqueFive(arr, []));
console.log(uniqueFive(arrTwo, []));
console.log('---')


function uniqueSix(array, isSorted, iteratee) {
	var res = []
	var seen = []
	for (var i = 0, len = array.length; i < len; i++) {
		var value = array[i]
		var computed = iteratee ? iteratee(value, i, array) : value
		if (isSorted) {
			if (!i || seen !== computed) {
				res.push(value)
			}
			seen = computed
		} else if (iteratee) {
			if (seen.indexOf(computed) === -1) {
				seen.push(computed)
				res.push(value)
			}
		} else if (res.indexOf(value) === -1) {
			res.push(value)
		}
	}

	return res
}

console.log(uniqueSix(array3, false, function(item) {
	return typeof item === 'string' ? item.toLowerCase() : item
}))

console.log('---')

// node环境下似乎有点问题，对filter支持不太好
function uniqueSeven(array) {
	var res = array.filter(function(item, index, array) {
		return array.indexOf(item) === index;
	})
	return res;
}

console.log(uniqueSeven(arr));
console.log(uniqueSeven(arrTwo));
console.log('---')

// node环境下似乎有点问题，对filter支持不太好
function uniqueEight(array) {
	return array.concat().sort().filter(function(item, index, array) {
		return !index || item !== array[index - 1]
	})
}

console.log(uniqueEight(arr));
console.log(uniqueEight(arrTwo));
console.log('---')

console.log(uniqueEight(array5))
console.log(uniqueTwoChangeTwo(array5))