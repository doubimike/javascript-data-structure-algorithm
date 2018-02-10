/*
* @Author: zhanghang
* @Date:   2018-02-08 21:55:28
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-08 22:18:02
*/

// 思路
// 這跟205. Isomorphic Strings可以說是95%以上的像
// 一樣用map儲存出現過的樣版與字串的對應關係，當發現對應不成立，就回傳false

var wordPattern = function (pattern,str) {
    var patternMap = {}
    var strMap = {}
    var ary = str.split(' ')
    if (pattern.length!==ary.length) return false
    for(var i in pattern){
        var p = pattern[i]
        var s = ary[i]
        if(!patternMap[p]){
            patternMap[p] = s
        }else if (patternMap[p]!=s){
            return false
        }

        if(!strMap[s]){
            strMap[s]=p
        }else if(strMap[s]!=p){
            return false
        }
    }

    return true

}