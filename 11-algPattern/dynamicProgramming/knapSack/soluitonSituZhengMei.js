/*
* @Author: zhanghang
* @Date:   2018-02-25 11:27:05
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-25 23:13:13
*/
// 这个是01背包
// 有n件物品和1个容量为W的背包。每种物品均只有一件，第i件物品的重量为weights[i]，价值为values[i]，求解将哪些物品装入背包可使价值总和最大。

// https://segmentfault.com/a/1190000012829866

 function knapsack(weights, values, W){
    var n = weights.length-1
    var f = [[]]
    for(var j =0;j<=W;j++){
        if (j<weights[0]) { //如果容量不能放下物品0的重量，那么价值为0
            f[0][j] = 0
        }else {//否则等于物体0的价值
              f[0][j] = values[0]   
        }
    }

    for(var j =0;j<=W;j++){
        for(var i =1;i<=n;i++){
            if(!f[i]){
                f[i]=[]
            }
            if (j<weights[i]) { //等于之前的最优值
                f[i][j]=f[i-1][j]
            }else {
                f[i][j]=Math.max(f[i-1][j],f[i-1][j-weights[i]]+values[i])
            }
        }
    }
    return f[n][W]
 }

function knapsack(weights,values,W) {
    var n = weights.length
    var f = new Array(n)
    for(var i =0;i<n;i++){
        f[i]=[]
    }

    for(var i =0;i<n;i++){
        for(var j =0;j<=W;j++){
            if (i===0) { //第一行
                f[i][j]= j <weights[i]?0: values[i]
            }else {
                if (j<weights[i]) { //等于之前的最优值
                    f[i][j]=f[i-1][j]
                }else {
                    f[i][j]=Math.max( f[i-1][j-weights[i]]+values[i],f[i-1][j])
                }
            }
        }
    }
    return f[n-1][W]
}

function knapsack(weights,values,W) {
    var n = weights.length
    var f = new Array(n)
    f[-1]= new Array(W+1).fill(0)
    for(var i =0;i<n;i++){
        f[i]= new Array(W).fill(0)
        for(var j =0;j<=W;j++){
            if (j<weights[i]) {
                f[i][j]= f[i-1][j]
            }else {
                f[i][j]=Math.max(f[i-1][j],f[i-1][j-weights[i]]+values[i])
            }
        }
    }

    return f[n-1][W]
}



function knapsack(weights,values,W) {
    var n = weights.length;
    var f = new Array(n)
    f[-1] = new Array(W+1).fill(0)
    var selected = [];
    for(var i = 0 ; i < n ; i++){ //注意边界，没有等号
        f[i] = [] //创建当前的二维数组
        for(var j=0; j<=W; j++){ //注意边界，有等号
            if( j < weights[i] ){ //注意边界， 没有等号
                f[i][j] = f[i-1][j]//case 1
            }else{
                f[i][j] = Math.max(f[i-1][j], f[i-1][j-weights[i]]+values[i]);//case 2
            }
        }
    }

    var  j = W,w=0
    for(var i =n-1;i>=0;i--){
        if (f[i][j]>f[i-1][j]) {
            selected.push(i)
            console.log('物品',i,'其重量为',weights[i],'其价格为',values[i])
            j = j -weights[i]
            w+= weights[i]
        }
    }

    console.log("背包最大承重为",W," 现在重量为", w, " 总价值为", f[n-1][W])

    return [f[n-1][W], selected.reverse() ]
}

var a = knapsack([2,3,4,1],[2,5,3, 2],5)
console.log(a)
// var b = knapsack([2,2,6,5,4],[6,3,5,4,6],10)
// console.log(b)



// 递归方法
function knapsack(n, W, weights, values, selected) {
    if (n===0||W===0) {
         //当物品数量为0，或者背包容量为0时，最优解为0
         return 0
    }else {
         //从当前所剩物品的最后一个物品开始向前，逐个判断是否要添加到背包中
         for(var i = n-1;i>=0;i--){
            //如果当前要判断的物品重量大于背包当前所剩的容量，那么就不选择这个物品
            //在这种情况的最优解为f(n-1,C)
            // W为剩余容量
            if (weights[i]>W) {
                return knapsack(n-1,W,weights,values,selected)
            }else {
                var  a = knapsack(n-1,W,weights,values,selected)//不选择物品i的情况下的最优解
                var b = values[i]+ knapsack(n-1,W-weights[i],weights,values,selected)//选择物品i的情况下的最优解
                //返回选择物品i和不选择物品i中最优解大的一个
                if (a>b) {
                    selected[i]=0//这种情况下表示物品i未被选取
                    return a
                }else {
                    selected[i] = 1; //物品i被选取
                    return b;
                }
            }

         }
    }

}

var selected = [], ws = [2,2,6,5,4], vs = [6,3,5,4,6]
var b = knapsack( 5, 10, ws, vs, selected)
console.log(b) //15
selected.forEach(function(el,i){
    if(el){
        console.log("选择了物品"+i+ " 其重量为"+ ws[i]+" 其价值为"+vs[i])
    }
})
