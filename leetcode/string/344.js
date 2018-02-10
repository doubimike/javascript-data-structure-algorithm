/*
* @Author: zhanghang
* @Date:   2018-02-05 16:00:05
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-05 16:14:37
*/


// Write a function that takes a string as input and returns the string reversed.
// Example: Given s = "hello", return "olleh".

function reverse(string) {
    
    // return string.split('').reverse().join('')
    // var result = ''
    // var arr = string.split('')
    // for(var i = arr.length-1;i>=0;i--){
    //     result+= arr[i]
    // }
    // return result

    var len = string.length
    string = string.split('')
    for(var i = 0;i<len/2;i++){
        var temp = string[len-i-1]
        string[len-i-1] = string[i]
        string[i] = temp
    }

    return string.join('')
}

console.log(reverse('hellohxa'))