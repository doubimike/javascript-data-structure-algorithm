/*
* @Author: zhanghang
* @Date:   2018-02-13 19:55:38
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-13 20:04:55
*/
// Remove all elements from a linked list of integers that have value val.
// Example Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6 Return: 1 --> 2 --> 3 --> 4 --> 5+


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) {
        return head
    }

    var newNode = new   ListNode(0)
    newNode.next = head


    var prev = newNode
    var cur = newNode.next
    while(cur){
        if (cur.val ===val) {
            prev.next = cur.next
            cur = cur.next
        }else {
            prev = cur
            cur = cur.next    
        }
        
    }

    return newNode.next
}