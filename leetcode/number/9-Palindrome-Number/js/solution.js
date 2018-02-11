// 翻譯
// 判斷一個int整數是否是自己的迴文數，不能使用額外的空間來操作。
// 提示：
// 負整數會是自己的迴文數嗎(ex. -1)
// 如果你想用字串來解是不行的，因為不能使用額外的空間。
// 你也可以反轉整數，如果你之前已經做過LeetCode 7. Reverse Integer，你會知道反轉後的數可能會超過integer的最大值。

// 思路
// 不使用額外空間的意思，根據discuss裡面的討論，應該是不能用一個O(n)的額外空間(ex. array, string之類的)，用一個O(1)的變數是可以的。 把傳入的x整個反轉後跟本來的x比較是否一致，這題還算簡單，直接看code。


// 说实话有点没理解啊  先看第7题比较好，第七题就是一样的，只是这个题的小步骤，你需要理解思路，不理解就不谈别的
var isPalindrome = function(x) {
	if (x < 0 || x > Math.pow(2, 32) - 1) return false
	if (x < 10) {
		return true
	}

	var num = x

	// 先抓出最高位數，轉成個位數
	var recNum = x % 10
	x = parseInt(x / 10)

	// 將recNum*10，再抓最高位數加到recNumb，乘以10是让他的位数变高吧，用201想一下，1变成10，然后变成100，就是这个意思，这样就能够理解了，虽然你自己不一定想的出，但是已经是很大的进步了
	while (x !== 0) {
		recNum = recNum * 10
		recNum = recNum + x % 10
		x = parseInt(x / 10)
	}

	return recNum === num
}