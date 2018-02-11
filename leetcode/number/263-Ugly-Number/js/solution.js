// 翻譯
// 判斷一個數字是否為ugly number
// ugly number是說一個數字因式分解後只含有2,3,5這些因子，例如說6[2,3],8[2,2,2]都是ugly的，14[2,7]因為含有7，所以不是ugly。
// 注意: 1 是一個ugly number (LeetCode 202. Happy Number這題可以看到，1也是一個happy number，可知道1是一個醜但是樂觀的數字 XD)
// 思路
// 一開始我是想用先排出一個在n之下的質數表，用這個表來因數分解，不過這種寫法會超出時間。
// 重新想了一下，發現單純用除法可以解，一個n如果小於7，一定是ugly number，如果大於等於7，將n裡面的2,3,5因子除掉，最後如果還有剩下其他因子，這個數字就不是ugly number。


var isUgly = function(num) {
	if (num <= 0) {
		return false
	}
	if (num < 6) {
		return true
	}
	while (num > 2) {
		if (num % 2 !== 0) {
			break
		}
		num = parseInt(num / 2)
	}

	while (num > 3) {
		if (num % 3 !== 0) {
			break
		}
		num = parseInt(num / 3)
	}

	while (num > 5) {
		if (num % 5 !== 0) {
			break
		}
		num = parseInt(num / 5)
	}

	return num % 2 === 0 || num % 3 === 0 || num % 5 === 0
}