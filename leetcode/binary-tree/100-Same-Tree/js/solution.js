/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 14:54:46
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 15:06:15
 */
var isSameTree = function(p, q) {
	if (p === null && q === null) {
		return true
	}

	if (p !== null && q === null || p === null && q !== null) {
		return false
	}

	if (p.val !== q.val) {
		return false
	}

	return isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
}