
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
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains (value){
        if (this.root === null) return false 
        var current = this.root 
        var found = false 
        while (current && !found){
            if (value < current.value){
              current = current.left 
            }else if (value > current.value){
                current = current.right
            }else{
                return true 
            }
        }
        return false 
        }
//-----------------------------------------------------


//           ---->      10 
    
//        ---->    6           15 

//     ---->    3     8             20 
    BFS(){
        var node = this.root,
         data = [],
         queue = []
         queue.push(node)
          
         while (queue.length){
             node = queue.shift()
             data.push(node.value)
             if(node.left) queue.push(node.left)
             if(node.right) queue.push(node.right)
         }
         return data
    }
}

//-----------------------------------------------------
var tree = new BinarySearchTree()
tree.insert(10)

tree.insert(6)

tree.insert(15)

tree.insert(3)

tree.insert(8)

tree.insert(20)


console.log(tree.BFS())

// Output:
// [ 10, 6, 15, 3, 8, 20 ]


//           ---->      10 
    
//        ---->    6           15 

//     ---->    3     8             20 