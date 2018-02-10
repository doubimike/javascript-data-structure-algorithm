var countAndSay = function(n) {
	var result = '1'
	var count = 0
	var curr = ''

	for (var i = 1; i < n; i++) {
		curr = ''
		count = 0
		var temp = ''
		for (var index = 0; index < result.length; index++) {
			if (result[index] === curr) {
				count++
			} else {
				if (index !== 0) {
					temp += count + curr
				}
				curr = result[index]
				count = 1
			}
		}

		result = temp + count + curr
	}

	return result
}

console.log(countAndSay(5))