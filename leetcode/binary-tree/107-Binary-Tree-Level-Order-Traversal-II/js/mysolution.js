/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 16:37:55
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 16:53:07
 */
// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its bottom-up level order traversal as:
// [
//   [15,7],
//   [9,20],
//   [3]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 最后数组直接reverse就好了，这种方法很不错，很取巧的
// 从这个题目也可以有点心得，比如如果是直接让你解决这个问题，你的思路可以从更简单的不反转入手，如果一上手就要直接
// 翻转，可能会让你掉坑里走不出来
var levelOrderBottom = function(root) {
	if (!root) {
		return []
	}
	arr = []
	addNum(root, 0)
	return arr.reverse()

	function addNum(node, deep) {
		if (!node) {
			return
		}
		if (!arr[deep]) {
			arr[deep] = []

		}
		arr[deep].push(node.val)
		deep++
		addNum(node.left, deep)
		addNum(node.right, deep)
	}
};

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

var t1 = new TreeNode(1)
t1.left = new TreeNode(2)

t1.right = new TreeNode(3)
console.log(t1)
console.log(levelOrderBottom(t1))