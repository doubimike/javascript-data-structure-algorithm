/*
* @Author: zhanghang
* @Date:   2018-02-10 09:32:54
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 09:42:35
*/
// Related to question Excel Sheet Column Title +

// Given a column title as appear in an Excel sheet, return its corresponding column number.
// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 

function titleToNumber(s) {
    var result = 0
    for(var i=0;i<s.length;i++){
        result += Math.pow(26,s.length-1-i)*(s.charCodeAt(i)-64 )
    }

    return result
}

console.log(titleToNumber('AA'))