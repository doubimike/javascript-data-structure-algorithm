/*
* @Author: zhanghang
* @Date:   2018-02-11 21:36:34
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 21:51:04
*/
// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].
// Input:
// [1,2]
// [1,1]
// Output:
// [1,1]
// Expected:
// [1]
// Note:
// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:
// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

// 我马虎大意了啊  觉得已经做过同类型的就不用再思考了，这就是存在于自己的人性作祟
// 感觉还没有想清楚这个问题问的是什么就下笔了

var intersection = function(nums1, nums2) {
    var len1 = nums1.length
    var len2 = nums2.length
    var len
    var  base 
    var compare
    if (len1>=len2) {
        base = nums2
        compare = nums1
    }else {
        base = nums1
        compare = nums2
    }
    var resultArr = []
    for(var i = 0;i<base.length;i++){
        for(var j = 0;j<compare.length;j++){
            if (base[i]===compare[j]) {
                resultArr.push(base[i])
                break
            }
        }
    }

    return resultArr
};

console.log(intersection([1, 2, 2, 1],[2, 2]))