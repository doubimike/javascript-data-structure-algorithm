/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 11:15:55
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 11:25:39
 */
var hammingWeight = function(n) {
	var count = 0;

	// n轉為二進位
	var ary = n.toString(2).split("");
	for (var i in ary) {
		if (ary[i] % 2 == 1) {
			count++;
		}
	}
	return count;
};