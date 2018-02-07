/*
* @Author: zhanghang
* @Date:   2018-02-05 18:37:02
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-05 18:54:34
*/
// LeetCode 345. Reverse Vowels of a String
// 題目
// Write a function that takes a string as input and reverse only the vowels of a string.
// Example 1: Given s = "hello", return "holle".
// Example 2: Given s = "leetcode", return "leotcede".
// Note: The vowels does not include the letter "y".
// 翻譯
// 給一個英文字串，將裡面的母音字母反轉。
// 範例1:
// Given s = "hello", return "holle".
// 範例2：
// Given s = "leetcode", return "leotcede".
// 注意： y不算在母音字母中。
// 思路
// 先將字串中的母音儲存在array
// 重新搜索字串中的母音，將array理面的字元依相反順序取代字串中的母音

function reverse(str) {
    var arr = 'aoe'
    var arr2 = []

    for(var i =0;i<str.length;i++){
        if(arr.indexOf(str[i])>=0){
            arr2.push(i)
        }
    }
    console.log('arr2',arr2)

    var newarr  = str.split('')
    for(var j =0;j<arr2.length;j=j+2){
        if (newarr[arr2[j+1]]) {
            var temp = newarr[arr2[j+1]]
            newarr[arr2[j+1]] = newarr[arr2[j]]
            newarr[arr2[j]] = temp
        }
    }
    return newarr.join('')
}


console.log(reverse('helloo3e'))





/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {

    var vowels = [];  // 儲存找到的母音

    // 找母音
    for(var i = 0 ; i< s.length ; i++){
        if((/^[aeiou]$/i).test(s[i])){
            vowels.push(s[i]);
        }    
    }

    var v = vowels.length - 1;
    // 因為之前是用array儲存找到的母音，所以把本來的字串也轉成array
    var sAry = s.split("");

    // 用之前找到的array取代母音
    for(var j = 0 ; j < sAry.length ; j++){
        if((/^[aeiou]$/i).test(sAry[j])){
            sAry[j] = vowels[v--];
        }    
    }

    return sAry.join("");
};