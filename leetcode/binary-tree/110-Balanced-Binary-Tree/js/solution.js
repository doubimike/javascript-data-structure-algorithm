/*
 * @Author: mike.zhang
 * @Date:   2018-02-22 17:12:55
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-22 17:34:44
 */
var isBalanced = function(root) {
	if (root == null || (root.right == null && root.left == null)) return true;
	// 找出左樹，右樹的深度
	var dL = findDeep(root.left);
	var dR = findDeep(root.right);
	// 深度是否差1內
	var diff = Math.abs(dL - dR) <= 1;

	//如果深度差超過1, return false
	//深度沒差超過1，傳入左右節點繼續判斷
	return diff && isBalanced(root.left) && isBalanced(root.right);
}

// 找出節點深度
function findDeep(root) {
	if (root == null) {
		return 0;
	}
	var deepL = 1 + findDeep(root.left);
	var deepR = 1 + findDeep(root.right);

	return deepL > deepR ? deepL : deepR;
}