import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Account, Address, Category, ChangePasswordLog, Checkout, Home, Transaction, TransactionDetail, Cart, ProductDetail, Login, Register, RequesPassword, ChangePassword } from '..'
import { Gap } from '../../../components'
import { Footer, HeaderLog } from '../../../components/molecules'
import { AuthContext } from '../../../config/Routes'
import './mainApp.scss'

const MainAppUser = () => {
    const {state} = useContext(AuthContext)
    const userRole = localStorage.getItem("role")
    if(state.role === 1 || userRole === 1){
        return <Redirect to="/admin"/>
    }
    else if(state.role === 2 || userRole === 2){
        return <Redirect to="/courier"/>
    }
    return (
        <div className="wrapper">
            <Router>
            <div className="header-wrapper">
                <HeaderLog/>
            </div>
            <Gap height={75}/>
            <div className="content-wrapper">
                <Switch>
                    <Route path="/user/category">
                        <Category />
                    </Route>
                    <Route path="/user/detail-product/:productId">
                        <ProductDetail />
                    </Route>
                    <Route path="/user/cart">
                        <Cart />
                    </Route>
                    <Route path="/user/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/user/transaction">
                        <Transaction />
                    </Route>
                    <Route path="/user/transaction-detail">
                        <TransactionDetail />
                    </Route>
                    <Route path="/user/change-password">
                        <ChangePasswordLog />
                    </Route>
                    <Route path="/user/account">
                        <Account />
                    </Route>
                    <Route path="/user/address">
                        <Address />
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                    <Route exact path="/reques-reset-password">
                        <RequesPassword/>
                    </Route>
                    <Route exact path="/change-password">
                        <ChangePassword/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
            <Gap height={50}/>
            <div>
                <Footer/>
            </div>
            </Router>
        </div>
    )
}

export default MainAppUser
