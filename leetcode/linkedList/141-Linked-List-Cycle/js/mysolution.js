/*
* @Author: zhanghang
* @Date:   2018-02-12 22:00:37
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-12 22:09:08
*/
// Given a linked list, determine if it has a cycle in it.

// Follow up:
// Can you solve it without using extra space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 // 給一個連結陣列，判斷裡面是不是包含一個循環連結。
// 進階： 你能不使用額外的空間來解這題嗎?
// 範例:
// [1,2,3,2,3,2.....]，[1]的next是[2]
// [2]的next是[3]
// [3]的next是[2]，從上一步我們知道2的next是[3]，所以這是一個循環連結
// 假如[1,2,3,2,3]，那就不是一個連結陣列迴圈，因為最後的[3]next並不是[2]，所以循環連結不成立。
// 分析  成环的条件是什么，怎么用代码的形式把这个条件写出来 需要什么辅助变量？其实不断的试错也是一种解决问题的方法啊，只要能够先解决问题就好  
var hasCycle = function(head) {
    if (!head) {
        return false
    }
    if (!head.next) {
        return false
    }

    var cur = head.next
    while(cur){
        var prev = cur
        cur = cur.next
        if (cur.next===prev) {
            return true
        }
    }

    return false
};

