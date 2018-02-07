// Given two strings s and t, write a function to determine if t is an anagram of s. 
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	var len = s.length
	if (len !== t.length) {
		return false
	}

	var hashMap = {}
	for (var i = 0; i < len; i++) {
		if (!hashMap[s[i]]) {
			hashMap[s[i]] = 1
		} else {
			hashMap[s[i]]++
		}
		if (!hashMap[t[i]]) {
			hashMap[t[i]] = -1
		} else {
			hashMap[t[i]]--
		}
	}

	for (var item in hashMap) {
		if (hashMap[item]) return false
	}

	return true

}

var isAnagram = function(s, t) {
	if (s.length != t.length) return false;

	var s = s.split("").sort().join("");
	var t = t.split("").sort().join("");

	return s == t;
};