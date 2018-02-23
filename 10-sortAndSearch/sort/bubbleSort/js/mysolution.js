/*
 * @Author: zhanghang
 * @Date:   2018-02-23 21:27:18
 * @Last Modified by:   zhanghang
 * @Last Modified time: 2018-02-23 22:02:24
 */
// 思路
// 没记错应该是通过循环把大的往上面放
// [5,4,3,2,1]
// 写不出来了啊 真沮丧
// 想了很久，先从原理入手，最后终于解决了
// 其实是冒泡的原理掌握的不清，冒泡是一个一个的比较，然后比较完直接就把两个顺序对调
function bubbleSort(array) {
    // 这层循环是后来加上的
    for (var j = 0; j < array.length; j++) {

        // 先把最简单的情况写出来，然后再加上外层的循环，最开始的时候没有j
        for (var i = 0; i < array.length - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
            }
        }
    }
    return array
}


console.log(bubbleSort([5, 4, 3, 2, 1]))
console.log(bubbleSort([5, 4, 3, 2,2, 1]))
console.log(bubbleSort([55, 422, 3111, 2232,12342, 1341,999]))