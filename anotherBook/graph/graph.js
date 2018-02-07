/*
 * @Author: zhanghang
 * @Date:   2018-02-02 12:05:10
 * @Last Modified by:   zhanghang
 * @Last Modified time: 2018-02-02 14:49:27
 */
function Vertex(label, isVisited) {
    this.label = label
    this.isVisited = isVisited
}


function Graph(v) {
    this.vertices = v
    this.adges = 0
    this.adj = []
    for (var i = 0; i < this.vertices; i++) {
        this.adj[i] = []
            // this.adj[i].push('')
    }
    this.addEdge = addEdge
    this.showGraph = showGraph

    this.marked = []
    for(var i =0;i<this.vertices;i++){
        this.marked[i] = false
    }
    this.dfs = dfs
    this.bfs = bfs
}

function addEdge(v, w) {
    this.adj[v].push(w)
    this.adj[w].push(v)
    this.adges++
}

function showGraph() {
    for (var i = 0; i < this.vertices; i++) {
        console.log(i + ' -> ')
            // for(var j =0;j<this.vertices;j++){
            //     if (this.adj[i][j]!=undefined) {
            //         console.log(this.adj[i][j]+' ')
            //     }
            // }
        for (var j = 0; j < this.adj[i].length; j++) {
            console.log(this.adj[i][j] + ' ')
        }
    }
}

function dfs(v) {
    this.marked[v] = true
    if (this.adj[v]!==undefined) {
        console.log('Visiting vertex: '+v)
    }
    // this.adj[v].forEach(function (w) {
    //     if(!this.marked[w]){
    //         this.dfs(w)
    //     }
    // })

    for(var i = 0;i<this.adj[v].length;i++){
        if (!this.marked[this.adj[v][i]]) {
            this.dfs(this.adj[v][i])
        }
    }
}

function bfs(s) {
    var queue = []
    this.marked[s]=true
    queue.push(s)
    while(queue.length>0){
        var v = queue.shift()
        if (this.adj[v]!==undefined) {
            console.log('Visiting vertex: '+v)
        }
        for(var i = 0;i<this.adj[v].length;i++){
           if (!this.marked[this.adj[v][i]]) {
            this.marked[this.adj[v][i]]=true
            queue.push(this.adj[v][i])
        }
    }       
    }
}
g = new Graph(5)
g.addEdge(0, 1)
g.addEdge(0, 2)
g.addEdge(1, 3)
g.addEdge(2, 4)

g.showGraph()

// g.dfs(0)
g.bfs(0)