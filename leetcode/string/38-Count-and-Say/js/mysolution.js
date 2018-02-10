/*
 * @Author: zhanghang
 * @Date:   2018-02-08 22:21:32
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-09 09:52:48
 */
// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.
// Given an integer n, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

// Example 1:

// Input: 1
// Output: "1"
// Example 2:

// Input: 4
// Output: "1211"

// 翻譯
// 這是一個算完說出來的序列，序列如下：
// 1, 11, 21, 1211, 111221, ...
// 1     讀做 1個1， 所以下一個變成 11  
// 11    讀做 2個1， 也就是21  
// 21    讀做 1個2 1個1，得到1211
// 1211  1個1，1個2，2個1  111221  


// 基本用的递归
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {

    if (n == 1) {
        return '1'
    }
    if (n == 2) {
        return '11'
    }

    var prev = countAndSay(n - 1)
    console.log('prev', prev)
    var str = prev[0]
    var i = 1
    var count = 1
    var result = ''
    while (i < prev.length) {
        console.log('iiii', i)
        if (prev[i] === prev[i - 1]) {
            console.log('prev', prev)
            console.log('preve', prev[i])
            console.log('preve', prev[i - 1])
            count++
            console.log('enter')
            if (i === (prev.length - 1)) {
                result = result + count + str
                console.log('resulteee', result)
            }
        } else {
            console.log('elet')
            result = result + count + str
            console.log('result', result)
            str = prev[i]
            console.log('newstr', str)
            count = 1
            if (i === (prev.length - 1)) {
                result = result + count + str
            }
        }
        i++
        console.log('iafter', i)
    }


    return result
    // if (n==1) {
    //     return '1'
    // }
    // if (n==2) {
    //     return '11'
    // }

    // var prev = countAndSay(n-1)
    // var str = prev[0]
    // var i = 1
    // var count = 1
    // var result = ''
    // while(i<prev.length){
    //     if (prev[i]===prev[i-1]) {
    //         count++
    //         if (i===(prev.length-1)) {
    //             result =result+ count+str
    //         }
    //     }else {
    //         result = result +  count +str
    //         str = prev[i]
    //         count = 1
    //         if (i===(prev.length-1)) {
    //             result = result +count+str
    //         }
    //     }
    //     i++       
    // }


    // return result

}


console.log(countAndSay(5))