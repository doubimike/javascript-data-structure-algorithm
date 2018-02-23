/*
* @Author: zhanghang
* @Date:   2018-02-12 20:59:12
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-12 21:05:06
*/
// Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 //分析 肯定是用递归了，可是感觉题目并没有给要删除的参数啊,囧 
var deleteNode = function(node) {
        node.val = node.next.val
        node.next = node.next.next
};