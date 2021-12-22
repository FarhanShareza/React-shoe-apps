import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainAppCourier } from '../../pages/Courier'


const RoutesCourier = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <MainAppCourier/>
                </Route>
            </Switch>
        </Router>
    )
}

export default RoutesCourier
