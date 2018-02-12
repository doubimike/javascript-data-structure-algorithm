/*
* @Author: zhanghang
* @Date:   2018-02-11 20:35:34
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 20:40:20
*/
// 這題用到的技巧後面有不少題目一樣會用到，使用另外一個變數index來記錄碰到的非0數字，遇到非0整數，將整數塞到index的位子， 最後陣列長度扣除index就是0的數目，將陣列index之後的數字改為0就完成搬移的動作。+

// ex. nums = [0, 1, 0 , 3] , index = 0
// nums[0] == 0, 跳過
// nums[1] == 1, nums[0] = 1, index++;
// nums[2] == 0, 跳過
// nums[3] == 3, nums[1] = 3, index++;
// 結束後 nums = [1,3,0,3]，接下來將nums後面的[0,3]用0取代
// 
// 
var moveZeroes = function(nums) {
    var index = 0;
    for(var i = 0 ; i < nums.length ; i++){
        var n = nums[i]; 
        // not zero, index++, push to array
        if(n !== 0){
            nums[index++] = n;    
        }
    }

    // after index to zero
    for(index ; index < nums.length ; index++){
        nums[index] = 0;
    }
};