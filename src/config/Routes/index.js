import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ChangePassword, Login, MainApp, Register, RequesPassword } from '../../pages/User'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/reques-reset-password">
                    <RequesPassword/>
                </Route>
                <Route path="/change-password">
                    <ChangePassword/>
                </Route>
                <Route path="/">
                    <MainApp/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
