import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../../../components/molecules/Admin/Footer'
import Sidebar from '../../../components/molecules/Courier/Sidebar'
import Dashbord from '../Dashbord'
import UserInfo from '../UserInfo'
import Product from '../Product'
import './mainAppAdmin.scss'
import Payment from '../Payment'
import Shipment from '../Shipment'
import Voucher from '../Voucher'

const MainAppAdmin = () => {
    return (
        <div className="wrapper-admin">
            <div className="header-wrapper-admin">
                <Sidebar/>
            </div>
            <div className="content-wrapper-admin">
                <Router>
                    <Switch>
                        <Route path="/user-info">
                            <UserInfo />
                        </Route>
                        <Route path="/product">
                            <Product />
                        </Route>
                        <Route path="/payment">
                            <Payment />
                        </Route>
                        <Route path="/shipment">
                            <Shipment/>
                        </Route>
                        <Route path="/voucher">
                            <Voucher/>
                        </Route>
                        <Route path="/">
                            <Dashbord />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div className="footer-wrapper">
                <Footer/>
            </div>
        </div>
    )
}

export default MainAppAdmin
