import React, {Component} from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import "../../styles.css"

function Tile(props) {
    return (
        <Button className = "buttons" variant="primary" size="lg" onClick={() => props.game.makeMove(props.index)}>{props.value}</Button>
    )
}

export default Tile