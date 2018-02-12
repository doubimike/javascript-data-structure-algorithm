/*
* @Author: zhanghang
* @Date:   2018-02-11 20:45:42
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 20:54:04
*/
// Given two arrays, write a function to compute their intersection.

// Example:
// Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

// Note:
// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 // 分析 可能用到了递归，应该是返回两个数组中都有的元素
var intersection = function(nums1, nums2) {
    var len1 = nums1.length
    var len2 = nums2.length
    var len
    if (len1>=len2) {
        len = len1
    }else {
        len = len2
    }
    var resultArr = []
    for(var i = 0;i<len;i++){
        nums2.forEach(function (item) {
            // console.log(item)
            if (item===nums1[i]) {
                // console.log(item)
                if (resultArr.indexOf(item)<0) {
                    resultArr.push(item)
                }
            }
        })
    }

    return resultArr
};

console.log(intersection([1, 2, 2, 1],[2, 2]))