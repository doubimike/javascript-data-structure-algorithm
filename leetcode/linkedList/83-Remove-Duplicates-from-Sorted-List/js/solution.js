/*
* @Author: zhanghang
* @Date:   2018-02-12 21:54:01
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-12 21:57:50
*/
// 改一個排序過的連結陣列，刪除重複的節點。
// 範例：
// [1,1,2] -> return [1,2]
// [1,1,2,3,3] -> return [1,2,3]
// 思路
// 因為是排序過的，所以只要判斷後面的節點與當前的是否相同，如果後面的節點跟目前的相同，就跳過他。
// 这个题目证明了只是自己简单看了一边别人的答案，再自己实现，依旧会有卡壳的地方，所以基本每题都需要保证自己能够独立实现一遍出来

var deleteDuplicates = function(head) {
    if(head === null || head.next ===null) return head
    var cur = head
    while(cur.next){
        if (cur.val===cur.next.val) {
            cur.next = cur.next.next
        }else {
            cur = cur.next
        }
    }
    return head
}