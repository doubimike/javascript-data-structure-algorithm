/*
* @Author: zhanghang
* @Date:   2018-02-27 21:45:59
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-27 22:14:13
*/
// Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// For example, given the array [2,3,1,2,4,3] and s = 7,
// the subarray [4,3] has the minimal length under the problem constraint.

// click to show more practice.


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
// 思路 现在的我只能想到暴力解了  更优化的解法也是基于暴力解法来优化的
var minSubArrayLen = function(s, nums) {
    var len = nums.length
    
    var min = 0
    for(var i =0;i<len-1;i++){
        var sum = nums[i]
        if (sum>=s) {
            return 1
        }
        for(var j =i+1;j<len;j++){
            sum+= nums[j]
            if (sum>=s) {
                if (!min) {
                    min = j-i+1
                }else {
                    if (j-i+1<min) {
                        min = j-i+1
                    }
                }
            }
        }
    }
    return min
};

console.log(minSubArrayLen(7,[2,3,1,2,2,3]))
console.log(minSubArrayLen(11,[1,2,3,4,5]))