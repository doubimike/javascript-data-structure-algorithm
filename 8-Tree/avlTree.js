function AVLTree() {
	var insertNode = function(node, element) {
		if (node === null) {
			node = new Node(element)
		} else if (element < node.key) {
			node.left = insertNode(node.left, element)


		}
	}
}