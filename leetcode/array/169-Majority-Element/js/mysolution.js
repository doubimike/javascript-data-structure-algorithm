/*
* @Author: zhanghang
* @Date:   2018-02-11 21:04:22
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 21:12:52
*/
// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
 // 分析  用一个map记录次数，然后遍历这个map，找出n/2的
 // 
var majorityElement = function(nums) {
    var map = {}
    for(var i =0;i<nums.length;i++){
        var key = nums[i]
        if(!map[key]){
            map[key]=1
        }else {
            map[key]= map[key]+1
        }
    }
    var arr =[]
    for(key in map){
        if (map[key]>nums.length/2) {
            arr.push(key)
        }
    }
    console.log(map)
    return parseInt(arr[0])
};

console.log(majorityElement([2,3,3]))