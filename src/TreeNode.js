class TreeNode{
    constructor(data){
        this.data = data
        this.children = []
        this.parent = null
        this.moveToParent = ""
    }

    addChild(data){
        const child = new TreeNode(data)
        this.children.push(child)
        child.parent = this
    }

    getChildren(){
        return this.children
    }

    getParent(){
        return this.parent
    }

    getData(){
        return this.data
    }
    
    setMoveToParent(direction){
        this.moveToParent = direction
    }

    getMoveToParent(){
        return this.moveToParent
    }

}

export default TreeNode