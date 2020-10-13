import React from "react"
import * as ReactBootStrap from "react-bootstrap"

function NavBar(){
    return(
        <ReactBootStrap.Navbar bg="light" expand="lg">
            <ReactBootStrap.Navbar.Brand href = "./home">Home</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Nav.Link href = "./8-Puzzle">8-Puzzle</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href = "./CurrencyConverter">Currency Converter</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Navbar>
    )
}

export default NavBar