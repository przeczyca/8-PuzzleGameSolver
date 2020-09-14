import TreeNode from "./TreeNode"

//gameState: type two-dimensional array
//method: type string
function solve(gameState, method){
    const startState = JSON.parse(JSON.stringify(gameState))
    if (method === "best"){
        return bestSolution(startState)
    }
    else if (method === "quick"){
        return quickSolve(startState)
    }
    return null
}

//BFS
function bestSolution(gameState){
    const startState = JSON.parse(JSON.stringify(gameState))
    let visited = new Set()           //key is string, data is gameState
    const root = new TreeNode(startState)
    let queue = []

    let curState = root.data
    let curStateStr = myToString(curState)
    let curNode = root
    while (curStateStr !== "123456780"){
        const children = allPosMoves(curState)      //[[gameState, direction]]
        for (let i in children){
            const child = children[i] //[gameState, direction]
            const childNode = new TreeNode(child[0])
            const direction = child[1]
            childNode.parent = curNode
            childNode.setMoveToParent(direction)
            const childState = childNode.data
            const childStr = myToString(childState)
            if (!visited.has(childStr)){
                queue.push(childNode)
                curNode.addChild(childNode)
                visited.add(childStr)
            }
        }
        curNode = queue.shift()
        curState = curNode.data
        curStateStr = myToString(curState)
    }
    
    return getDirections(curNode).join()
}

//A*
function quickSolve(gameState){

}

function getDirections(treeNode){
    let path = []
    let node = treeNode
    while (node.getMoveToParent() !== ""){
        path.push(node.getMoveToParent())
        node = node.parent
    }
    return path
}

function myToString(gameState){
    var stateString = ""
    gameState.forEach(row => {
        row.forEach(col => {
            stateString += col
        })
    })
    return stateString
}

function findIndex(gameState, value){
    for (let i = 0; i < gameState.length; i++) {
        const row = gameState[i]
        for (let col = 0; col < row.length; col++) {
            const val = row[col]
            if (val === 0) return [i, col]
        }
    }
    return null
}

//adds all possible moves game can make from current position in one turn
function allPosMoves(gameState){
    let curState = JSON.parse(JSON.stringify(gameState))
    let toReturn = []
    const zeroIndx = findIndex(gameState, 0)    //[row, col]
    const row = zeroIndx[0]
    const col = zeroIndx[1]
    
    //move 0 left
    if (col > 0){
        let newState = JSON.parse(JSON.stringify(curState))
        newState[row][col] = newState[row][col-1]
        newState[row][col-1] = 0
        toReturn.push([newState, "Left"])
    }
    
    //move 0 down
    if (row < 2){
        let newState = JSON.parse(JSON.stringify(curState))
        newState[row][col] = newState[row+1][col]
        newState[row+1][col] = 0
        toReturn.push([newState, "Down"])
    }

    //move 0 right
    if (col < 2){
        let newState = JSON.parse(JSON.stringify(curState))
        newState[row][col] = newState[row][col+1]
        newState[row][col+1] = 0
        toReturn.push([newState, "Right"])
    }

    //move 0 up
    if (row > 0){
        let newState = JSON.parse(JSON.stringify(curState))
        newState[row][col] = newState[row-1][col]
        newState[row-1][col] = 0
        toReturn.push([newState, "Up"])
    }

    return toReturn
}

export default solve