import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Cart, ChangePassword, Login, MainApp, Register, RequesPassword } from '../../pages/User'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainApp/>
                </Route>
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
            </Switch>
        </Router>
    )
}

export default Routes
