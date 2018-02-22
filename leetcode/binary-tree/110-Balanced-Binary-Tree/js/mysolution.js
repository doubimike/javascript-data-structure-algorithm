// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:

// Given the following tree [3,9,20,null,null,15,7]:

//     3
//    / \
//   9  20
//     /  \
//    15   7
// Return true.

// Example 2:

// Given the following tree [1,2,2,3,3,null,null,4,4]:

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4
// Return false.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 思路  深度 最长深度已经知道怎么搞了，找到怎么求出最短深度就可以了
// 上面的说法是错误的，请认真看题目
// 不错，依靠自己的能力解出来了
var isBalanced = function(root) {

	if (!root) {
		return true
	}
	if (!root.left && !root.right) {
		return true
	}

	if (Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) {
		return false
	} else {
		return isBalanced(root.left) && isBalanced(root.right)
	}


};

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

var minDepth = function(root) {

	return minDepthHelp(root)

	function minDepthHelp(node) {
		if (!node) {
			return 0
		}

		if (!node.left && !node.right) {
			return 1
		}

		if (!node.left && node.right) {
			return 1
		}

		if (node.left && !node.right) {
			return 1
		}

		if (node.left && node.right) {
			return 1 + Math.min(minDepthHelp(node.left), minDepthHelp(node.right))
		}

	}
};

var t = new TreeNode(1)
t.left = new TreeNode(2)
t.left.left = new TreeNode(3)
var t1 = new TreeNode(0)

console.log(minDepth(t))
console.log(maxDepth(t))
console.log(isBalanced(t))

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}