import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Login from "./pages/Login"
import Home from "./pages/Home"

import GlobalStyles from "./styles/global"
import "./utils/tokenController"

const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App