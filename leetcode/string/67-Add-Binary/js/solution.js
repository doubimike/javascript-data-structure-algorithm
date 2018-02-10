/*
* @Author: zhanghang
* @Date:   2018-02-09 19:51:22
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 20:06:03
*/
var addBinary = function (a,b) {
    var i = a.length-1
    var j = b.length -1
    var carry = 0
    var sum = []

    while(i>=0||j >=0){
        var tmp = 0
        if(i>=0) tmp += (a.charAt(i--)-0)
        if(j>=0) tmp += (b.charAt(j--)-0)
        tmp += carry
        sum.push(tmp%2)
        carry = (tmp>=2)?1: 0
    }

    if(carry!==0) sum.push(carry)

        return sum.reverse().join('')
}
console.log(addBinary('10', '1'))
console.log(addBinary('1011', '1'))