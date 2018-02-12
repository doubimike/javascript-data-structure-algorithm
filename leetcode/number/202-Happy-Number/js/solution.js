/*
* @Author: zhanghang
* @Date:   2018-02-10 23:34:19
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 00:09:07
*/
// 思路
// 使用一個map儲存計算過的數字，如果目前的數字已經計算過，表示無窮迴圈出現，return false。持續計算到1出現true或是無窮迴圈出現false。
// 範例：判斷4是不是happy number

// 4^2       = 16   
// 1^2 + 6^2 = 37  
// 3^2 + 7^2 = 58  
// .....
// ......... = 20  
// 2^2 + 0   = 4  
// 4重複出現，因此進入無窮迴圈  
// 主要是判断怎么进入了无限循环
var isHappy = function (n) {
    // map儲存計算過的數字
    var store = {}
      // 如果map裡面出現過這個數字 或 數字 = 1，停止迴圈。
      while(!store[n]&&n!==1){
        store[n] = n
        // 單純的計算毎一個位數的平方和
        n.toString().split('').forEach(function (v,i) {
            // n===0是单纯重置n
            if (i===0) {n=0}
                n+= v*v
        })
        n = parseInt(n)
      }

      return n ===1
}



console.log(isHappy(23))

