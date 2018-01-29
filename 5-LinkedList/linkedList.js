function LinkedList() {
	let Node = function(element) {
		this.element = element
		this.next = null
	}

	let length = 0
	let head = null
	this.append = function(element) {
		let node = new Node(element),
			current

		if (head === null) {
			head = node

		} else {
			current = head
			while (current.next) {
				current = current.next
			}
			current.next = node

		}

		length++

	}
	this.insert = function(position, element) {
		// if (position > length) {
		// 	return null
		// }
		// node = new Node(element)
		// let index = 0,
		// 	current = head,
		// 	previous, next

		// if (position === 0) {
		// 	node.next = head
		// 	head = node
		// } else {
		// 	while (index++ < position) {
		// 		previous = current
		// 		current = current.next

		// 	}
		// 	node.next = current
		// 	previous.next = node
		// }
		// length++

		if (position >= 0 && position <= length) {
			let node = new Node(element),
				current = head,
				previous, index = 0
			if (position === 0) {
				node.next = current
				head = node

			} else {
				while (index++ < position) {
					previous = current
					current = current.next

				}
				node.next = current
				previous.next = node
			}

			length++
			return true

		} else {
			return false
		}
	}
	this.removeAt = function(position) {
		// 自己的实现
		// let prevNode, current = head,
		// 	nextNode

		// if (position > length) {
		// 	console.log('越界')
		// 	return
		// }

		// if (position === 0) {
		// 	head = head.next
		// } else {

		// 	for (let i = 1; i <= position; i++) {
		// 		prevNode = current
		// 		current = current.next
		// 		if (i === position) {
		// 			nextNode = current.next
		// 			prevNode.next = nextNode
		// 		}

		// 	}


		// }

		// 书本的实现
		// 检查越界值
		if (position > -1 && position < length) {
			let current = head,
				previous,
				index = 0

			if (position === 0) {
				head = current.next
			} else {
				while (index++ < position) {
					previous = current
					current = current.next

				}
				// 将previous于current的下一项连接起来：跳过current，从而移除他
				previous.next = current.next
			}

			length--
			return current.element
		} else {
			return null
		}


	}

	this.remove = function(element) {
		return this.removeAt(this.indexOf(element))
	}

	this.indexOf = function(element) {
		// let current = head,
		// 	index = 0
		// while (index < length) {
		// 	if (current.element === element) {
		// 		return index
		// 	} else {
		// 		current = current.next
		// 		index++
		// 	}

		// }
		// return -1
		let current = head,
			index = 0
		while (current) {
			if (element === current.element) {
				return index
			}
			index++
			current = current.next
		}

		return -1

	}
	this.isEmpty = function(element) {
		return length === 0
	}

	this.size = function() {
		return length
	}
	this.getHead = function() {
		return head
	}
	this.toString = function() {
		let string = ''
		let currentNode = head
		while (currentNode) {
			string += (currentNode.element + (currentNode.next ? 'n' : ''))
			currentNode = currentNode.next

		}
		return string
	}
	this.print = function() {
		let currentNode = head
		while (currentNode) {
			console.log(currentNode.element)
			currentNode = currentNode.next

		}


	}


}

var linkedList = new LinkedList()

linkedList.append('1')
linkedList.append('2')
linkedList.append('23')

linkedList.print()
console.log('---')
linkedList.insert(0, 1)
linkedList.insert(1, 10)
linkedList.insert(2, 20)
linkedList.insert(3, 40)
linkedList.insert(0, 450)
linkedList.print()
console.log(linkedList.toString())
console.log(linkedList.indexOf(450))
linkedList.remove(450)
console.log(linkedList.toString())