/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 16:09:48
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 16:35:57
 */
// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
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
// 思路 考点 遍历
// 记录深度，然后根据深度添加到数组中
// 思考一下，还是能够凭借自己的力量写出来，而且比参考答案更加好
var levelOrder = function(root) {
	if (!root) {
		return []
	}
	arr = []
	addNum(root, 0)
	return arr

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
console.log(levelOrder(t1))