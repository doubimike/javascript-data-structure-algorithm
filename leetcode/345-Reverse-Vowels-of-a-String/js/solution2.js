// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
	var vowelsString = 'aeiouAEIOU'
	var appearArr = []
	for (var i = 0; i < s.length; i++) {
		if (vowelsString.indexOf(s[i]) >= 0) {
			appearArr.push(i)
		}
	}
	var sArr = s.split('')
	var len = appearArr.length


	for (var i = len - 1, j = 0; i >= j; i--, j++) {
		var temp = sArr[appearArr[i]]
		sArr[appearArr[i]] = sArr[appearArr[j]]
		sArr[appearArr[j]] = temp
	}

	return sArr.join('')

};


console.log(reverseVowels('hello'))
console.log(reverseVowels('leetcode'))