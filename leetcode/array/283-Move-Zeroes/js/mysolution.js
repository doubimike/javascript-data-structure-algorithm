/*
* @Author: zhanghang
* @Date:   2018-02-11 20:15:44
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 20:41:01
*/
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 // 分析 遍历+concat 不过好像不符合要求，先实现出来吧
var moveZeroes = function(nums) {
    var arr =[]
    nums.forEach(function (item,index) {
        if (item===0) {
            nums.splice(index,1)
            arr.push(0)
        }
    })
    return nums.concat(arr)

};

console.log(moveZeroes([0, 1, 0, 3, 12]))

// 上面确实不符合要求啊

// 下面这个可以
var  moveZeroes= function (nums) {
    var len = nums.length
    var count = 0
    for(var i =0;i<len;i++){
        if(nums[i]===0){
            // count+=1
            nums.push(nums.splice(i,1)[0])
            i--
            len--
        }
    }
    // return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))