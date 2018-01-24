// 洗牌算法，传入一个数组，随机乱序排列,为了通用性，不污染原数组
// 这个作为公用的方法

function shuffle(arr) {
	if (!arr || !Array.isArray(arr)) {
		throw '错误，请传入正确的数组格式'
	}

	var newArr = arr.slice(0)
	for (var i = newArr.length - 1; i >= 0; i--) {
		// 随机范围[0,1)
		var randomIndex = Math.floor(Math.random() * (i + 1))
		var itemAtIndex = newArr[randomIndex]
		newArr[randomIndex] = newArr[i]
		newArr[i] = itemAtIndex
	}

	return newArr
}


// 扑克牌的构造函数
function Pocker() {
	// 第一步:定义四个花色，这里就用中文了
	var cardType = ['黑桃', '红桃', '梅花', '方块']
	// 第二步:定义13张普通牌
	var cardValue = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	// 第三步:定义2张特殊牌，大王与小王
	var specialCard = ['大王', '小王']

	// 第四步:根据上述数组生成54张牌
	var allCards = []
	for (var i = 0, len1 = cardType.length; i < len1; i++) {
		for (var j = 0, len2 = cardValue.length; j < len2; j++) {
			allCards.push(cardType[i] + cardValue[j])
		}
	}

	allCards = allCards.concat(specialCard)
	this.originalPockers = allCards
	this.pockers = this.originalPockers

}

// 扑克牌的洗牌
Pocker.prototype.shuffle = function() {
	// 洗牌-不污染原先的数组,每次用原始的扑克洗牌
	// 每次洗牌后都是一副新的牌
	this.pockers = shuffle(this.originalPockers)
}


// 扑克牌的发牌
Pocker.prototype.dealPockers = function(num) {
	// 删除，会改变原来的pokers数组,已经没有了则会返回[]
	return this.pockers.splice(0, num)
}

// 测试用例
// 生成一副扑克牌
var pocker = new Pocker()
// 洗牌
pocker.shuffle()
// 多次发牌
console.log(pocker.dealPockers(1))
console.log(pocker.dealPockers(3))
console.log(pocker.dealPockers(50))
console.log("剩余扑克:")
console.log(pocker.pockers)