/*
* @Author: zhanghang
* @Date:   2018-02-08 21:31:55
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-08 21:53:16
*/
// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Examples:
// pattern = "abba", str = "dog cat cat dog" should return true.
// pattern = "abba", str = "dog cat cat fish" should return false.
// pattern = "aaaa", str = "dog cat cat dog" should return false.
// pattern = "abba", str = "dog dog dog dog" should return false.
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {

    var patternArr = pattern.split('')
    var strArr = str.split(' ')
    if (patternArr.length!==strArr.length) {
        return false
    }
    var map ={}
    for(var i =0;i<patternArr.length;i++){
        var key = patternArr[i]
        if (!map[key]) {
            map[key]= strArr[i]
        }else {
            if (map[key]!==strArr[i]) {
                return false
            }
        }
    }

    var valueArr = []
    for(var key in map){
        valueArr.push(map[key])
    }

    var repeatMap = {}
    for(var i =0;i<valueArr.length;i++){
        if (!repeatMap[valueArr[i]]) {
            repeatMap[valueArr[i]] = valueArr[i]
        }else {
            return false
        }
    }

    return true
    
};

console.log(wordPattern('abba','dog cat cat dog'))
console.log(wordPattern('abba','dog dog dog dog'))