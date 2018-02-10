/*
* @Author: zhanghang
* @Date:   2018-02-10 23:10:12
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 23:11:11
*/
// 不管進階的話跟LeetCode 231. Power of Two解法是一模一樣的。 因此只要不斷的把這個數除3，如果發現餘數不是0，就可以判斷這個數不是3的次方數

var isPowerOfThree = function (n) {
    while(n>2){
        if (n%3!==0) {
            return false
        }

        n = parseInt(n/3)
    }

    return n===1
}