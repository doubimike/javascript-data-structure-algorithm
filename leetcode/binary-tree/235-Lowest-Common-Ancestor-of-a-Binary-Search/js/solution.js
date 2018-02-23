/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 15:20:20
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 15:48:04
 */
// *
//  思路
// 一個BST，若任意節點的左子樹不為空，則左子樹所有節點的值都會比根節點小，從上面的樹可以看到6的左子樹裡面的節點為[2,0,4,3,5]均比6小。

// 取得根節點root的值，如果值落在目標節點[p,q]之間，代表root就是最低共同祖先節點
// 如果root比[p,q]都還小，用root.right取代root繼續往下找
// 如果root比[p,q]都還小，用root.left取代root繼續往下找

var lowestCommonAncestor = function(root, p, q) {
	var count = 0
	while (true) {
		var value = root.val
		if (p.val >= value && value >= q.val || p.val <= value && value <= q.val) {
			return root
		} else if (p.val > value && q.val > value) {
			root = root.right
		} else {
			root = root.left
		}
	}
}