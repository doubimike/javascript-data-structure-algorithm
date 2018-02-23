/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 14:50:33
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 15:27:47
 */
// 思路
// 先判斷有幾個bull(位置數字都一樣)
// 出現bull將secret number跟friend's guess這個位子上的數字移除
// 剩下的字串再來判斷有幾個cow

var getHint = function(secret, guess) {
	var bull = 0;
	var cow = 0;
	// 儲存secret[n],guess[n]數字不同的元素
	var skeep = []
	var gkeep = []
	//先判斷位置數字都一樣，剩下的用sK, gK來儲存
	for (var i in guess) {
		// 位置數字都一樣，bull++
		if (secret[i] === guess[i]) {
			bull++
		} else {
			skeep.push(secret[i])
			gkeep.push(guess[i])
		}
	}
	// 因為bull已經處理過，這邊只要gkeep內的元素出現在skeep內，代表就是一個cow
	for (var j in gkeep) {
		var findIndex = skeep.indexOf(gkeep[j])
		if (findIndex !== -1) {
			cow++
			skeep[findIndex] = null
		}
	}

	return bull + 'A' + cow + 'B'
}