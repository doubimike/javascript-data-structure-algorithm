// Reverse a singly linked list.

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
// 分析 思路 思路最重要  链表的递归很重要，可能没有可能用到递归？  4321  4放到3后面  34放到2后面  234放到1后面，这个就是思路
// 思路有了，但是实现可能比较绕，循环的条件是什么，如何迭代，这个需要想清楚，没想清楚只能一个个试错，用console这种笨的方法试出来，可是这种方法谈不上优秀
// 我放弃了 做了这么久没做出来  
// 其实之前简单过了一遍答案，但是没有自己实现出来，
// 现在看来，只是看一遍和自己实现出来果真是天壤之别
var reverseList = function(head) {
	var current = head
	if (!current.next) {
		return current
	}

	while (current) {
		temp = prev = current
		current = current.next
		next = current.next

		// 交换
		current.next = temp
		temp.next = next

		// temp = current
		// current = next

	}


};