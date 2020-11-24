import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from '../App'
import dashboard from '../pages/dashboard/dashboard'

export default function router() {
    return (
       <Router>
           <Switch>
               <Route path="/" exact>
                <App/>
               </Route>
               <Route path="/dashboard" exact>
                <Dashboard/>
               </Route>
           </Switch>
       </Router>
    )
}
