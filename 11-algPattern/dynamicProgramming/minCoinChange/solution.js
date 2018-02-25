/*
* @Author: zhanghang
* @Date:   2018-02-24 21:52:16
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-24 22:10:42
*/
// 其实也用到了递归的理论
function MinCoinChange(coins) {
    var coins = coins
    var cache = {}

    this.makeChange = function (amount) {
        // console.log('enter amount',amount)
        var me = this
        if (!amount) {
            return []
        }

        if (cache[amount]) {
            return cache[amount]
        }

        var min = [],newMin,newAmount
        for(var i =0;i<coins.length;i++){
            var coin = coins[i]

            newAmount = amount - coin

            if (newAmount>=0) {
                newMin = me.makeChange(newAmount)
            }
            // console.log('quit amount ',newAmount)
            // console.log('newMin',newMin)

            // 这边这些if有点不太理解
            if (newAmount>=0&& (newMin.length <min.length-1||!min.length)&&(newMin.length||!newAmount)) {
                min = [coin].concat(newMin)
                // console.log('min',min)
                // console.log('i',i)
                // console.log('coin',coin)
                // console.log('newAmount',newAmount)
                // console.log('newMin.length',newMin.length)
                // console.log('min.length-1',min.length-1)
                // console.log('newMin.length <min.length-1',newMin.length <min.length-1)
                // console.log('min.length',min.length)
                // console.log('newMin.length',newMin.length)
                // console.log('!newAmount',!newAmount)
                console.log('new Min '+min + ' for '+amount)
            }
        }
        return (cache[amount]=min)
    }
}

// var minCoinChange = new MinCoinChange([1, 5,10,25])
// console.log(minCoinChange.makeChange(36))

var minCoinChange = new MinCoinChange([1, 5])
console.log(minCoinChange.makeChange(2))