function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}


var invertTree = function (root) {
    if (root===null||(root.right===null&&root.left ===null)) {
        return root
    }

    var temp = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(temp)
}


var isSameTree = function (p,q) {
    if(p===null&&q===null){
        return true
    }

    if(p!==null&&q===null||p===null&&q!==null){
        return false
    }

    if(p.val !=q.val){
        return false
    }

    return isSameTree(p.right,q.right)&&isSameTree(p.left,q.left)
}

var lowestCommonAncestor = function (root,p,q) {
    var count = 0
    while(true){
        var value = root.value
        if (p.val>=value&&value>=q.val||p.val <=value&&value<=q.val) {
            return root
        }else if(p.val >value&&q.val >value){
            root = root.right
        }else {
            root = root.left
        }
    }
}


var levelOrder = function (root) {
    if (root===null||root.length===0) {
        return []
    }

    var map = {}

    var waitlist = [{level: 0,node: root}]

    while(waitlist.length>0){
        var cur = waitlist.pop()
        var node = cur.node

        if(!map[cur.level]){
            map[cur.level]=[node.val]
        }else {
            map[cur.level].push(node.val)
        }

        if (node.right) {
            waitlist.push({level: cur.level+1,node: node.right})
        }
        if (node.left) {
            waitlist.push({level: cur.level+1},node: node.left)
        }
        var result = []
        for(var i in map){
            result.push(map[i])
        }

        return result
    }

}

var levelOrderBottom = function (root) {
    if (root===null) {
        return []
    }

    var map = {}

    find(root,0)

    for(var i in map){
        result.push(map[i])
    }

    return result.reverse()

    function find(node,level) {
        if(node==null){return}
            if(!map[level]){
                map[level]=[node.val]
            }else {
                map[level].push(node.val)
            }

            find(node.left,level+1)
            find(node.right,level+1)

    }
}

var isSymmetric = function (root) {
    if(root ==null||(root.right==null&&root.left ==null)){
        return true
    }

    root.right = revertTree(root.right)
    return isSameTree(root.left,root.right)

    function revertTree(node) {
        if(node==null||node.left==null &&node.right ==null){
            return node
        }
        var temp = revertTree(node.left)
        node.left = revertTree(node.right)

        node.right = temp
        return node
    }

    function isSameTree(left,right) {
        if (left==null&&right==null) {
            return true
        }

        if(left ===null &&right!==null||right ==null && left!==null){
            return false
        }
        if (left.val!==right.val) {
            return false
        }
        return isSameTree(left.right,,right.right)&& isSameTree(left.left,right.left)
    }
}


var isBalanced = function (root) {
    if (root==null||(root.right==null&&root.left ==null)) {
        return true
    }

    var dL = findDeep(root.left)
    var dR = findDeep(root.right)

    var diff = Math.abs(dL-dr)<=1
    return diff && isBalanced(root.left)&&isBalanced(root.right)
}


function findDeep(root) {
    if(root ==null){
        return 0
    }

    var deepL = 1 +findDeep(root.left)
    var deepR = 1+findDeep(root.right)

    return deepL>deepR?deepL: deepR
}


var hasPathSum = function (root,sum) {
    if(root==null)return false
        var list = []
    sumR2L(root,0)

    console.log(list)

    return sumR2L(root,0)

    function sumR2L(root,s) {
        if (root.left===null&&root.right===null) {
            list.push(s)
            s+= root.val
            return s ==sum
        }

        if(root.left!=null&&root.right ==null){
            return sumR2L(root.left,s+root.val)
        }

        if (root.right!=null&&root.left ==null) {
            return sumR2L(root.right,s+root.val)
        }

        return sumR2L(root.left,s+root.val)||sumR2L(root.right,s+root.val)
    }
}

function binaryTreePaths(root) {
    if(!root)return []
        var list = []
    findPath(root,'')
    return list

    function findPath(node,str) {
        if(node.right ==null && node.left ==null){
            list.push(str+node.val)
        }else {
            if(node.left!==null){
                findPath(node.left,str +node.val+'->')
            }
            if (node.right!==null) {
                findPath(node.right,str +node.val+'->')   
            }
        }
    }
}