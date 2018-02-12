// 翻譯
// 反轉一個連結串列。
// 範例： { val:1, next: {val:2, next:null} } }
// 反轉： { val:2, next: {val:1, next:null} } }
// 思路
// 反轉一個連結陣列，需要一個指標來操作連結陣列，找出指標前的陣列並且將這個陣列加到目前指標節點的位置，這時候指標向前。
// 例如連結head[3,2,1]
// 指標一開始放在[2]的位置，第一步將指標前的[3]從連結中切出來然後加到[2]的後面，連結陣列變成[3,2,1]。
// 接下來指標向後移動到[1]，切出前面的[2,3]應且加到[1]之後，連結陣列變成[1,2,3]
// 指標在往後移，發現後面已經沒有節點，交換完成。

var reverseList = function(head) {
	if (!head) {
		return null
	}
	if (!head.next) {
		return head
	}

	var prev = head
	var cur = head.next
	prev.next = null
	while (cur !== null) {
		var temp = cur // 用temp來操作目前的node
		cur = cur.next // 目前的node指標先往下，不然會被後面的操作影養

		// 這邊其實是兩個步驟
		// 我們只需要當前node的值，不需要他的next，temp.next = null
		// 將之前的linked list加到當前node後面  ， temp.next = prev

		temp.next = null
		temp.next = prev
		prev = temp
	}
	return prev
}