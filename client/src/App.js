import React from 'react'
import { Route, Switch } from "react-router-dom"
import Login from "./screens/Login"
import Vote from "./screens/Vote"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/vote" component={Vote}/>
            </Switch>
        </div>
    )
}

export default App;
