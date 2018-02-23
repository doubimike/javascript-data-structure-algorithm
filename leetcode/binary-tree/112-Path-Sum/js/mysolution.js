/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 17:37:59
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 17:56:13
 */
// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// For example:
// Given the below binary tree and sum = 22,

//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */

// 思路  
// 怎么求出所有的  root to leaf 的和的情况
// 如何先求出一条来 应该可以利用到递归
// 深度优先遍历？？
// 可以可以  用递归解决了 是自己想出来的
var hasPathSum = function(root, sum) {
	if (!root) {
		return false
	}

	if (!root.left && !root.right) {
		return root.val === sum
	}

	if (root.left && !root.right) {
		return hasPathSum(root.left, sum - root.val)
	}

	if (root.right && !root.left) {
		return hasPathSum(root.right, sum - root.val)
	}

	if (root.left && root.right) {
		return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val)
	}
};
var t = new TreeNode(1)
t.left = new TreeNode(-2)
t.right = new TreeNode(3)

console.log(hasPathSum(t, -1))

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}