/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 17:54:47
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 18:02:44
 */
// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Example 1:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)
// Example 2:
// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

// 翻譯
// 有一個陣列儲存i個數字，這些元素代表一天當中股票的價格。如果在一天中只能做一次交易(買一次然後賣一次)，設計一個演算法求得最大獲利。
// 範例1: Input : [7, 1, 5, 3, 6, 4]
// Output: 5
// 最大獲利為6-1=5，因為賣出價格必須比購入價格高，所以7-1是不可行的。
// 範例2: Input: [7, 6, 4, 3, 1]
// Output: 0
// 因為你不管今天怎麼買，賣掉都是虧錢，所以只能回傳0。

/**
 * @param {number[]} prices
 * @return {number}
 */
// 思路 
// 我原本还以为 可以通过这个   去赚钱了 发现这个并不能预测未来而是基于已经有的数据而已 失望
// 应该可以用一个双重循环解决问题
var maxProfit = function(prices) {
	var maxProfit = 0
	for (var i = 0; i < prices.length; i++) {
		for (var j = i; j < prices.length; j++) {
			var buyPrice = prices[i]
			var sellPrice = prices[j]
			if (sellPrice - buyPrice >= maxProfit) {
				maxProfit = sellPrice - buyPrice
			}
		}
	}

	return maxProfit
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
console.log(maxProfit([7, 6, 4, 3, 1]))