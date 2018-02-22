/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 17:58:56
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 18:08:55
 */
// Given a binary tree, return all root-to-leaf paths.

// For example, given the following binary tree:

//    1
//  /   \
// 2     3
//  \
//   5
// All root-to-leaf paths are:

// ["1->2->5", "1->3"]


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
// 思路  
// 和计算和应该差不多
// 牛逼了我的哥，自己实现出来了
// 二叉树做到现在，发现基本所有的题目都用到了递归
var binaryTreePaths = function(root) {

	if (!root) {
		return []
	}

	if (!root.left && !root.right) {
		return [root.val + '']
	}

	if (root.left && !root.right) {
		return binaryTreePaths(root.left).map(function(item) {
			return root.val + '->' + item
		})
	}

	if (root.right && !root.left) {
		return binaryTreePaths(root.right).map(function(item) {
			return root.val + '->' + item
		})
	}

	if (root.left && root.right) {
		return binaryTreePaths(root.left).map(function(item) {
			return root.val + '->' + item
		}).concat(binaryTreePaths(root.right).map(function(item) {
			return root.val + '->' + item
		}))
	}
};