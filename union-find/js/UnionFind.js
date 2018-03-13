//
// class UnionFind {
//     constructor(a){
//         this.type = a
//     }
//     says(say){
//         console.log(this.type + ' says ' + say)
//     }
// }
//
// var a  =new UnionFind('dog')
//
//
// a.says('hi')
//
//
//
//
//


function UnionFind(n) {
    //id的索引对应的值是每个元素的id
    var id = []
    var count = n
    id = new Array(n)
    for(var i =0;i<n;i++){
        id[i]=i
    }
    this.find = function (p) {
        // console.log('enter find')
        // console.log('count',count)
        // for(var i =0;i<count;i++){
        //     console.log('i',i)
        //     if (id[i]===p){
        //         console.log('match',i)
        //         return i
        //     }
        // }
        // return -1
        return id[p]

    }
    this.print = function () {
        console.log(id)
    }

    //p q
    this.isConected = function (p,q) {
        return this.find(p)===this.find(q)
    }

    this.unionElements = function (p,q) {
        pId = this.find(p)
        qId = this.find(q)
        if (pId===qId   ){
            return
        }else {
            for(var i =0;i<count;i++){
                if (id[i]===pId){
                    id[i]=qId
                }
            }
        }
    }

}

UnionFind.prototype.printPrototype = function () {
    console.log(id)
}

var uf = new UnionFind(10)
uf.print()
console.log(uf.isConected(8,9))
uf.unionElements(8,9)
console.log(uf.isConected(8,9))
uf.print()

uf.printPrototype()