/*
* @Author: zhanghang
* @Date:   2018-02-23 22:24:05
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-23 22:25:46
*/
function selectSort(array) {
    var len = array.length
    ,indexMin
    for(var i =0;i<len-1;i++){
        indexMin = i;
        for(var j = i;j<len;j++){
            if (array[indexMin]>array[j]) {
                indexMin = j
            }
        }
        if (i!==indexMin) {
            swap(i,indexMin)
        }
    }
}