/*
* @Author: zhanghang
* @Date:   2018-02-11 21:32:28
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 21:35:18
*/
// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var map = {}
    for(var i =0;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1
        }else {
            return true
        }
    }    
    return false
};

