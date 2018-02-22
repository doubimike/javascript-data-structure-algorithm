// Given two binary trees, write a
// function to check
// if they are the same or not.

// Two binary trees are considered the same
// if they are structurally identical and the nodes have the same value.


// Example 1:

// 	Input: 1 1 /
// 	\/ \
// 2 3 2 3

// 	[1, 2, 3], [1, 2, 3]

// Output: true
// Example 2:

// 	Input: 1 1 /
// 	\
// 	2 2

// [1, 2], [1, null, 2]

// Output: false
// Example 3:

// 	Input: 1 1 /
// 	\/ \
// 2 1 1 2

// 	[1, 2, 1], [1, 1, 2]

// Output: false

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 思路：应该是一个一个判断，有任何不同就返回false
var isSameTree = function(p, q) {
	if (p === null && q === null) {
		return true
	}

	if (p === null && q !== null) {
		return false
	}

	if (q === null && p !== null) {
		return false
	}

	if (p && q) {
		if (p.val !== q.val) {
			return false
		}

		return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)

	}

};


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}


var t1 = new TreeNode(1)
t1.left = new TreeNode(2)
var t2 = new TreeNode(1)
t2.left = new TreeNode(2)

console.log(isSameTree(t1, t2))