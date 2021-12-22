import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Gap } from '../../../components'
import Header from '../../../components/molecules/Admin/Header'
import DetailOrder from '../DetailOrder'
import OrderConfirm from '../OrderConfirm'
import OrderPickup from '../OrderPickup'
import OrderReturn from '../OrderReturn'

import './mainAppCourier.scss'

const MainAppCourier = () => {
    return (
        <div className="wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <Gap height={55}/>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/confirm-order">
                            <OrderConfirm />
                        </Route>
                        <Route path="/detail-order">
                            <DetailOrder />
                        </Route>
                        <Route path="/pickup-order">
                            <OrderPickup />
                        </Route>
                        <Route path="/return-order">
                            <OrderReturn />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default MainAppCourier
