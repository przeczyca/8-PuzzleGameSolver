import React from "react"
import * as ReactBootStrap from "react-bootstrap"

function NavBar(){
    return(
        <ReactBootStrap.Navbar bg="light" expand="lg">
            <ReactBootStrap.Navbar.Brand>8-Puzzle</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav.Link>8-Puzzle</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link>Rubiks's Cube</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar