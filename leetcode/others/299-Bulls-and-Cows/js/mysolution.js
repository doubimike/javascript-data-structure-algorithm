/*
 * @Author: mike.zhang
 * @Date:   2018-02-23 14:50:33
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-23 15:22:24
 */
// You are playing the following Bulls and Cows game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.

// For example:

// Secret number:  "1807"
// Friend's guess: "7810"
// Hint: 1 bull and 3 cows. (The bull is 8, the cows are 0, 1 and 7.)
// Write a function to return a hint according to the secret number and friend's guess, use A to indicate the bulls and B to indicate the cows. In the above example, your function should return "1A3B".

// Please note that both secret number and friend's guess may contain duplicate digits, for example:

// Secret number:  "1123"
// Friend's guess: "0111"
// In this case, the 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow, and your function should return "1A1B".
// You may assume that the secret number and your friend's guess only contain digits, and their lengths are always equal.

// 翻譯
// 這題目敘述有點長，我記得以前這是以前堂哥跟我玩的(猜數字遊戲)[http://codepen.io/skyyen999/full/VedwqQ/]，上面那一大串英文的意思是，這邊有一串隱藏的號碼(secret number)，然後你朋友會猜一串號碼， 如果號碼數字與位置都對了，給一個bull，數字對但位置不對，給一個cow。
// 範例:

// Secret number:  "1807"
// Friend's guess: "7810"
// 上面範例可以發現8得到一個bull，剩下1,0,7得到一個cow，所以得到1A3B
// Secret number:  "1123"
// Friend's guess: "0111"
// 第二個範例，第二個1得到一個bull，Friend's guess 第三個1得到一個cow(比對secret number的第一個1)，因此得到1A1B


/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
// 思路  遍历    
var getHint = function(secret, guess) {
	// 先解决bull
	var length = secret.split('').length
	console.log(length)
	var bullCount = 0
	var cowCount = 0
	for (var i = 0; i < length; i++) {
		console.log('secret.charAt(i)', secret.charAt(i))
		if (secret.charAt(i) === guess.charAt(i)) {
			console.log('aa')
			bullCount++
		}
	}
	// 再来搞定cows
	var arr = []
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			if (guess.charAt(i) === secret.charAt(j) && arr.indexOf(j) < 0) {
				arr.push(j)
				console.log('bbb')
				cowCount++

				break
			}
		}
	}

	console.log(bullCount)
	console.log(cowCount)

	return bullCount + 'A' + (cowCount - bullCount) + 'B'

};


// console.log(getHint('1807', '7810'))
console.log(getHint('1123', '0111'))

// 上面有问题  考虑问题不完整  应该是有更好的办法  我猜可以通过某一种数据结构
// 更好地解决问题