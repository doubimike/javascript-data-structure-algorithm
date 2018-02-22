// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example:
// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its depth = 3.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}
// 思路  应该用递归没问题了
var maxDepth = function(root) {

	return maxDepthHelp(root)

	function maxDepthHelp(node) {
		if (!node) {
			return 0
		}

		if (!node.left && !node.right) {
			return 1
		}

		if (!node.left && node.right) {
			return 1 + maxDepthHelp(node.right)
		}

		if (node.left && !node.right) {
			return 1 + maxDepthHelp((node.left))
		}

		if (node.left && node.right) {
			return 1 + Math.max(maxDepthHelp(node.left), maxDepthHelp(node.right))
		}

	}
};

var t = new TreeNode(1)
t.left = new TreeNode(2)
t.left.left = new TreeNode(3)
var t1 = new TreeNode(0)

console.log(maxDepth(t))
console.log(maxDepth(t1))