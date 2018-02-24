/*
 * @Author: mike.zhang
 * @Date:   2018-02-24 09:49:21
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-24 10:24:01
 */
// 思路 回忆原理
// 找到合适的位置进行插入？
// 我已经记不起原理了  
// 好像是一个一个 进行排序 比如5和4，5排好了，然后排4，4应该插入5的前面，然后排3，3先和5比，然后再和4比，前面没有了，然后插入，然后是2，然后是1
// 经过爱排序app的辅助，回想起了原理，然后通过console.log算是把这个写出来了
function insertSort(array) {
	var len = array.length

	for (var i = 1; i < len; i++) {
		// for (var i = 1; i <= 1; i++) {
		var des = i
		for (var j = i; j >= 1; j--) {
			if (array[i] < array[j - 1]) {
				des = j - 1
			}
		}
		// console.log('des', des)
		if (des !== i) {
			// swap是错误的哦，不是swap了，现在是插入
			// swap(array, des, i)
			array.splice(des, 0, array.splice(i, 1)[0])
		}
	}
	return array
}

function swap(array, i, j) {
	var temp = array[i]
	array[i] = array[j]
	array[j] = temp
}

// 45321

// i = 2   



console.log(insertSort([5, 4, 3, 2, 1]))
console.log(insertSort([5, 4, 3, 2, 2, 1]))
console.log(insertSort([55, 422, 3111, 2232, 12342, 1341, 999]))