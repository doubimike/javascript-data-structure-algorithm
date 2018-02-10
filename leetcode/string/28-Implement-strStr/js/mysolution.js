/*
* @Author: zhanghang
* @Date:   2018-02-09 20:08:21
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 20:20:01
*/
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};

console.log(strStr('hello','ll'))
console.log(strStr('hello','hhh'))

var strStr = function(haystack, needle) {
    if (needle==='') {
        return 0
    }
    for(var i =0;i<haystack.length;i++){
        if (haystack.charAt(i)===needle.charAt(0)) {
            for(var j =1;j<needle.length;j++){
                if (haystack.charAt(i+j)!==needle.charAt(j)) {
                    break
                }
            }
            if (j===needle.length) {
                return i
            }
        }
    }

    return -1
};

console.log(strStr('hello','ll'))
console.log(strStr('hello','hhh'))
