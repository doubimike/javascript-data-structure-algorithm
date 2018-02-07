/*
* @Author: zhanghang
* @Date:   2018-02-05 17:40:24
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-05 18:34:07
*/
// LeetCode 13. Roman to Integer
// 題目
// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

// 翻譯
// 給一個羅馬數字符號，將之轉為整數，這個數字一定落在1 到 3999 之間。

// 範例：
// I = 1, IX = 9

// 思路
// 使用一個map來儲存羅馬符號跟數字之間的對應關係，在一般的情況下(ex. III, VI)，可以直接將羅馬符號轉換成數字。

// 不過如果出現IV，XC這種組合，就要另外處理，這種組合的特色是後面的符號會大於前面的符號，因此一次讀兩個羅馬符號來找出這種組合。 一次讀兩個羅馬數字，如果第二個數字(n2)比第一個(n1)大，整數值為n2-n1，如果是一般的情況n2 <= n1，整數值為n2+n1。

var romanToInt = function (s) {
    var map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    var sum = 0;
    for(var i =0;i<s.length;i++){
        // sum += map[s[i]]

        var v1 = map[s[i]];
        var v2 = map[s[i+1]];
        if (v2>v1) {
            sum = sum + v2 -v1
            i++;
        }else {
            sum = sum +v1
        }
    }
    return sum
}



console.log(romanToInt('VI'))
console.log(romanToInt('IV'))
