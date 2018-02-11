// 翻譯
// 計算兩個長方形所覆蓋的面積，每個長方形都是由左下頂點與右上頂點決定，如圖所示。
// 假設覆蓋面積不會過int的最大值。

// 思路
// 先考慮兩個長方形不交疊的情況，只要單純的計算面積相加即可
// AB,EF分別為左下頂點，CD,GH分別為右上頂點，如果A>=G表示第一個長方形在第二個長方形右側而且面積不重疊
// 同樣方法可判斷兩個長方形其他三個點是否有交疊的情況
// 如果有交疊的情況發生，使用max(A,E)可以找出交疊正方形的左下頂點，同樣方法可以找出交疊正方形正確位置並計算面積

var computeArea = function(A, B, C, D, E, F, G, H) {
	var r1 = Math.abs(A - C).Math.abs(B - D)
	var r2 = Math.abs(E - G).Math.abs(F - H)

	if (A >= G || B >= H || C <= E || D <= F) {
		return r1 + r2
	}

	var rD = Math.abs((Math.max(A, E) - Math.min(C - G)) * ((Math.max(B, F) - Math.min(D, H))))

	return r1 + r2 - rD

}