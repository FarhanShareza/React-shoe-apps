import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Footer from '../../../components/molecules/Admin/Footer'
import Sidebar from '../../../components/molecules/Admin/Sidebar'
import { CleaningProcess, Dashbord, DetailOrder, OrderStatus, Payment, ProcessInOutlet, Product, Shipment, UserInfo, Voucher } from '..'
import './mainAppAdmin.scss'
import { AuthContext } from '../../../config/Routes'

const MainAppAdmin = () => {
    const {state} = useContext(AuthContext)
    if(!state.isAuthenticated){
        return <Redirect to="/login"/>
    }
    
    return (
        <div className="wrapper-admin">
            <Router>
                <div className="header-wrapper-admin">
                    <Sidebar/>
                </div>
                <div className="content-wrapper-admin">
                    <Switch>
                        <Route path="/admin/user-info">
                            <UserInfo/>
                        </Route>
                        <Route path="/admin/product">
                            <Product/>
                        </Route>
                        <Route path="/admin/payment">
                            <Payment/>
                        </Route>
                        <Route path="/admin/shipment">
                            <Shipment/>
                        </Route>
                        <Route path="/admin/voucher">
                            <Voucher/>
                        </Route>
                        <Route path="/admin/order-status">
                            <OrderStatus/>
                        </Route>
                        <Route path="/admin/order-process">
                            <ProcessInOutlet/>
                        </Route>
                        <Route path="/admin/cleanning-process">
                            <CleaningProcess/>
                        </Route>
                        <Route path="/admin/order-detail">
                            <DetailOrder/>
                        </Route>
                        <Route path="/admin">
                            <Dashbord />
                        </Route>
                    </Switch>
                </div>
                <div className="footer-wrapper">
                    <Footer/>
                </div>
            </Router>
        </div>
    )
}

export default MainAppAdmin
