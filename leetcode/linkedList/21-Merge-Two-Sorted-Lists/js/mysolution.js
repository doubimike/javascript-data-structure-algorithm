// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 分析思路 其实数组也有这种题目，思路应该是差不多的，区别可能就是节点的遍历不太一样
// 考点 链表的遍历
// 思路二  先合并这个link list 然后排序这个link list
// 思路三  一个一个来  讲L2的节点一个一个插入到l1中，这样比同时进行思考起来比较简单
// 
// 思路有了但是实现了20分钟实现不出来，说明理解的不透彻，先看答案，过几天重刷
var mergeTwoLists = function(l1, l2) {
	if (!l2) {
		return l1
	}
	if (!l1) {
		return l2
	}

	if (!l1 && !l2) {
		return null
	}
	var cur2 = l2.head
	var cur1 = l1.head
	while (cur2) {
		while (cur1) {
			// compare l1 and l2
			if (cur1.next && cur1.val <= cur2.val && cur2.val < cur1.next) {
				cur2.next = cur1.next
				cur1.next = cur2
				cur1 = cur2.next

			}
		}
	}
}