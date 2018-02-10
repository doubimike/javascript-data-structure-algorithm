/*
* @Author: zhanghang
* @Date:   2018-02-09 22:44:20
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-09 23:37:07
*/
// Compare two version numbers version1 and version2.
// If version1 > version2 return 1, if version1 < version2 return -1, otherwise return 0.

// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.

// Here is an example of version numbers ordering:

// 0.1 < 1.1 < 1.2 < 13.37

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 // 这个解法不完全
var compareVersion = function(version1, version2) {
    version1 = version1+''
    version2 = version2+''
    var bigPartV1 = parseInt(version1.split('.')[0])
    var bigPartV2 = parseInt(version2.split('.')[0])
    if (bigPartV1>bigPartV2) {
        return 1
    }
    if (bigPartV1<bigPartV2) {
        return -1
    }

    var smallPartV1 = parseInt(version1.split('.')[1]?version1.split('.')[1]: 0)
    var smallPartV2 = parseInt(version2.split('.')[1]?version2.split('.')[1]: 0)

    if (smallPartV1>smallPartV2) {
        return 1
    }
    if (smallPartV1<smallPartV2) {
        return -1
    }

    return 0    


};

console.log(compareVersion(0.2,0.1))