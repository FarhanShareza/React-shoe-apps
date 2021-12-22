import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainAppAdmin from '../../pages/Admin/MainAppAdmin'

const RoutesAdmin = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainAppAdmin/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RoutesAdmin
