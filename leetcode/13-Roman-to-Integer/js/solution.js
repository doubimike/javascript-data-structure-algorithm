// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

// "DCXXI"

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'I': 1,
        'V': 5,
        'L': 50,
        'X': 10,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    var sum = 0
    if (s.length === 1) {
        return map[s[0]]
    }
    len = 0
    var result = 0
    while (len <= s.length - 1) {
        if (s[len] && s[len + 1]) {
            if (map[s[len]] >= map[s[len + 1]]) {
                result = result + map[s[len]]
            } else {
                result = result - map[s[len]] + map[s[len + 1]]
                len ++
            }
            len = len + 1
        } else if (!s[len]) {
            return result
        } else if (!s[len + 1]) {
            return result += map[s[len]]
        }

    }

    return result
    // 1 > undefined false 1< undefined false 1===undefined false 1==undefined false  1!=undefined true 1!==undefined true
    // for (var i = 0; i < s.length; i++) {
    //     var v1 = map[s[i]]
    //     var v2 = map[s[i + 1]]
    //     console.log(v2, v1)
    //     console.log(v2 > v1)
    //     if (v2) {
    //         if (v2 > v1) {

    //             sum = sum + v2 - v1
    //             i++
    //         } else {
    //             sum = sum + v1
    //         }
    //     } else {
    //         sum = sum + v1
    //     }
    // }
    // return sum
};
console.log(romanToInt("MCMXCVI"))
    // console.log(romanToInt("IVI"))