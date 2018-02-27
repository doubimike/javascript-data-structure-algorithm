/*
 * @Author: mike.zhang
 * @Date:   2018-02-27 10:16:19
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-27 11:10:01
 */
// 思路  
// 计数排序
// 统计[0,1,2]出现的次数，然后添加到数组中
var sortColors = function(nums) {
	var map = {}
	for (var i = 0; i < nums.length; i++) {
		if (!map[nums[i]]) {
			map[nums[i]] = 1
		} else {
			map[nums[i]]++
		}
	}

	for (var i = 0; i < map['0']; i++) {
		nums[i] = 0
	}
	for (var i = 0; i < map['1']; i++) {
		nums[map['0'] + i] = 1
	}
	for (var i = 0; i < map['2']; i++) {
		nums[map['0'] + map['1'] + i] = 2
	}
	console.log(nums)
}


// 上面有bug了吧 ，没有考虑一些不存在的元素  比如console.log(sortColors([2, 0]))

var sortColors = function(nums) {
	// 时间复杂度 O(n)
	//空间复杂度O(k),k为元素的取值范围，也就是O(1)
	var map = {
		'0': 0,
		'1': 0,
		'2': 0
	}
	for (var i = 0; i < nums.length; i++) {
		map[nums[i]]++
	}

	// for (var i = 0; i < map['0']; i++) {
	// 	nums[i] = 0
	// }
	// for (var i = 0; i < map['1']; i++) {
	// 	nums[map['0'] + i] = 1
	// }
	// for (var i = 0; i < map['2']; i++) {
	// 	nums[map['0'] + map['1'] + i] = 2
	// }

	var index = 0
	for (var i = 0; i < map['0']; i++) {
		nums[index++] = 0
	}
	for (var i = 0; i < map['1']; i++) {
		nums[index++] = 1
	}
	for (var i = 0; i < map['2']; i++) {
		nums[index++] = 2
	}
	console.log(nums)

}
// console.log(sortColors([2, 0]))


// 继续优化 
// 上面的方法扫描了两遍，能不能只扫描一遍呢？
// 三路快排
// 其实也不是那么那么的难理解  理解了整个过程，其实代码相当简单，代码量也少

var sortColors = function(nums) {
	// 时间复杂度 O(n)
	//空间复杂度O(k),k为元素的取值范围，也就是O(1)
	//最重要只遍历数组一遍  
	var zero = -1 //nums[0...zero]==0  为什么是-1呢  因为如果设置为0的话 [0,0]为0 不一定成立
	var two = nums.length //nums[two...nums.length-1]==2  让这个数组无效及没有任何数字等于2
	for (var i = 0; i < two;) { //为什么不要等于two呢  因为i==2,变量定义这个已经是2了，没有必要再处理了，为啥不i++因为有一种情况不需要i++
		if (nums[i] === 1) {
			//最简单的情况
			i++
		} else if (nums[i] === 2) {
			swap(nums, i, --two)
			// i不需要进行加加操作
		} else {
			swap(nums, ++zero, i++)
		}
	}
	console.log(nums)

}
console.log(sortColors([1, 0, 0, 1, 1, 2, 2]))

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}