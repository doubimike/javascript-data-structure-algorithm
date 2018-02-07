function ListNode(val) {
	this.val = val
	this.next = null
}



//  最主要是理解反转的逻辑，逻辑明白了，你才能写出代码，逻辑不明白，你咋写出代码来呢？
// 首先就是用自然语言解释逻辑，脑子想明白了，再用手去写明白
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

	while (cur != null) {
		var temp = cur
		cur = cur.next
		temp.next = null
		temp.next = prev
		prev = temp
	}

	return prev

}

var deleteNode = function(node) {
	node.val = node.next.val
	node.next = node.next.next
}

var deleteDuplicates = function(head) {
	if (head === null || head.next === null) {
		return head
	}

	var cur = head

	while (cur.next !== null) {
		if (cur.val == cur.next.val) {
			cur.next = cur.next.next
		} else {
			cur = cur.next
		}
	}
	return head
}


var hasCycle = function(head) {
	if (head == null || head.next == null) {
		return false
	}

	var node = head
	while (node !== null) {
		if (node.flag) {
			return true
		}
		node.flag = true
		node = node.next
	}

	return false
}

var hasCycle = function(head) {
	if (head == null || head.next == null) {
		return false
	}
	var slow = head.next
	var fast = head.next.next
	if (fast == null) {
		return fasle
	}
	while (slow != fast) {
		if (fast.next == null) {
			return false
		}

		slow = slow.next
		fast = fast.next.next
		if (slow == null || fast == null) {
			return false
		}
	}

	return true
}


var mergeTwoLists = function(l1, l2) {
	var result = new ListNode(0)
	var c = result
	while (l1 !== null && l2 !== null) {
		if (l1.val > l2.val) {
			c.next = l2
			l2 = l2.next
		} else {
			c.next = l1
			l1 = l1.next

		}
		c = c.next

		if (l1 !== null) {
			c.next = l1
		}
		if (l2 !== null) {
			c.next = l2
		}
		return result.next
	}
}

var swapPairs = function(head) {
	if (head === null || head.next === null) return head
	var prev = head
	var cur = head.next
	while (prev != null && cur !== null) {
		var temp = prev.val
		prev.val = cur.val
		cur.val = temp

		if (cur.next == null || cur.next.next == null) {
			break
		}

		prev = cur.next
		cur = cur.next.next
	}

	return head
}