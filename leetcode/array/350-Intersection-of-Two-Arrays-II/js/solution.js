/*
 * @Author: zhanghang
 * @Date:   2018-02-11 21:52:28
 * @Last Modified by:   zhanghang
 * @Last Modified time: 2018-02-11 21:56:14
 */


var intersection = function(nums1, nums2) {
    var store, array;
    var number = [];
    if (nums1.length > nums2.length) {
        store = nums1;
        array = nums2;
    } else {
        store = nums2;
        array = nums1;
    }

    for (var i = 0; i < array.length; i++) {
        var v = array[i];
        if (store.indexOf(v) >= 0) {
            // 这一步是关键，删掉了
            store[store.indexOf(v)] = null;
            number.push(v);
        }
    }
    return number;
};