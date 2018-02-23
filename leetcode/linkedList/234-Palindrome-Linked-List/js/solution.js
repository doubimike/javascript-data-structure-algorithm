/*
* @Author: zhanghang
* @Date:   2018-02-13 18:59:27
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-13 19:12:25
*/
// 不考慮進階題的情況很簡單，走訪連結陣列，使用兩個字串來處理
// 一個正向字串(str = str + value)，另外一個為反向字串(str = value+str)
// 最後判斷兩個字串是否相等

var isPalindrome = function (head) {
    var rec = ''  //反向字串
    var seq = ''  //正向字串
    while(head!==null){
        seq += head.val
        rec = head.val + rec
        head = head.next
    }
    // 反向字串與正向字串相等就是回文陣列
    return seq ===rec

}


// 進階
// 因為用了另外一個字串，因此額外空間為O(n)，不符合進階的要求，為了不使用額外的O(n)空間，我們先用快慢指針找出linked list的中點
// ，找到後從中點之後將linked list反轉再與本來的head前半段比較是否相等，這邊需要一個額外的空間儲存反轉後的linked list。


var isPalindrome = function (head) {
    var middle = findMiddle(head) // 找尋中點
    var rNode = reverse(middle)  //从重点反转

    // 比對反轉後的node與head前半段是否相等
    while(rNode!==null){
        if(head.val!==rNode.val){
            return false
        }
        head = head.next
        rNode = rNode.next
    }

    return true

    // 使用快慢指針找出中點
    // 这个是黑科技啊
    function findMiddle(node) {
        var fast = node
        var slow = node
        while(fast!==null && fast.next !==null){
            slow = slow.next
            fast = fast.next.next
        }

        return slow
    }
    // 反轉linked list
    function reverseNode(node){
        if (node!==null||node.next===null) {return node}
            var prev = null
            var cur = node
            while(cur!==null){
                var temp = cur
                cur = cur.next
                temp.next = prev
                prev = temp 
            }

            return prev
    }


}