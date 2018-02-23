// 翻譯
// 給一個連結陣列，交換兩兩相鄰的節點並且回傳。
// 範例： 1->2->3->4, return 2->1->4->3。
// 你的演算法不能改變節點裡面的值，只能把節點搬來搬去。
// 思路一
// 先不管最後一條規則，也就是直接改變節點裡面值
// 用prev表示前面的節點，cur表示後面的節點，跟一般交換的寫法一樣，先用一個temp儲存prev的值
// 將cur的值塞給prev，然後再將temp的值塞給cur就完成交換
// prev與cur尋找下一對node，繼續交換到結束

var swapPairs = function(head) {
	if (head === null || head.next === null) {
		return head
	}
	var prev = head
	var cur = head.next
	while (prev !== null && cur !== null) {
		// 很一般的交換
		var temp = prev.val
		prev.val = cur.val
		cur.val = temp

		// 这些边界的条件很重要
		if (cur.next === null || cur.next.next === null) {
			break
		}
		// 處理下一對node
		prev = cur.next
		cur = cur.next.next
	}

	return head
}