/*
* @Author: zhanghang
* @Date:   2018-02-09 21:59:15
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 22:18:32
*/
// 從上面nRows=3，nRows=4觀察可以知道，字母要回到第一列總共要經過 2nRows - 2次變化，例如上面的例子A->G之間總共經過 2*4-2 = 6個字母
// 用一個array來儲存毎一列的字母，上面範例最後array[0] = 'AGM'
// n = 2*nRows - 2代表實際上經過的字母數，字母位置為i， i%n < nRows時，直接將字母放入array[i]，
// 例如"B"的位置i為1，1%6 = 1， 將"B"放入array[1]
// 當i%n >= nRows時， 放入的位置為 nRows-1 - (i%n) - nRows -1，整理一下可以寫成2nRows - i%n - 2
// 例如上面的"F" [i=5, i%6 = 5], 5 > 4 因此"F"在array中的位置為 24 - 5 - 2 = 1，
// 因此將"F"放到array[1]，也就是array[1] = "BF"
// 最後將array內的字串結合回傳
// 观察规律，用写下来的  比如 f是  2*4 -2 -5  e是2*4 -2 -4   不过确实比较难发现规律
var convert = function(s, numRows) {
    if (s===null) return ''
        if (numRows===1) return s
    var n = numRows*2-2
    var array = []
    for(var k =0;k<numRows;k++){
        array.push('')
    }

    // 注意这个array是横向的列就好了，其实可以想象时钟转了一圈，多列一下，总能够套出来规律的，找出相关的因素，s的i，变回初始状态的过程，i与这个变量关系
    for(var i in s){
        var lineNumber = i%n
        if (lineNumber<numRows) {
            array[lineNumber]+= s[i]
        }else {
            array[2*numRows - lineNumber-2]+= s[i]
        }
    }

    return array.join('')
}

console.log(convert("PAYPALISHIRING", 3) )