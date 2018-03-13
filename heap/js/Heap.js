/*
 * @Author: mike.zhang
 * @Date:   2018-03-12 14:48:58
 * @Last Modified by:   zhanghang
 * @Last Modified time: 2018-03-12 21:30:54
 */
function Heap() {
	var items = []
	this.add = function(item) {
		items.push(item)
	}
}

// 最大堆
function MaxHeap() {
	var count = 0
	var data = new Array()
	this.size = function() {
		console.log(count)
		return count
	}

	this.isEmpty = function() {
		return count === 0
	}

	this.insert = function(item) {
		data[++count] = item
		this.shiftUp(count, item)
	}

	this.shiftUp = function(k) {
		var parentIndex = Math.floor(k / 2)


		while (parentIndex && data[parentIndex] < data[k]) {
			swap(data, k, parentIndex)
			k = parentIndex
			parentIndex = Math.floor(parentIndex / 2)
		}
	}

	this.extractMax = function() {
		if (count > 0) {
			var result = data[1]
			data[1] = data.pop()
			count--
			this.shiftDown(1)
		} else {
			console.log('No element')
		}

		return result

	}

	this.setData = function (dataArr) {
		data = dataArr
		count = dataArr.length-1
	}

	this.shiftDown = function(k) {
		// if (typeof data[k * 2] === 'undefined') {
		// 	return
		// }
		// if (typeof data[k * 2 + 1] === 'undefined') {
		// 	if (data[k] < data[k * 2]) {
		// 		swap(data, k, k * 2)
		// 		return
		// 	}
		// }

		// if (data[k * 2] > data[k * 2 + 1]) {
		// 	if (data[k] < data[k * 2]) {
		// 		swap(data, k, k * 2)
		// 		this.shiftDown(k * 2)
		// 	}
		// }
		// if (data[k * 2] < data[k * 2 + 1]) {
		// 	if (data[k] < data[k * 2]) {
		// 		swap(data, k, k * 2 + 1)
		// 		this.shiftDown(k * 2 + 1)
		// 	}
		// }

		while (2 * k <= count) {
			//j 表示此轮循环中,data[k]和data[j]交换位置
			var j = 2 * k
			if (j + 1 <= count && data[j + 1] > data[j]) {
				j = j + 1
			}
			if (data[k] > data[j]) {
				break
			}
			swap(data, k, j)
			k = j
		}

	}

	this.print = function() {
		console.log(data)
	}

}


function swap(arr, i, j) {
	var t = arr[i]
	arr[i] = arr[j]
	arr[j] = t
}


var a = new MaxHeap()

a.insert(62)
a.insert(41)
a.insert(30)
a.insert(28)
a.insert(16)
a.insert(22)
a.insert(13)
a.insert(19)
a.insert(17)
a.insert(15)
a.insert(52)


// a.size()
var str =''
while (!a.isEmpty()) {
	str = a.extractMax() +' '+ str
	// console.log(a.extractMax())
}
// console.log(str)
// a.print()

// var b = new MaxHeap()

// for (var i = 0; i < 100; i++) {
// 	b.insert(Math.floor(Math.random() * 100))
// }

// b.print()
var arr = []
for(var i = 0;i<10000000;i++){
	arr[i]= Math.floor(Math.random()*1000)
}


function heapSort (arr) {
	 var a = new MaxHeap()
	 for(var i =0;i<arr.length;i++){
	 	a.insert(arr[i])
	 }

	 for(var i =arr.length-1;i>=0;i--){
	 	arr[i]= a.extractMax()
	 }
}

// console.log('arr',arr)
//  直接将数组构成堆，不一个个添加
function heapSort2(arr) {
	var time1 = new Date()
	var a = new MaxHeap()
	a.setData([undefined].concat(arr))
	// 为什么从a.size()/2开始 因为这个是第一个有子节点的 具体看一下视频的动画演示就知道了
	for(var i =Math.floor(a.size()/2);i>=1;i--){
	
		a.shiftDown(i)
	}
	for(var i =a.size()-1;i>=0;i--){
		 	arr[i]= a.extractMax()
		 }
		 var time2 = new Date();
 	console.log('time',(time2-time1)/1000)
}
heapSort2(arr)
// console.log(arr)