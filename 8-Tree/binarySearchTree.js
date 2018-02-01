function BinarySearchTree() {
	var Node = function(key) {
		this.key = key
		this.left = null
		this.right = null
	}

	var root = null

	// 自己的实现
	// this.insert = function(key) {
	// 	var node = new Node(key)
	// 	// 根节点不存在
	// 	if (!root) {
	// 		root = node
	// 		return
	// 	}

	// 	insertNode(root, node)
	// 	// 存在根节点
	// 	// 比较谁大谁小
	// 	// 用递归来解决问题

	// 	function insertNode(beginNode, node) {
	// 		if (node.key < beginNode.key && beginNode.left === null) {
	// 			return beginNode.left = node
	// 		} else if (node.key < beginNode.key && beginNode.left) {
	// 			insertNode(beginNode.left, node)
	// 		} else if (node.key >= beginNode.key && beginNode.right === null) {
	// 			return beginNode.right = node
	// 		} else if (node.key >= beginNode.key && beginNode.right) {
	// 			insertNode(beginNode.right, node)
	// 		}
	// 	}
	// }

	this.insert = function(key) {
		var newNode = new Node(key)
		if (root === null) {
			root = newNode
		} else {
			insertNode(root, newNode)
		}


	}

	var insertNode = function(node, newNode) {
		if (newNode.key < node.key) {
			if (node.left === null) {
				node.left = newNode
			} else {
				insertNode(node.left, newNode)
			}
		} else {
			if (node.right === null) {
				node.right = newNode
			} else {
				insertNode(node.right, newNode)
			}
		}
	}

	// 中序遍历
	this.inOrderTraverse = function(callback) {
		// 我的实现方式
		// consoleAnNode(root)

		// 书本实现方式
		inOrderTraverseNode(root, callback)


	}
	// 后序遍历
	this.postOrderTraverse = function(callback) {
		postOrderTraverseNode(root, callback)
	}

	// 先序遍历
	this.preOrderTraverse = function(callback) {
		preOrderTraverseNode(root, callback)
	}

	var inOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback)
			callback(node.key)
			inOrderTraverseNode(node.right, callback)
		}
	}

	var preOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			callback(node.key)
			preOrderTraverseNode(node.left, callback)
			preOrderTraverseNode(node.right, callback)
		}
	}

	var postOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			postOrderTraverseNode(node.left, callback)
			postOrderTraverseNode(node.right, callback)
			callback(node.key)
		}
	}

	function consoleAnNode(node) {
		if (node) {

			if (node.left) {
				consoleAnNode(node.left)
			}
			console.log(node.key)
			if (node.right) {
				consoleAnNode(node.right)
			}
		}
	}


	this.getRoot = function() {
		return root
	}

	// this.min = function() {
	// 	var current = root
	// 	while (current.left) {
	// 		current = current.left
	// 	}

	// 	return current ? current.key : 'no root'
	// }

	// this.max = function() {
	// 	var current = root
	// 	while (current.right) {
	// 		current = current.right
	// 	}

	// 	return current ? current.key : 'no root'
	// }

	this.min = function() {
		return minNode(root)
	}

	var minNode = function(node) {
		if (node) {
			while (node && node.left !== null) {
				node = node.left
			}

			return node.key
		}

		return null
	}

	this.max = function() {
		return maxNode(root)
	}

	var maxNode = function(node) {
		if (node) {
			while (node && node.right !== null) {
				node = node.right
			}

			return node.key
		}

		return null
	}

	// this.find = function(key) {
	// 	if (!root) {
	// 		return false
	// 	}
	// 	return findNode(key, root)
	// }

	// var findNode = function(key, node) {
	// 	if (node) {
	// 		if (key === node.key) {
	// 			return node
	// 		}

	// 		if (key > node.key) {
	// 			return findNode(key, node.right)
	// 		}

	// 		if (key < node.key) {
	// 			return findNode(key, node.left)
	// 		}
	// 	}

	// 	return false
	// }

	this.search = function(key) {
		return searchNode(root, key)
	}

	var searchNode = function(node, key) {
		if (node === null) {
			return false
		}
		if (key < node.key) {
			return searchNode(node.left, key)
		}
		if (key > node.key) {
			return searchNode(node.right, key)
		}
		return true
	}

	// this.remove = function(key) {
	// 	return removeNode(key)
	// }

	// var removeNode = function(key) {
	// 	if (!this.search(key)) {
	// 		return false
	// 	}

	// 	var findNode = node

	// }

	this.remove = function(key) {
		root = removeNode(root, key)
	}

	// 很好的学习递归的地方
	var removeNode = function(node, key) {
		if (node === null) {
			return null
		}

		if (key < node.key) {
			node.left = removeNode(node.left, key)
			return node
		}

		if (key > node.key) {
			node.right = removeNode(node.right, key)

			return node
		}

		// 第一种情况--一个叶节点
		if (node.left === null && node.right === null) {
			node = null
			return node
		}

		// 第二种情况--一个只有一个子节点的节点
		if (node.left === null && node.right) {
			node = node.right
			return node
		}

		if (node.left && node.right === null) {
			node = node.left
			return node
		}

		// 第三种情况--一个有两个子节点的节点
		var aux = findMinNode(node.right)
		node.key = aux.key
		node.right = removeNode(node.right, aux.key)
		return node
	}

	var findMinNode = function(node) {
		while (node && node.left !== null) {
			node = node.left
		}

		return node
	}



}

var bst = new BinarySearchTree()

bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
// console.log(bst.getRoot())
// console.log(bst.getRoot().right)
// bst.postOrderTraverse(printNode)

function printNode(value) {
	console.log(value)
}
// console.log(bst.min())
// console.log(bst.max())

console.log(bst.search(10))
console.log(bst.search(11))
bst.remove(11)
bst.postOrderTraverse(printNode)