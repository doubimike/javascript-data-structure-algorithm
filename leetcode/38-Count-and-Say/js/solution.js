/*
 * @Author: zhanghang
 * @Date:   2018-02-08 22:27:00
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-09 09:52:37
 */
// 思路
// 相信這題很多人跟我一樣，看懂題目後就覺得簡單了，直接看下面的code就行。


// 思路：题意实在太难理解了，尤其是英文又不好，只能参看下别人的资料，理解下规则。终于理解，题意是n=1时输出字符串1；n=2时，数上次字符串中的数值个数，因为上次字符串有1个1，所以输出11；n=3时，由于上次字符是11，有2个1，所以输出21；n=4时，由于上次字符串是21，有1个2和1个1，所以输出1211。依次类推，写个countAndSay(n)函数返回字符串。

// 题意理解之后就好办了，是典型的递归问题，其代码很简单，如下：


// 计数报数序列按如下规律开始递增：
// 1，11，21，1211，111221，……

// 1 读作“1个1”或11.
// 11 读作“2个1”或21.
// 21 读作“1个2，1个1”或1211.

// 给定一个整数n，生成第n个序列。

// 备注：数字序列应该用字符串表示。


// The following are the terms from n=1 to n=10 of the count-and-say sequence:
//  1.     1
//  2.     11
//  3.     21
//  4.     1211
//  5.     111221 
//  6.     312211
//  7.     13112221
//  8.     1113213211
//  9.     31131211131221
// 10.     13211311123113112211

// To generate the nth term, just count and say the n-1th term.


// 这里用的循环代替递归
var countAndSay = function(n) {
    var idx = 1
    var result = '1'
    while (idx !== n) {
        result = countString(result)
            ++idx
    }
    return result
}

var countString = function(string) {
    var result = ''
    var num = null
    var count = 0
    for (var i = 0; i < string.length; i++) {
        var value = string.charAt(i)
        if (value !== num) {
            if (num !== null && count) {
                result += (count + num)
            }
            num = value
            count = 1
        } else {
            ++count
        }

        if (i === string.length - 1) {
            result += (count + num)
        }
    }

    return result

}


console.log(countAndSay(5))