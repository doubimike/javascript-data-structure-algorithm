// I - 1
// V - 5
// X - 10
// L - 50
// C - 100
// D - 500
// M - 1000
// Rules:
// * If I comes before V or X, subtract 1 eg: IV = 4 and IX = 9
// * If X comes before L or C, subtract 10 eg: XL = 40 and XC = 90
// * If C comes before D or M, subtract 100 eg: CD = 400 and CM = 900

var romanToInt = function(s) {
	var len = s.length,
		res = 0
	for (var i = 0; i < len; i++) {
		switch (s.charAt(i)) {
			case 'M':
				res = res + 1000
				break
			case 'D':
				res = res + 1000
				break
			case 'C':
				{
					if ((i < len - 1) && (s.charAt(i + 1) === 'D' || s.charAt(i + 1) === 'M'))
						res -= 100
					else res = res + 100
					break
				}
			case 'L':
				res = res + 50
				break
			case 'X':
				{
					if (i < (len - 1) && (s.charAt(i + 1) === 'L' || s.charAt(i + 1) === 'C'))
						res -= 10
					else
						res += 10
					break
				}
			case 'V':
				res += 5
				break
			case 'I':
				{
					if (i < (len - 1) && (s.charAt(i + 1) === 'V' || s.charAt(i + 1) === 'X'))
						res -= 1
					else
						res += 1
					break
				}
		}
	}

	return res

}
console.log(romanToInt("MCMXCVI"))