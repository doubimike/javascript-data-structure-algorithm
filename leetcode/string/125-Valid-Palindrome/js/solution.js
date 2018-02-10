/*
* @Author: zhanghang
* @Date:   2018-02-09 22:41:35
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 22:43:08
*/
var isPalindrome = function(s) {
    //轉小寫
    s = s.toLowerCase();
    //取代非文字部分
    s = s.replace(/[^a-z0-9]/ig,"");
    //反轉
    var rev = s.split("").reverse().join("");
    //判斷反轉後是否與之前處理過的字串相等  这个方法还挺不一样的
    return s.indexOf(rev) == 0;
};