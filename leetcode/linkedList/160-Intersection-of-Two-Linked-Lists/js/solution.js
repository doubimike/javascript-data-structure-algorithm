// 思路
// 先判斷A跟B哪個連結陣列長度比較長，接著移除較長那邊前面的節點，接下來就兩兩節點比較是否相等。
var getIntersectionNode = function(headA, headB) {

	// 判斷headA, headB 哪個比較長
	var diff = getDiff(headA, headB)
	// headA比較長，跳過前面多出的部分
	if (diff > 0) {
		while (diff > 0) {
			headA = headA.next
			diff--
		}
	} else {
		// headB比較長，跳過前面多出的部分
		while (diff < 0) {
			headB = headB.next
			diff++
		}
	}

	// 毎個節點進行比較
	while (headA !== null) {
		if (headA === headB) {
			return headA
		}
		headA = headA.next
		headB = headB.next
	}

	return null
}


// 取得兩個linked list長度差異 
function getDiff(nodeA, nodeB) {
	var aLength = 0
	var bLength = 0
	while (nodeA !== null) {
		aLength++
		nodeA = nodeA.next
	}
	while (nodeB != null) {
		bLength++;
		nodeB = nodeB.next;
	}
	return aLength - bLength
}