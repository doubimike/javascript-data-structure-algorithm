// 思路
// 網路上解質數問題的演算法很多，這邊用比較原始的方法
// 判斷n之下有幾個質數，只要跑迴圈判斷從2~(n-1)中毎一個數是不是質數就可以
// 質數p的定義就是 p/2 , p/3 , p/4 .... p/(p-1)都不等於0
// 實作上不需要除到p-1，只需要除到"p的平方根"就可以，而且可以跳過2的倍數 p/2, p/3 , p/5 , p/7 .....

var countPrimes = function(n) {
	// n = 3的時候，才會出現第一個比n小的質數2
	if (n < 3) return 0;
	var count = 1
	// 加快速度，所以跳過2的倍數
	for (var i = 3; i < n; i += 2) {
		var flag = true;
		// 判斷i是不是質數
		for (var j = 3; j * j <= i; j += 2) {
			if (i % j === 0) {
				// i能被比自己小的數除盡，表示i不是質數
				flag = false;
				break;
			}
		}
		if (flag) {
			count++
		}
	}

	return count
}