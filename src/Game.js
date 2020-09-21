import React, {Component} from "react"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'

import Tile from './Tile'
import solve from "./Solver"
import "./styles.css"

class Game extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            gameState:[
            [1,2,3],
            [4,5,6],
            [7,8,0]],
            solution: "Solution: "
        }
    }

    //moves the non-zero button
    //index is an array of size 2 ([row, column])
    makeMove = index => {
        const size = 3
        const row = index[0]
        const col = index[1]
        let curState = this.state.gameState
        const toMove = curState[row][col]

        //check if 0 is to the left
        if (toMove !== 0 && col > 0){
            if (curState[row][col-1] === 0){
                curState[row][col-1] = toMove
                curState[row][col] = 0
            }
        }
        //check if 0 is below
        if(toMove !== 0 && row < size-1){
            if (curState[row+1][col] === 0){
                curState[row+1][col] = toMove
                curState[row][col] = 0
            }
        }
        //check if 0 is to the right
        if (toMove !== 0 && col < size-1){
            if (curState[row][col+1] === 0){
                curState[row][col+1] = toMove
                curState[row][col] = 0
            }
        }
        //check if 0 is above
        if (toMove !== 0 && row > 0){
            if (curState[row-1][col] === 0){
                curState[row-1][col] = toMove
                curState[row][col] = 0
            }
        }

        this.setState({gameState: curState})
    }
    
    render(){
        return (
            <div className = "gameStyle">
                <Tile value={this.state.gameState[0][0]} index={[0,0]} game={this}/>
                <Tile value={this.state.gameState[0][1]} index={[0,1]} game={this}/>
                <Tile value={this.state.gameState[0][2]} index={[0,2]} game={this}/>
                <br></br>

                <Tile value={this.state.gameState[1][0]} index={[1,0]} game={this}/>
                <Tile value={this.state.gameState[1][1]} index={[1,1]} game={this}/>
                <Tile value={this.state.gameState[1][2]} index={[1,2]} game={this}/>
                <br></br>
                
                <Tile value={this.state.gameState[2][0]} index={[2,0]} game={this}/>
                <Tile value={this.state.gameState[2][1]} index={[2,1]} game={this}/>
                <Tile value={this.state.gameState[2][2]} index={[2,2]} game={this}/>
                <hr></hr>
                
                <Button variant="primary" size="lg" onClick={() => this.setState({solution: solve(this.state.gameState,"best")})}>Solve</Button>
                <br></br>
                <h3>
                    {this.state.solution}
                </h3>
            </div>
        )
    }
}

export default Game