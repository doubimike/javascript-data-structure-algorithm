/*
* @Author: zhanghang
* @Date:   2018-02-09 23:37:14
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 23:44:42
*/
var compareVersion = function (version1,version2) {
    var array1 = version1.split('.')
    var array2 = version2.split('.')

    // 取版本號較長的跑loop 
    var max = array1.length>array2.length? array1.length: array2.length

    for(var i=0;i<max;i++){
        var i1 = parseInt(array1[i])
        var i2 = parseInt(array2[i])

        // 如果其中一邊後面已經沒版本號，後面就設為0
                // ex.  [1.0.1], [1.0] 轉換成 [1.0.1], [1.0.0]作比對   

                // 这个是重点
                i1 =  array1.length< i+1?0: i1
                i2 =  array2.length< i+1?0: i2

                if (i1>i2) {
                    return 1
                }
                if (i2>i1) {
                    return -1
                }
                
    }
    return 0
}