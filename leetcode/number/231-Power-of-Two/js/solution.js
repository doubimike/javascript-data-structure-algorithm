/*
* @Author: zhanghang
* @Date:   2018-02-10 23:17:14
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-10 23:17:52
*/
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    if(n === 1) return true;
    while(n>3){
        if(n%2 != 0) return false; 
        n = parseInt(n/2);
    }
    return n%2 === 0;
};