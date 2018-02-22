/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 16:51:12
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 17:09:23
 */
// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

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
// 思路 考点 
// 分析  镜像树的特点是  
// 先翻转一边，然后开始比较，有不同就false
// 可以的，是写出来的
var isSymmetric = function(root) {
	if (!root) {
		return true
	}

	if (!root.left && !root.right) {
		return true
	}

	if (root.left && !root.right) {
		return false
	}

	if (root.right && !root.left) {
		return false
	}



	return compare(root.left, invertTree(root.right))

	function compare(a, b) {
		if (a === null && b === null) {
			return true
		}
		if (a === null && b !== null) {
			return false
		}
		if (b === null && a !== null) {
			return false
		}
		if (a && b) {
			if (a.left === null && b.left === null && a.right === null && b.right === null && a.val === b.val) {
				return true
			} else {
				if (a.val !== b.val) {
					return false
				} else {


					return compare(a.left, b.left) && compare(a.right, b.right)
				}
			}

		}

	}

};

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

var t = new TreeNode(1)
t.left = new TreeNode(2)
t.right = new TreeNode(2)
console.log(isSymmetric(t))


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}