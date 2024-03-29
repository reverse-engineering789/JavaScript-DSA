//          10 

//      5        13 

//   2     7  11     16

class Node {
    constructor(value){
        this.value = value 
        this.left = null 
        this.right = null 
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null 
    }
    insert(value){
        var newNode = new Node(value)
        if (this.root === null){
            this.root = newNode
            return this 
        }else{
            var current = this.root 
            while (true){
                if (value === current.value) return undefined 
                if (value < current.value){
                    if (current.left === null){
                        current.left = newNode 
                        return this 
                    }else{
                        current = current.left 
                    }
                }else if (value > current.value){
                    if (current.right === null){
                        current.right = newNode 
                        return this
                    }else{
                        current = current.right  
                    }

                }
            }
        }
    }
}

//          10 

//      5        13 

//   2     7  11     16


var tree = new BinarySearchTree()
tree.insert(10)

tree.insert(5)

tree.insert(13)

tree.insert(11)

tree.insert(2)

tree.insert(16)

tree.insert(7)


console.log(tree)

// Output:
// BinarySearchTree {
//     root: Node {
//       value: 10,
//       left: Node { value: 5, left: [Node], right: [Node] },
//       right: Node { value: 13, left: [Node], right: [Node] }
//     }
//   }
