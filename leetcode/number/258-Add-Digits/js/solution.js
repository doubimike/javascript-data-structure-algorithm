/*
* @Author: zhanghang
* @Date:   2018-02-10 09:19:54
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 09:30:05
*/
var addDigits = function(num) {
    while(num>=10){
        var n = num
        var sum = 0
        // 取出每個位數的值
       // ex. n = 138, 138%10 = 8, sum = 8, n = 13
       //     n = 13,  13%10  = 3, sum =11, n = 1

       while(parseInt(n/10)>0){
        sum+= parseInt(n%10)
        n = parseInt(n/10)
       }
       num = parseInt(n%10)+sum
    }

    return num
}


var addDigits = function (num) {
    while(num>=10){
        var sum = 0
        (''+num).split('').forEach(function (v) {
            sum+= parseInt(v)
        });
        num = sum
    }

    return sum
}
// 進階
// 這已經是偏向數學的範圍，怎麼證明這邊就跳過了，麻煩自己上網搜尋， 簡單說就是判斷一個數是否為9的倍數，可以從每個位數相加是否能被9整除直接判斷，運用這樣的想法，直接取這個數除9的餘數。
// 有点看不懂了，也无所谓了，我不要求自己能够懂这些数学的东西
var addDigits = function(num) {
    if(num == 0) return 0;
    if(num%9==0) return 9;
    return num%9;
};

