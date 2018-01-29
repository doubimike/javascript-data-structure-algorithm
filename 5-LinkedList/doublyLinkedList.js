function DoublyLinkedList() {

	let Node = function(element) {
		this.element = element
		this.next = null
		this.prev = null
	}

	let length = 0
	let head = null
	let tail = null

	this.append = function(element) {
		let node = new Node(element),
			current
		if (head === null) {
			head = node
			tail = node
		} else {
			tail.next = node
			node.prev = tail
			tail = node
		}

		length++

	}

	this.insert = function(position, element) {
		if (position >= 0 && position <= length) {
			let node = new Node(element),
				current = head,
				previous, index = 0

			if (position === 0) {
				if ((!head)) {
					head = node
					tail = node
				} else {
					node.next = current
					current.prev = node
					head = node
				}
			} else if (position === length) {
				current = tail
				current.next = node
				node.prev = current
				tail = node
			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				node.next = current
				previous.next = node

				current.prev = node
				node.prev = previous
			}

			length++
			return true
		} else {
			return false
		}
	}

	this.print = function() {
		console.log(this.toString());
	}

	this.indexOf = function(element) {
		let current = head,
			index = -1
		if (element === current.element) {
			return 0
		}

		index++
		while (current.next) {
			if (element === current.element) {
				return index
			}
			current = current.next
			index++
		}

		if ((element === current.element)) {
			return index
		}

		return -1
	}

	this.remove = function(element) {
		return this.removeAt(this.indexOf(element))
	}
	this.isEmpty = function() {
		return length === 0;
	}

	this.size = function() {
		return length;
	}

	this.getTail = function() {
		return tail
	}

	this.toString = function() {

		let current = head,
			s = current ? current.element : '';

		while (current && current.next) {
			current = current.next;
			s += ', ' + current.element;
		}

		return s;
	}

	this.inverseToString = function() {
		let current = tail,
			s = current ? current.element : ''
		while (current && current.prev) {
			current = current.prev
			s += ',' + current.element
		}

		return s
	}

	this.toString = function() {

		let current = head,
			s = current ? current.element : '';

		while (current && current.next) {
			current = current.next;
			s += ', ' + current.element;
		}

		return s;
	}

	this.removeAt = function(position) {
		// 检查越界值
		if (position > -1 && position < length) {
			let current = head,
				previous,
				index = 0
			// 移除第一项
			if (position === 0) {
				head = current.next
				if (length === 1) {
					tail = null
				} else {
					head.prev = null
				}
			} else if (position === length - 1) {
				current = tail
				tail = current.prev
				tail.next = null

			} else {
				while (index++ < position) {
					previous = current
					current = current.next
				}
				previous.next = current.next
				current.next.prev = previous
			}

			length--
			return current.element

		} else {
			return null
		}
	}

	this.printInverse = function() {
		console.log(this.inverseToString());
	}

}
let list = new DoublyLinkedList();

list.append(15);
list.print();
list.printInverse();

list.append(16);
list.print();
list.printInverse();

list.append(17);
list.print();
list.printInverse();

list.insert(0, 13);
list.print();
list.printInverse();

list.insert(4, 18);
list.print();
list.printInverse();

list.insert(1, 14);
list.print();
list.printInverse();

list.removeAt(0);
list.print();
list.printInverse();

list.removeAt(list.size() - 1);
list.print();
list.printInverse();

list.removeAt(1);
list.print();
list.printInverse();

list.remove(16);
list.print();
list.printInverse();

list.remove(14);
list.print();
list.printInverse();

list.remove(17);
list.print();
list.printInverse();