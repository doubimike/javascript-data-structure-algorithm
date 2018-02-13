// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 分析思路 
// 用一个数来做判断 count 如何翻转   偶数 就和下一个翻转
// 我发现对于链表我真的是完全不知道咋办
var swapPairs = function(head) {
	if (!head) {
		return head
	}
	if (!head.next) {
		return head
	}

	var count = 0
	var cur = head

	while (count % 2 === 0 && cur) {
		console.log('count', count)
		var next = cur.next
		console.log('next', next)
		cur.next = next.next
		next.next = cur
		cur = cur.next
		console.log('cur', cur)
		if (count === 0) {
			head = next
		}
		count += 2

	}

	return head
}

function ListNode(val) {
	this.val = val;
	this.next = null;
}


var l1 = new ListNode(1)
var l2 = new ListNode(2)
var l3 = new ListNode(3)
var l4 = new ListNode(4)


l1.next = l2
l2.next = l3
l3.next = l4

console.log(swapPairs(l1))