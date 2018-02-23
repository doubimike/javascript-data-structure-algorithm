/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 15:20:20
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 15:43:10
 */
// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow a node to be a descendant of itself).”

//         _______6______
//        /              \
//     ___2__          ___8__
//    /      \        /      \
//    0      _4       7       9
//          /  \
//          3   5
// For example, the lowest common ancestor (LCA) of nodes 2 and 8 is 6. Another example is LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 思路 先找到小的   共同祖先的特点是什么  
var lowestCommonAncestor = function(root, p, q) {
	if (!root) {
		return null
	}

	if (root && p && q) {
		var min
		if (p.val > q.val) {
			min = q.val
			max = p.val
		}
		if (p.val < q.val) {
			min = p.val
			max = q.val
		}

		if (p.val === q.val) {
			return p
		}
		while (root) {
			if (root.val >= min && root.val <= max) {
				return root
			} else {
				if (root.val < min) {
					// 这里不要搞反了 最好是能够画出来 第一次做的时候就搞反了
					root = root.right
				}

				if (root.val > max) {
					root = root.left
				}
			}

		}

		return root
	} else {
		return null
	}

};


function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}


var t = new TreeNode(6)
var t1 = new TreeNode(2)
var t2 = new TreeNode(8)
var t3 = new TreeNode(0)
var t4 = new TreeNode(4)
t.left = t1
t.right = t2
t1.left = t3
t1.right = t4

// console.log(lowestCommonAncestor(t, t1, t2))
console.log(lowestCommonAncestor(t, t1, t4))