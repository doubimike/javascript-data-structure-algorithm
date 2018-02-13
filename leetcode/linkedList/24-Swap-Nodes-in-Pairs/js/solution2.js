// 思路二
// 題目要求不能改變節點裡面的值，所以node.val這種寫法應該是不行的
// 首先先弄一個不動的首節點firstNode，後面節點移來移去時才不會受影響
// 以[1,2,3,4]，一開始要交換的為[1.2]，因此需要先儲存[3,4]稍後再處理(下圖1)
// 儲存後將list要處理的部分[1,2]跟不處理的部分[3,4]切開 (下圖2)，切開的同時讓[2]的next指向[1]
// 將前一個節點prev的next指向[2]，因為[2]的next已經指向[1]，因此這邊已經完成[1,2] -> [2,1]的步驟
// 接下來把之前儲存的[3,4]接到[1]後面，就可以繼續處理[3,4] ```
// 不改動node內的值


// 其实我自己的思路就是这种，奈何有些细节不知道怎么处理或者说没有处理好
var swapPairs = function(head) {
	if (head == null || head.next == null) return head
	// 这个确实解决了我所遇到的问题，首节点的问题
	var firstNode = new ListNode(0)

	firstNode.next = head
	var cur = head
	var prev = firstNode
	// 圖1的部分，目前處理的節點cur，前一個節點prev
	var nextKeep // 預備用來儲存後面未處理的節點
	while (cur !== null && cur.next !== null) {
		nextKeep = cur.next.next //圖1，相將後面的節點[3,4]儲存起來
		cur.next.next = cur //圖2，將[1,2]與[3,4]斷開，這時候[2]的next已經變成[1]  
		// 圖3將prev的next指向[2]，注意這時候[2]的next已經指向[1]，整理一下其實如圖4
		prev.next = cur.next
		//圖5，將[3,4]接回[1]
		cur.next = nextKeep
		//處理下一組
		prev = cur
		cur = cur.next
	}

	return firstNode.next

}