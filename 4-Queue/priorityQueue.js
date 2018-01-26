function PriorityQueue() {
	let items = []

	function QueueElement(element, priority) {
		this.element = element
		this.priority = priority
	}

	this.enqueue = function(element, priority) {
		let queueElement = new QueueElement(element, priority)

		let added = false
		// 我自己的实现
		// if (items.length === 0) {
		// 	items.push(queueElement)
		// } else {
		// 	for (let i = 0; i < items.length; i++) {

		// 		if (queueElement.priority > items[i].priority) {
		// 			items.splice(i, 0, queueElement)
		// 			added = true
		// 			break
		// 		} else {
		// 			if (i === items.length - 1) {
		// 				items.push(queueElement)
		// 				added = true
		// 			}
		// 		}

		// 	}
		// }

		// 教材的实现  i越小，优先级越高，和我的是相反的
		for (let i = 0; i < items.length; i++) {
			if (queueElement.priority < items[i].priority) {
				items.splice(i, 0, queueElement)
				added = true
				break;
			}
		}
		if (!added) {
			items.push(queueElement)
		}
	}
	// this.print = function() {
	// 	items.forEach(function(item) {
	// 		console.log(item.element, item.priority)
	// 	})
	// 	// console.log(items.toString())
	// }

	this.print = function() {
		for (let i = 0; i < items.length; i++) {
			console.log(`${items[i].element}-${items[i].priority}`)
		}
	}

}

var priorityQueue = new PriorityQueue()
priorityQueue.enqueue('a', 1)
priorityQueue.enqueue('b', 2)
priorityQueue.enqueue('c', 2)
priorityQueue.enqueue('e', 2)
priorityQueue.enqueue('g', 3)
priorityQueue.enqueue('f', 2)
priorityQueue.print()