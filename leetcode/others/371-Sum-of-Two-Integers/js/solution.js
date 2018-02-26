// 思路
// 不用加減改用位元做運算，其實我也不會阿，而且直接回傳a+b還是會通過的，如果你被這題卡住，建議先跳過。以下單純學習分享。
// 假設輸入的數字為a=3(0011), b=9(1001)
// 相加不考慮進位 a = a^b = (0011)^(1001) = 1010
// 相加只考慮進位 carry =a&b = (0011)^(1001) = 0001 進位值
// b = 0001 << 1 = 0010 進位
// 第一輪後 a= 10(1010), b = 2(0010)
// 相加不考慮進位 a = a^b = (1010)^(0010) = 1000
// 相加只考慮進位 carry =a&b = (1010)^(0010) = 0010 進位值
// b = 0001 << 1 = 0100 進位
// 第二輪後 a= 8(1000), b = 4(0010)
// 相加不考慮進位 a = a^b = (1000)^(0100) = 1100
// 相加只考慮進位 carry =a&b = (1010)^(0010) = 0000 進位值
// b = 0000 << 1 = 0
// b=0，相加完成， a = 1100 = 12
// 
// 看了以后我也是一脸懵逼

var getSum = function(a, b) {
	if (b === 0) {
		return a
	}
	if (a === 0) {
		return b
	}

	while (b !== 0) {
		var carry = a & b
		a = a ^ b
		b = carry << 1
	}

	return a
}