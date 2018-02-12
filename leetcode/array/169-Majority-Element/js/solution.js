/*
* @Author: zhanghang
* @Date:   2018-02-11 21:19:28
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 21:21:17
*/
var majorityElement = function (nums) {
    var map = {}
    if(nums.length===1) return nums[0]
        for(var i =0;i<nums.length;i++){
            if(!map[nums[i]]){
                map[nums[i]]++
            }
            if (map[nums[i]]>=nums.length/2) {
                return nums[i]
            }
        }
}