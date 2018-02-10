/*
* @Author: zhanghang
* @Date:   2018-02-09 22:26:40
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 22:41:12
*/
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.




/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s===''){
        return true
    }
    //轉小寫
    s = s.toLowerCase();
    //取代非文字部分  这部分其实我不太会的 正则要找时间好好练习以下
    s = s.replace(/[^a-z0-9]/ig,"");

    for(var i =0,j= s.length-1;i<=j;i++,j--){
        if (s[i]!==s[j]) {
            return false
        }
    }
    return true
};
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpanam'))