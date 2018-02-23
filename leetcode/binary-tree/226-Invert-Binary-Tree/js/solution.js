var invertTree = function(root) {
	//節點為null或沒有子節點，不用反轉，終止遞迴
	if (root === null || (root.right === null && root.left === null)) {
		return root
	}
	// 左節點為本來的右節點反轉，右節點為本來的左節點反轉
	var temp = root.left
	root.left = invertTree(root.right)
	root.right = invertTree(temp)

	return root
}