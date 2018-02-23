/*
* @Author: zhanghang
* @Date:   2018-02-14 09:26:49
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-14 09:51:57
*/
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.


  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var s1 = ''
  var s2 = ''
  while(l1){
    s1 = l1.val + s1
    l1 = l1.next
  }  
  while(l2){
    s2 = l2.val + s2
    l2 = l2.next
  }  
  console.log(s1,s2)
  var result =  l1-''+(l2-'') +''

  var node = new ListNode(0)
  var arr = result.split('')
  console.log('arr',arr)
  var cur = node
  for(var i =0;i<arr.length;i++){

    var newNode = new ListNode(arr[arr.length-1-i])
    console.log('newNode',newNode)
    cur.next = newNode
    cur = newNode
  }
  return node.next
};

var l1 = new ListNode(2)
var l2 = new ListNode(0)
var l3 = new ListNode(3)

var l4 = new ListNode(5)
var l5 = new ListNode(6)
var l6 = new ListNode(4)

l1.next = l2
l2.next = l3

l4.next = l5
l5.next = l6

console.log(addTwoNumbers(l1,l4))