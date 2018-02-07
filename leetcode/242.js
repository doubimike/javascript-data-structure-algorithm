/*
* @Author: zhanghang
* @Date:   2018-02-05 16:20:00
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-05 17:36:08
*/
// 題目
// Given two strings s and t, write a function to determine if t is an anagram of s.
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
// Note:
// You may assume the string contains only lowercase alphabets.
// 翻譯
// 給兩個字串s與t，回傳t是否為s的重組字
// 範例：
// s = "anagram", t = "nagaram" 回傳true
// s = "rat", t = "car" 回傳false

// 思路
// 要比較兩個字串裡面的字元是否相同，首先可以判斷長度是否相等，不相等就可以直接判定為false， 接下來將重新排序後的字串比較是否相等。


function compare(str1,str2) {
    if (str1.length!==str2.length) {
        return false
    }
    var arr1 = str1.split('')
    var arr2 = str2.split('')
    return arr1.sort().join('')===arr2.sort().join('')
}

console.log(compare('hello','elloh'))