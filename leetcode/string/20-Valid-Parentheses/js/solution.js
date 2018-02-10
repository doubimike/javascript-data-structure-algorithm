// 思路
// 用stack先進後出的特性來解，遇到左括號就放入stack，遇到右括號就取出stack裡面的左括號比對是否合法。
// 例如說字串 " ( [ ) ] " ，  '(' 左括號，放入stack -> stack='(', '['放入stack = '(['  
// ')'右括號，取出stack -> '[' ，  [)是一個不match的組合，就回傳false

// 考察知识点：栈的数据结构   先看考点 看题目看考点

var isValid = function(s) {
	if (!s) return true
	var stack = []
	var left = ['(', '[', '{']
	var right = [')', ']', '}']
	var match = {
		')': '(',
		']': '[',
		'}': '{'
	}
	for (var i in s) {
		if (left.indexOf(s[i]) > -1) {
			stack.push(s[i])
		}
		if (right.indexOf(s[i]) > -1) {
			var stackStr = stack.pop()
			if (match[s[i]] !== stackStr) {
				return false
			}
		}
	}

	return stack.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('(]'))
console.log(isValid('([)]'))
console.log(isValid('){'))
console.log(isValid('([])'))