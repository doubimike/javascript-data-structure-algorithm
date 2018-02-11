/*
 * @Author: mike.zhang
 * @Date:   2018-02-11 17:53:40
 * @Last Modified by:   mike.zhang
 * @Last Modified time: 2018-02-11 18:12:05
 */
// 借助辅助的东西帮助自己解决问题啊   辅助的东西尽量全，而且不要马虎，这样能够更好的整理出思路，马虎不得啊，思维也最好别懒惰
// A   1     AA    26+ 1     BA  2×26+ 1     ...     ZA  26×26+ 1     AAA  1×26²+1×26+ 1
// B   2     AB    26+ 2     BB  2×26+ 2     ...     ZB  26×26+ 2     AAB  1×26²+1×26+ 2

// Z  26     AZ    26+26     BZ  2×26+26     ...     ZZ  26×26+26     AAZ  1×26²+1×26+26

// 觀察上面表格可以知道數字轉換成excel欄位是一個類似27進位的轉換，不過規則有一點點不同。
//  ABC = 1x26^2 + 2x26^1 + 3 ，看起來可以用 String.fromCharCode(n%26 + 64)直接將數字轉成英文字母
// ZZZ =26x26^2 + 26x26^1 + 26，可是當n=26，也就是字母Z的時候，26%26 = 0，反而不能得到正確的字母Z
// 因此改用String.fromCharCode((n-1)%26 + 65)處理  why?
var convertToTitle = function(n) {
	// String.fromCharCode(65) = 'A'， String.fromCharCode(66) = 'B' ..... String.fromCharCode(90) = 'Z'
	// 比27小的時候，可以直接用String.fromCharCode(n)轉換成英文字母
	if (n - 1 < 26) {
		return String.fromCharCode(65 + (n - 1) % 26)
	}

	while (n > 0) {
		var codeNum = (n - 1) % 26
		var c = String.fromCharCode(codeNum + 65)
		result = c + result
		n = parseInt((n - 1) / 26)
	}

	return result
}

console.log(String.fromCharCode(65 + 25))