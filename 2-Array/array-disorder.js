var arr = [1, 1, 2, 2, 3, 3]
//每次随机抽一个数并移动到新数组中
function shuffle(array) {
	var copy = [],
		n = array.length,
		i
	while (n) {
		i = Math.floor(Math.random() * array.length)
		// if (array[i] !== undefined) {
		// 	copy.push(array[i])
		// 	delete array[i]
		// 	n--
		// }
		if (i in array) {
			copy.push(array[i])
			delete array[i]
			n--
		}
	}
	return copy
}
// console.log(shuffle(arr))

//跟方法1类似，只不过通过splice来去掉原数组已选项,node感觉有问题
function shuffleTwo(array) {
	var copy = [],
		n = array.length,
		i
	// 如果还剩有元素。。
	while (n) {
		// 随机选取一个元素
		i = Math.floor(Math.random() * n--)
		// 移动到新数组中
		copy.push(array.splice(i, 1)[0])
	}
	return copy
}
// console.log(shuffleTwo(arr))


//方法3 前面随机抽数依次跟末尾的数交换，后面依次前移，即：第一次前n个数随机抽一个跟第n个交换，第二次前n-1个数跟第n-1个交换，依次类推。

function shuffleThree(array) {
	var
		n = array.length,
		i, tem
	while (n) {
		i = Math.floor(Math.random() * n)
		temp = array[n - 1]
		array[n - 1] = array[i]
		array[i] = temp;
		n--
	}
	return array
}

console.log(shuffleThree(arr))