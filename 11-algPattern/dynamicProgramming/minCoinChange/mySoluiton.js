// 我把题目理解错了，理解成了有多少种解法而不是最小的解法了
// 我感觉如果是这样的话，其实我解对了啊

function MinCoinChange(coins) {




	var cach = {0: 1,1: 1}

	this.makeChange = function(money) {
		if (money === 0) {
			return 0
		}
		if (money === 1) {
			return 1
		}

		var index = -1
		for (var i = 0; i < coins.length; i++) {
			if (money >= coins[i]) {
				index++
			}
		}
		console.log('index', index)


		var result = 0

		while (index >= 0) {
			console.log('index2', index)

			if (cach[money - coins[index]]) {
				result += cach[money - coins[index]]
			} else {
				console.log('coins[money - coins[index]]', money - coins[index])
				// return
				var newMoney = money - coins[index]
				result += this.makeChange(newMoney)
			}
			index--
			console.log('index---', index)
		}

		console.log('cach',cach)
		return cach[money] = result
	}

}

// var minCoinChange = new MinCoinChange([1, 5, 10, 25])
// console.log(minCoinChange.makeChange(36))
var minCoinChange = new MinCoinChange([1, 5])
// console.log(minCoinChange.makeChange(5))
console.log(minCoinChange.makeChange(6))
console.log(minCoinChange.makeChange(7))
console.log(minCoinChange.makeChange(8))
// console.log(cach)

// 思路 
// f(0) = 1
// 1分钱 多少种解法
// f(1)= 1
// 2分钱  多少种解法
// f(2)= f(1)   
// 3分钱  多少种解法
// f(3)= f(2)
// 4分钱 多少种解法
// f(4)= f(3)
// 5分钱 多少种解法
// f(5)= f(5-1) + 1+ f(5-5) 
// 6分钱 多少种解法
// f(6) = f(6-1) + f(6-5)t
// 7分钱 
// f(7)= f(2) + f(6)
// 8分钱
//  f(8)= f(8-1)+ f(8-5)
//  f(9)= f(9-1)+f(9-5)
//  f(10) = f(10-1)+ 1+f(10 - 10)+f(10-5)
// ...
//  f(15) = f(15-1) + f(15-5)+ f(15-10)


// f(n) = f(n-coins[i])
// 肯定是哪里出错了


// 6  [1,1,1,1,1,1] [1,5] [5,1]  3
// 7  [1,1,1,1,1,1,1] [1,1,5] [1,5,1] [5,1,1]
// 8 [1,1,1,1,1,1,1,1]  [1,1,1,5] [1,1,5,1] [1,5 ,1,1] [5,1,1,1]
