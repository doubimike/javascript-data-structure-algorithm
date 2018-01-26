function Queue() {
	let items = []
	this.enqueue = function(element) {
		items.push(element)
	}
	this.dequeue = function(element) {
		return items.shift(element)
	}
	this.front = function() {
		return items[0]
	}
	this.isEmpty = function() {
		return items.length === 0
	}
	this.size = function() {
		return items.length
	}
	this.print = function() {
		console.log(items.toString())
	}

}

// var queue1 = new Queue()
// var queue2 = new Queue()

let queue = new Queue()
console.log(queue.isEmpty())

queue.enqueue('John')
queue.enqueue('Jack')
queue.enqueue('Camila')
queue.print()
console.log(queue.isEmpty())
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()


function hotPotato(nameList, num) {
	// let winner
	// let queue = new Queue()
	// nameList.forEach(function(item) {
	// 	queue.enqueue(item)
	// })
	// let timeoutId

	// this.start = function() {
	// 	while (num) {
	// 		var flowerPassedMan = queue.dequeue()
	// 		queue.enqueue(flowerPassedMan)
	// 		num--
	// 	}

	// }

	// this.stop = function() {

	// }

	let queue = new Queue()

	for (let i = 0; i < nameList.length; i++) {
		queue.enqueue(nameList[i])
	}

	let eliminated = ''
	while (queue.size() > 1) {
		for (let i = 0; i < num; i++) {
			queue.enqueue(queue.dequeue())
		}

		eliminated = queue.dequeue()

		console.log(eliminated + ' 在击鼓传花游戏中被淘汰')

	}
	return queue.dequeue()

}

let names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let winner = hotPotato(names, 7)
console.log('winner', winner)