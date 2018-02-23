/*
 * @Author: zhanghang
 * @Date:   2018-02-23 22:10:54
 * @Last Modified by:   zhanghang
 * @Last Modified time: 2018-02-23 22:18:10
 */
// 思路
// 首先，你能不能清楚的把伪代码说出来
// 说清楚了，再实现代码
function selectSort(array) {
    var len = array.length

    for (var j = 0; j < len; j++) {
        var maxIndex = 0
        for (var i = 1; i < len-j; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i
            }
            swap(array, maxIndex, len - j - 1)
        }
    }
    return array
}

function swap(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
}



console.log(selectSort([5, 4, 3, 2, 1]))
console.log(selectSort([5, 4, 3, 2, 2, 1]))
console.log(selectSort([55, 422, 3111, 2232, 12342, 1341, 999]))