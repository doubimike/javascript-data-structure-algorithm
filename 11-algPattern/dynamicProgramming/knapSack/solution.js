/*
* @Author: zhanghang
* @Date:   2018-02-25 09:51:08
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-25 10:29:53
*/
function knapSack(capacity,weights,values,n) {
    var i ,w,a,b,kS = []
    for(var i =0;i<=n;i++){
        kS[i] = []
    }
    for(i =0;i<=n;i++){
        console.log('i->',i)
        for(w =0;w<=capacity;w++){
            console.log(' w->',w)

            if (i===0||w===0) {
                console.log('  i or w === 0')
                kS[i][w]=0
            }else if(weights[i-1]<=w){
                console.log('  weights[i-1]->',weights[i-1])
                a= values[i-1]+kS[i-1][w-weights[i-1]]
                b = kS[i-1][w]
                kS[i][w]=(a>b)?a: b

            }else {
                console.log('  last else  weights[i-1]>w')
                console.log('  weights[i-1]',weights[i-1])
                console.log('  w',w)
                kS[i][w] = kS[i-1][w]
            }
        }
    }

    return kS[n][capacity]

}


var values = [3,4,5],
weights = [2,3,4],
capacity = 5,
n = values.length

console.log(knapSack(capacity,weights,values,n))