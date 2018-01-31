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

	this.inOrderTraverse = function(callback) {
		// 我的实现方式
		// consoleAnNode(root)

		// 书本实现方式
		inOrderTraverseNode(root, callback)


	}

	var inOrderTraverseNode = function(node, callback) {
		if (node !== null) {
			inOrderTraverseNode(node.left, callback)
			callback(node.key)
			inOrderTraverseNode(node.right, callback)
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
}

var bst = new BinarySearchTree()

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
bst.inOrderTraverse(printNode)

function printNode(value) {
	console.log(value)
}