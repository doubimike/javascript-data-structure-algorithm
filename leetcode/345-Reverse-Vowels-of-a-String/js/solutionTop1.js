var reverseVowels = function(s) {
	var left = 0
	var right = s.length - 1
	s = s.split('')
	while (left < right) {

		// 如果这里没有left<right,如果全不是元音，会出现无限循环的
		while (left < right && !isVowel(s[left])) {
			left++
		}
		while (left < right && !isVowel(s[right])) {
			right--
		}

		// 这里的可以去掉的
		// if (left < right) {
		var temp = s[left]
		s[left] = s[right]
		s[right] = temp
		// }

		left++
		right--
	}

	return s.join('')

};

function isVowel(c) {

	if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u' || c === 'A' || c === 'E' || c === 'I' || c === 'O' || c === 'U') {
		return true
	}
	return false
}

// console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))