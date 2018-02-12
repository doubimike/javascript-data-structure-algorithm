/*
* @Author: zhanghang
* @Date:   2018-02-11 20:54:32
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-11 20:57:01
*/
// 先判斷nums1與nums2長度誰比較短，我們就稱它叫ary拿來跑迴圈，較長的陣列叫store。
// ary[i]如果可以在store中找到值，表示這是交集的數字。
// 判斷結果陣列(result)是否已經有交集數字，如果沒有就新增到結果陣列(result)中。

var intersection = function(nums1, nums2) {
    var result = [];
    var store;  // 長array
    var ary;    // 短array

    // 判斷nums1,nums2長度
    if(nums1.length > nums2.length){
        store = nums1;
        ary = nums2;
    } else {
        store = nums2;
        ary = nums1;
    }

    // 只需需要跑較短的array就行
    for(var i = 0 ; i < ary.length ; i++){
        var value = ary[i];
        // 如果可以在長array中找到目前的值，而且在結果array中找不到，代表這個值是新的交集
        if(store.indexOf(value) >= 0 && result.indexOf(value) == -1){
            result.push(value);
        }
    }
    return result;
};