// 這跟 LeetCode 283. Move Zeroes 很像，差別在於283移除的是0，這題移除的是特定數字，如果283有寫出來，這題應該難不倒你。


var removeElement = function(nums, val) {
	if (nums.length === 0) {
		return nums.length
	}
	if (nums.indexOf(val) < 0) return nums.length

	var count = 0
	for (var i = 0, max = nums.length; i < max; i++) {
		if (nums[i] !== val) {
			// 这里没有理解  
			// 前++和后++区别是什么
			// 理解了  count其实代表的是3出现的位置，其实这个理解起来试试有点绕的，比如12331  按照这个逻辑最后会编程   12131
			nums[count++] = nums[i]
		}
	}

	return count
}



var num = 1
var compareNum = 1
console.log(num++) //i feel two
console.log(++compareNum) //i feel one  
//i was wrong   
//这样理解把   ++放后面，说明先执行 console.loe(num) 然后再加加