/*
* @Author: zhanghang
* @Date:   2018-02-08 22:27:00
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-08 23:39:14
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
var countAndSay = function (n) {
    if (n==1) {
        return '1'
    }
    if (n==2) {
        return '11'
    }

    var prev = countAndSay(n-1)
    console.log('prev',prev)
    var str = prev[0]
    var i = 1
    var count = 1
    var result = ''
    while(i<prev.length){
        console.log('iiii',i)
        if (prev[i]===prev[i-1]) {
            console.log('prev',prev)
            console.log('preve',prev[i])
            console.log('preve',prev[i-1])
            count++
            console.log('enter')
            if (i===(prev.length-1)) {
                result =result+ count+str
                console.log('resulteee',result)
            }
        }else {
            console.log('elet')
            result = result +  count +str
            console.log('result',result)
            str = prev[i]
            console.log('newstr',str)
            count = 1
            if (i===(prev.length-1)) {
                result = result +count+str
            }
        }
        i++       
        console.log('iafter',i)
    }


    return result
    
}


console.log(countAndSay(5))