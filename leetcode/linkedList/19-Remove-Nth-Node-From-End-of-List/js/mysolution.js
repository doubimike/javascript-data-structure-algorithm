// Given a linked list, remove the nth node from the end of list and
// return its head.

// For example,

// Given linked list: 1 - > 2 - > 3 - > 4 - > 5, and n = 2.

// After removing the second node from the end, the linked list becomes 1 - > 2 - > 3 - > 5.
// Note:
// 	Given n will always be valid.
// Try to do this in one pass.


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 好歹是做出了一个题目，心情好很多
function ListNode(val) {
	this.val = val;
	this.next = null;
}
var removeNthFromEnd = function(head, n) {

	var length = getLength(head)
	var remove = length - n + 1
	var newNode = new ListNode(0)
	newNode.next = head

	var count = 1
	var prev = newNode
	var cur = newNode.next

	while (cur) {

		if (count === remove) {
			console.log('cur', cur)
			console.log('count', count)
			console.log('remove', remove)
			console.log('prev', prev)
			prev.next = cur.next
			break
		}
		count++
		prev = cur
		cur = cur.next

	}

	return newNode.next
}

function getLength(node) {

	var count = 0
	var cur = node
	while (cur) {
		count++
		cur = cur.next
	}

	return count
}


var l1 = new ListNode(1)
var l2 = new ListNode(2)
var l3 = new ListNode(3)
var l4 = new ListNode(4)


l1.next = l2
// l2.next = l3
// l3.next = l4
console.log('l1', l1)
console.log('l1 length', getLength(l1))
console.log(removeNthFromEnd(l1, 2))