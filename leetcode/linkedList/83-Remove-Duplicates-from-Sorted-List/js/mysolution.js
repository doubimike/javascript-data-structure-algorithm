/*
* @Author: zhanghang
* @Date:   2018-02-12 21:32:10
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-12 21:52:42
*/
// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.

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
 // 分析
var deleteDuplicates = function(head) {
    if (!head) {
        return null
    }

    if(!head.next){
        return head
    }

    var current = head
    while(current && current.next){
        if (current.val ===current.next.val) {
            current.next = current.next.next
            if(current)
                {current = current.next}
            console.log('current',current)
        }else {
            current = current.next
        }
    }

    return head
};


// console.log(deleteDuplicates({
//     val: 1,
//     next: {
//         val: 1,
//         next: {
//             val: 2,
//             next: null
//         }
//     }
// }))

console.log(deleteDuplicates({
    val: 1,
    next: {
        val: 1,
        next: null}
}))