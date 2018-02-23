// Invert a binary tree.
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
// Trivia:
// This problem was inspired by this original tweet by Max Howell:
// Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 分析  可能是用到递归吧
var invertTree = function(root) {
	return invert(root)

	function invert(node) {
		if (!node) {
			return null
		}

		if (!node.left && !node.right) {
			return node
		}

		if (node.left && !node.right) {
			node.right = invert(node.left)
			node.left = null

			return node
		}

		if (node.right && !node.left) {
			node.left = invert(node.right)
			node.right = null
			return node
		}

		if (node.left && node.right) {
			var temp = node.left
			node.left = invert(node.right)
			node.right = invert(temp)
			return node
		}
	}
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var t = new TreeNode(1)
t.left = new TreeNode(2)
t.right = new TreeNode(4)
t.right.right = new TreeNode(5)
t.left.left = new TreeNode(3)

console.log(t)
console.log(invertTree(t))