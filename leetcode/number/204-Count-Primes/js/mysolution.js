// Description:



// Count the number of prime numbers less than a non-negative number, n.


// 翻譯
// 給一個n，計算比n小的質數有幾個。

/**
 * @param {number} n
 * @return {number}
 */

// 分析  你得先会如何去判断一个数是不是质数，然后再去考虑问题 如果知道了，直接来个循环就好了
var countPrimes = function(n) {

	var count = 0
	for (var i = 1; i <= n - 1; i++) {
		if (isZhiShu(i)) {
			count++
		}
	}
	return count

};


// 1不是质数   必须大于1，只能被1和自己整除(實作上不需要除到p-1，只需要除到"p的平方根"就可以，而且可以跳過2的倍數 p/2, p/3 , p/5 , p/7 .....)
var isZhiShu = function(n) {
	if (n <= 1) {
		return false
	}
	if (n === 2) {
		return true
	}

	for (var i = 2; i * i <= n; i++) {
		// console.log(i)
		if (n % i === 0) {
			return false
		}
	}

	return true
}

console.log(isZhiShu(0))
console.log(isZhiShu(1))
console.log(isZhiShu(2))
console.log(isZhiShu(3))
console.log(isZhiShu(4))
console.log(isZhiShu(5))

console.log('---')
console.log(countPrimes(4))
// 大数目又不行了，太久了
console.log(countPrimes(4499979))
// 判断质数参考了别人的方法，自己想不出来的,其实仔细想想，也能够想出来的