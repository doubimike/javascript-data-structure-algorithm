// 感觉是以空间换时间

var reverseVowels = function(s) {
	var vowels = []

	for (var i = 0; i < s.length; i++) {
		if (/^[aeiouAEIOU]$/.test(s[i])) {
			vowels.push(s[i])
		}
	}

	var v = vowels.length - 1
	var sAry = s.split('')
	for (var j = 0; j < sAry.length; j++) {
		if (/^[aeiouAEIOU]$/.test(sAry[j])) {
			sAry[j] = vowels[v--]
		}
	}
	return sAry.join('')
}

console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))