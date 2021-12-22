import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Register, MainApp, ChangePassword, RequesPassword } from '../../pages/User'
import { MainAppCourier } from '../../pages/Courier'
import { MainAppAdmin } from '../../pages/Admin'

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
                <Route path="/admin">
                    <MainAppAdmin/>
                </Route>
                <Route path="/courier">
                    <MainAppCourier/>
                </Route>
                <Route path="/">
                    <MainApp/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes
