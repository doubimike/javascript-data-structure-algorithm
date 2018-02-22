/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 16:51:12
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 17:11:03
 */
// 判斷右邊是不是左邊的鏡像，就是先把右邊的樹反轉，再判斷是否與左邊的樹相等。 剛好怎麼把樹反轉在Invert Binary Tree有寫過，Same Tree也寫過，把這兩個組合起來就是本題的解了

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
var isSymmetric = function(root) {
	if (root == null || (root.right == null && root.left == null)) {
		return true;
	}

	// 先將right反轉，再比對是否相等
	root.right = revertTree(root.right);
	return isSameTree(root.left, root.right);

	// 反轉樹
	function revertTree(node) {
		if (node == null || node.left == null && node.right == null) {
			return node;
		}
		var temp = revertTree(node.left);
		node.left = revertTree(node.right);
		node.right = temp;
		return node;
	}


	// 比對是否相等
	function isSameTree(left, right) {
		if (left == null && right == null) {
			return true;
		}

		if (left == null && right != null || right == null && left != null) {
			return false;
		}

		if (left.val != right.val) {
			return false;
		}

		return isSameTree(left.right, right.right) && isSameTree(left.left, right.left)
	}
};