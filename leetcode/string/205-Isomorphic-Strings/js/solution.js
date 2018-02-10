// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// For example,
// Given "egg", "add", return true.

// Given "foo", "bar", return false.

// Given "paper", "title", return true.

// Note:
// You may assume both s and t have the same length.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	var len = s.length
	if (len !== t.length) {
		return fales
	}

	var mapS = {}
	for (var i = 0; i < len; i++) {
		var strS = s[i]
		if (!mapS[strS]) {
			mapS[strS] = t[i]
		} else {
			if (mapS[strS] !== t[i]) {
				return false
			}
		}
	}

	var mapT = {}
	for (var i = 0; i < len; i++) {
		var strT = t[i]
		if (!mapT[strT]) {
			mapT[strT] = s[i]
		} else {
			if (mapT[strT] !== s[i]) {
				return false
			}
		}
	}

	return true

};

console.log(isIsomorphic('egg', 'add'))
console.log(isIsomorphic('foo', 'bar'))
console.log(isIsomorphic('paper', 'title'))