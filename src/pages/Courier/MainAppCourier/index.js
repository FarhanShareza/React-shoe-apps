import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { DetailOrder, OrderConfirm, OrderReturn, OrderPickup } from '..'
import { Gap } from '../../../components'
import Footer from '../../../components/molecules/Courier/Footer'
import Header from '../../../components/molecules/Courier/Header'
import { AuthContext } from '../../../config/Routes'
import './mainAppCourier.scss'

const MainAppCourier = () => {
    const {state} = useContext(AuthContext)

    return (
        <div className="wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <Gap height={75}/>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/courier/detail-order">
                            <DetailOrder />
                        </Route>
                        <Route path="/courier/pickup-order">
                            <OrderPickup />
                        </Route>
                        <Route path="/courier/return-order">
                            <OrderReturn />
                        </Route>
                        <Route path="/courier">
                            <OrderConfirm />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <Gap height={25}/>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
    )
}

export default MainAppCourier
