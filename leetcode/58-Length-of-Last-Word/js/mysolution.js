// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

var lengthOfLastWord = function(s) {
	var arr = s.split(' ')

	while (arr[arr.length - 1] === '') {
		arr.pop()
	}
	return arr[arr.length - 1] ? arr[arr.length - 1].length : 0
};

console.log(lengthOfLastWord('Hello World'))
console.log(lengthOfLastWord('Hello World '))
console.log(lengthOfLastWord('a '))

console.log('   '.split(' '))
console.log([][-1] === '')
console.log([][-1])