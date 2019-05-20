import React from 'react'
import { Route, Switch } from "react-router-dom"
import Login from "./screens/Login"

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Login}/>
            </Switch>
        </div>
    )
}

export default App;
