/*
* @Author: zhanghang
* @Date:   2018-02-02 15:15:18
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-02 18:47:45
*/
'use strict'
function Stack() {

    let items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };

    this.toString = function(){
        return items.toString();
    };
}
function Queue() {

    let items = [];

    this.enqueue = function(element){
        items.push(element);
    };

    this.dequeue = function(){
        return items.shift();
    };

    this.front = function(){
        return items[0];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.clear = function(){
        items = [];
    };

    this.size = function(){
        return items.length;
    };

    this.print = function(){
        console.log(items.toString());
    };
}

function Dictionary(){

    var items = {};

    this.set = function(key, value){
        items[key] = value; //{1}
    };

    this.delete = function(key){
        if (this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };

    this.has = function(key){
        return items.hasOwnProperty(key);
        //return value in items;
    };

    this.get = function(key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.clear = function(){
        items = {};
    };

    this.size = function(){
        return Object.keys(items).length;
    };

    this.keys = function(){
        return Object.keys(items);
    };

    this.values = function(){
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.each = function(fn) {
        for (var k in items) {
            if (this.has(k)) {
                fn(k, items[k]);
            }
        }
    };

    this.getItems = function(){
        return items;
    }
}

function Graph() {
    var vertices = []
    var adjList = new Dictionary()
    this.addVertex = function (v) {
        vertices.push(v)
        adjList.set(v,[])
    }

    this.addEdge = function (v,w) {
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function () {
        var s = ''
        for(var  i=0;i<vertices.length;i++){
            s+= vertices[i]+' -> '
            var neighbors = adjList.get(vertices[i])
            for(var j =0;j<neighbors.length;j++){
                s += neighbors[j] +' '
            }
            s+= '\n'
        }
        return s
    }

    var initializeColor = function () {
        var color = []
        for(var i =0;i<vertices.length;i++){
            color[vertices[i]]='white'
        }
        return color
    }

    this.bfs = function (v,callback) {
        var color = initializeColor()

        var queue = new Queue()

        queue.enqueue(v)

        while(!queue.isEmpty()){
            var u = queue.dequeue()
            var neighbors = adjList.get(u)
            color[u] = 'grey'
            for(var i =0;i<neighbors.length;i++){
                var w = neighbors[i]
                if (color[w]==='white') {
                    color[w]='grey'
                    queue.enqueue(w)
                }
            }
            color[u]='black'
            callback && callback(u)
        }

    }

    this.BFS = function (v) {
        var color = initializeColor()
        var queue = new Queue()
        var d = {}
        var pred = []
        queue.enqueue(v)

        for(var i =0;i<vertices.length;i++){
            d[vertices[i]] = 0
            pred[vertices[i]] = null
        }

        while(!queue.isEmpty()){
            var u = queue.dequeue()
            var neighbors = adjList.get(u)
            color[u]='grey'
            for(i=0;i<neighbors.length;i++){
                var w = neighbors[i]
                if (color[w]==='white') {
                    color[w]='grey'
                    d[w]= d[u]+1
                    pred[w]=u
                    queue.enqueue(w)
                }
            }
            color[u] = 'black'
        }

        return {
            distances: d,
            predecessors: pred
        }

    }

    this.dfs = function (callback) {
        var color = initializeColor()
        for(var i=0;i<vertices.length;i++){
            if (color[vertices[i]]==='white') {
                dfsVisit(vertices[i],color,callback)
            }
        }

    }

    var dfsVisit = function (u,color,callback) {
        color[u]= 'grey'
        if (callback) {
            callback(u)
        }
        var neighbors= adjList.get(u)
        for(var i=0;i<neighbors.length;i++){
            var w = neighbors[i]
            if (color[w]==='white') {
                dfsVisit(w,color,callback)
            }
        }
        color[u] ='black'
    }
}

var graph = new Graph()
var myVertices = ['A','B','C','D','E','F','G','H','I']
for(var i =0;i<myVertices.length;i++){
    graph.addVertex(myVertices[i])
}

graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('A','D')
graph.addEdge('C','D')
graph.addEdge('C','G')
graph.addEdge('D','G')
graph.addEdge('D','H')
graph.addEdge('B','E')
graph.addEdge('B','F')
graph.addEdge('E','I')


console.log(graph.toString());

function printNode(value) {
    console.log('Visited vertex:  '+value)
}

graph.bfs(myVertices[0],printNode)


var shortestPathA = graph.BFS(myVertices[0])
console.log(shortestPathA)

var fromVertex = myVertices[0]
for(var i=1;i<myVertices.length;i++){
    var toVertex = myVertices[i]
    var path = new Stack()
    for(var v = toVertex;v!==fromVertex;v=shortestPathA.predecessors[v]){
        path.push(v)
    }
    path.push(fromVertex)
    var s = path.pop()
    while(!path.isEmpty()){
        s+= ' - '+path.pop()
    }

    console.log(s)
}

graph.dfs(printNode)