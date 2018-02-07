/*
* @Author: zhanghang
* @Date:   2018-02-01 22:13:16
* @Last Modified by:   zhanghang
* @Last Modified time: 2018-02-02 11:03:49
*/
function Node(data,left,right) {
    this.data = data
    this.left = left
    this.right  = right
    this.show  = show 
    this.count = 1
}

function show (){
    return this.data
}


function BST(){
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
    this.getMin = getMin
    this.getMax = getMax
    this.find = find
    this.remove = remove
    this.update = update
    this.countNode = countNode
    this.countAdge = countAdge
}


function insert(data) {
    var n = new Node(data,null,null)
    if(this.root===null){
        this.root = n
    }else {
        var current = this.root
        var parent 
        while(true){
            parent = current
            if(data<current.data){
                current = current.left
                if (current===null) {
                    parent.left = n
                    break
                }
            }else {
                current = current.right
                if (current ===null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}

function inOrder(node) {

    if(!(node===null)){
        inOrder(node.left)
         console.log(node.show()+' ')
        inOrder(node.right)
    }
}

function preOrder(node) {
    if(!(node===null)){
         console.log(node.show()+' ')
        preOrder(node.left)
        preOrder(node.right)
    }
}
function postOrder(node) {
    if(!(node===null)){
        postOrder(node.left)
        postOrder(node.right)
         console.log(node.show()+' ')
    }
}

function getMin() {
    var current = this.root
    while(!(current.left ===null)){
        current = current.left
    }
    return current.data
}

function getSmallest(node) {
    var current = node
 while(!(current.left ===null)){
     current = current.left
 }
 return current
}

function getMax() {
    var current = this.root
    while(!(current.right ===null)){
        current = current.right
    }
    return current.data
}

function find(data){
    var current = this.root

    while(current!==null){

        if (current.data===data) {
            return current
        }else if( data<current.data){
            current = current.left
        }else{
            current = current.right
        }
    }
    return null
}

function remove(data){
    root = removeNode(this.root,data)
}

function removeNode(node,data) {
    if (node===null) {
        return null
    }

    if(data === node.data){
        if(node.left ===null && node.right ===null){
            node = null
            return null
        }

        if (node.left===null) {
            return node.right
        }

        if(node.right ===null){
            return node.left
        }

        var tempNode = getSmallest(node.right)
        node.data = tempNode.data
        node.right = removeNode(node.right,tempNode.data)
        return node
    }else if(data<node.data){
        node.left = removeNode(node.left,data)
        return node
    }else {
        node.right = removeNode(node.right,data)
        return node
    }
}

function update(data){
    var grade = this.find(data)
    grade.count++
    return grade
}

function countNode(){
    var count = 0

    preOrder(this.root)

    return count

    function preOrder(node) {
        if(!(node===null)){
            count++
             console.log(node.show()+' ')
            preOrder(node.left)
            preOrder(node.right)
        }
    }

}

function countAdge() {
    return countAdgeAssit(this.root)
}
function countAdgeAssit(node){

    if (!node) {
        return 0
    }

    if (node.left&&node.right) {
        return 2 + countAdgeAssit(node.left)+countAdgeAssit(node.right)
    }
    if (node.left &&!node.right) {
        return 1+ countAdgeAssit(node.left)
    }
    if (node.right && !node.left) {
        return 1+countAdgeAssit(node.right)
    }
    if (!node.right&&!node.left) {
        return 0
    }

}

// 辅助函数
function prArray(arr) {
    console.log( arr[0].toString() +' ')
    for(var i =1;i<arr.length;i++){
        console.log( arr[i].toString() +' ')
        if (i%10===0) {
            console.log('\n')
        }
    }
}

function genArray(length) {
    var arr = []
    for(var i =0;i <length;i++){
        arr[i] = Math.floor(Math.random()*101)
    }

    return arr
}

var nums = new BST()
nums.insert(23)
nums.insert(45)
nums.insert(16)
nums.insert(37)
nums.insert(3)
nums.insert(99)
// nums.update(23)
// console.log(nums.countNode())
console.log(nums.countAdge())
// console.log('Inorder traversal:  ')
// inOrder(nums.root)
// console.log('Preorder traversal:  ')
// preOrder(nums.root)
// console.log('Postorder traversal:  ')
// postOrder(nums.root)

// var min = nums.getMin()
// console.log('The minimum value of the BST is : '+min)

// var max = nums.getMax()
// console.log('The maximum value of the BST is : '+max)


// // console.log(nums.remove(22))
// console.log(nums.find(22))

// var grades = genArray(100)
// console.log('grades',grades)
// prArray(grades)

// var gradedistro = new BST()
// for(var i =0;i<grades.length;i++){
//     var g = grades[i]
//     var grade = gradedistro.find(g)
//     console.log('i',i,g,grade)
//     if (grade===null) {
//         gradedistro.insert(g)
//     }else {
//         console.log('ele',g)
//         gradedistro.update(g)
//     }
// }
// console.log('\n')
// inOrder(gradedistro.root)

// var aGrade = gradedistro.find(100)
// if (aGrade===null) {
//     console.log('no ')
// }else {
//  console.log('a'+aGrade.count)
// }

// console.log('countnode',gradedistro.countNode())