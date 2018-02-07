/*
* @Author: zhanghang
* @Date:   2018-02-05 18:59:31
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-05 19:08:42
*/
// LeetCode 205. Isomorphic Strings
// 題目
// Given two strings s and t, determine if they are isomorphic.
// Two strings are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.
// For example, Given "egg", "add", return true.
// Given "foo", "bar", return false.
// Given "paper", "title", return true.
// 翻譯
// 給兩個字串s跟t，判斷他們是否是同構字。
// 如果他們是同構字，表示s裡面毎個字元都可以拿來對應t的特定字元。
// 全部的字元都要依順序被取代，而且s一種字元只會對應t一種字元，也可能對應到與自己相同的字元。
// 思路
// 需要兩個map，一個記錄s對t的對應關係，另外一個記錄t對s，如果字元沒在s中出現，加到map，出現過的話就拿出來跟t比對，不一致表示非同構字。

var isIsomorphic = function (s,t) {
    var mapS = {}
    var mapT = {}
    for(var i in s){
        var valueS = s[i]
        var valueT = t[i]

        if(!mapS[valueS]){
            mapS[valueS] =valueT
        }else if(mapS[valueS]!=valueT){
            return false
        }

        if(!mapT[valueT]){
            mapT[valueT] =valueS
        }else if(mapT[valueT]!=valueS){
            return false
        }

    }

    console.log('maps',mapS)
    console.log('mapT',mapT)

    return true
}

isIsomorphic('egg','add')