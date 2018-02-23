// 翻譯
// 融合兩個排序過的連結串列為一個新的連結串列後回傳。
// 範例：
// [1,2,2,3] + [1,3] = [1,1,2,2,3,3]

// 思路
// 讀取L1目前的值與L2目前的值比較，如果L1.val < L2.val，將當前的L1節點加入新的連結串列(result)，然後L1指向下一個節點。
// 如果L1.val > L2.val較小，則把L2當前的節點加到result，直到L1或L2一方為null則停止比較，並且將另外一邊剩下的節點加入result。
// 
// 
// 
// 思路里面经典的一个地方是开辟了一个新的链表
// 还有代码循环条件的判断，如何重新进入循环都比较清晰，这是我要改进的地方

var mergeTwoLists = function(l1, l2) {
	// 儲存結果的ListNode
	var result = new ListNode(0)
	// 目前Node位置
	var c = result

	while (l1 !== null && l2 !== null) {
		// l1,l2較小的數加入result
		if (l1.val > l2.val) {
			c.next = l2
			l2 = l2.next
		} else {
			c.next = l1
			l1 = l1.next
		}
		c = c.next
	}
	//將l1,l2剩下的Node加到result
	if (l1 !== null) {
		c.next = l1
	}

	if (l2 !== null) {
		c.next = l2
	}

	// 经典，和new呼应
	return result.next

}