class HashTable {
    constructor (size=53){
        this.keyMap = new Array(size)
    }
    hash (key){
        let total = 0 
        let WEIRD_PRIME = 31
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total 
    }
    set(key, value){
        let index = this.hash(key)
        if (!this.keyMap [index]){
            this.keyMap[index] = []
        }
        this.keyMap [index].push([key, value])
    }
    get (key){
        let index = this.hash(key)
            if (this.keyMap [index]){
                for(let i = 0; i < this.keyMap[index].length; i++){
                    if (this.keyMap[index] [i][0] === key){

                        return this.keyMap[index][i][1]
                    }
                }
            }
            return undefined 
        }
        keys(){
            let keysArr = []
            for (let i = 0; i < this.keyMap.length; i++){
                if (this.keyMap[i]){
                    for(let j = 0; j < this.keyMap[i].length; j++){
//   to prevent same values multiple times in the output (DUPLICATE DATA)
                      if(!keysArr.includes(this.keyMap[i][j][0])){
      // If u just want the value then:
      keysArr.push(this.keyMap[i][j][0])
                      }
                    }
                }
            }
            return keysArr
        }
        values(){
            let valuesArr = []
            for (let i = 0; i < this.keyMap.length; i++){
                if (this.keyMap[i]){
                    for(let j = 0; j < this.keyMap[i].length; j++){
//  to prevent same values multiple times in the output (DUPLICATE DATA)
                      if(!valuesArr.includes(this.keyMap[i][j][1])){
      // If u just want the value then:
      valuesArr.push(this.keyMap[i][j][1])
                      }
                    }
                }
            }
            return valuesArr
        }
    }


    let ht = new HashTable(17);
    ht.set("maroon","#800000")
    ht.set("yellow","#FFFF00")
    ht.set("olive","#808000")
    ht.set("salmon","#FA8072")
    ht.set("lightcoral","#F08080")
    ht.set("mediumvioletred","#C71585")
    ht.set("plum","#DDA0DD")
    ht.set("purple","#DDA0DD")
    ht.set("violet","#DDA0DD")

  
    console.log(ht.keys())

     // Output:
    // [
    //     'plum',
    //     'salmon',
    //     'violet',
    //     'purple',
    //     'maroon',
    //     'yellow',
    //     'olive',
    //     'lightcoral',
    //     'mediumvioletred'
    //   ]

    console.log(ht.values())
    // [
    //     'plum',
    //     'salmon',
    //     'violet',
    //     'purple',
    //     'maroon',
    //     'yellow',
    //     'olive',
    //     'lightcoral',
    //     'mediumvioletred'
    //   ]
    //   [
    //     '#DDA0DD',
    //     '#FA8072',
    //     '#800000',
    //     '#FFFF00',
    //     '#808000',
    //     '#F08080',
    //     '#C71585'
    //   ]

   