import React from 'react';
//import Game from './pages/8-puzzle/Game'
import NavBar from "./NavBar"

import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"

import Puzzle from "./pages/8-puzzle"
import CurrencyConverter from "./pages/curConverter"
import Home from "./pages/homePage"

function App() {
    return(
        <div>
            <NavBar />
            <Router>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/8-Puzzle" component={Puzzle} />
                    <Route path="/CurrencyConverter" component={CurrencyConverter} />
                    <Redirect path="/" to="/home" />
                </Switch>
            </Router>
        </div>
    )
}

export default App;