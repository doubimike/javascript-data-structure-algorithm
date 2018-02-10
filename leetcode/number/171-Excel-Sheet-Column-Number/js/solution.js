/*
* @Author: zhanghang
* @Date:   2018-02-10 09:45:15
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 09:45:53
*/
// 思路
// A-Z總共26個字母，因此這就是一個26進位的系統
// 將字串分別取出字元A-Z，根據ANSI CODE，A的code為65，A = 65 - 64 = 1
// 以AB為例， AB = (A)26^1 + (B)26^0 = 126+ 2*1 = 28
// 以AZ為例， AZ = (A)26^1 + (Z)26^0 = 126+ 26*1 = 52

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var sum = 0;
    var exp = 0;
    for(var i = s.length -1 ; i >= 0 ; i--){
        // 根據ansi將字元轉成數字，這邊是從字串後面，也就是低位數開始取
        var v = s.charCodeAt(i) - 64;
        // 毎多一個字元代表26的n次方
        v = v*Math.pow(26,exp++);
        sum += v;
    }
    return sum;    
};