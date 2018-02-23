/*
 * @Author: mike.zhang
 * @Date:   2018-02-13 15:44:39
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-13 16:05:25
 */
// 注意:
// n不會比連結陣列還長，試著跑一次迴圈解題。
// 思路
// 這題可以用快慢指針的做法，就是快指針先走n個節點，慢指針再開始與快指針一起跑，當快指針到底的時候，慢指針會停在要移除的節點n上面。
// 不過慢指針應該要停在要移除節點的前一點才對，因為連結陣列的刪除，應該是前一點跳過下一點，這樣當前的節點就會被刪除。 因此將慢指針的起點改在一個假的首節點0上面修正這個問題。

var removeNthFromEnd = function(head, n) {
	if (head == null) return head
	// 用假節點當首節點，方便操作
	var node = new ListNode(0)
	node.next = head

	var slow = node
	var fast = head
	// 快指針先跑n個節點
	while (n > 0) {
		fast = fast.next
		n--
	}
	// 不得不说太机制了
	// 因為快指針已經先跑n點，所以當快指針fast跑完，慢指針slow會在要移除的前一點上
	while (fast) {
		fast = fast.next
		slow = slow.next
	}

	if (slow.next === null) {
		slow.next = null
	} else {
		slow.next = slow.next.next
	}

	return node.next
}

// [1,2,3,4] ， n = 2，fast = [1,2,3,4] ， slow = [0,1,2,3,4] (0為假節點)
// n = 2，快指針先走2點，fast = [3,4]，slow = [0,1,2,3,4]
// 快慢指針一起跑，當fast = null，slow = [2,3,4]，這時候慢指針必須跳過他第2個點，也就是跳過3