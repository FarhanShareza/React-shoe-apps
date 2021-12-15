import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Account, Address, Category, ChangePasswordLog, Checkout, Home, Transaction, TransactionDetail } from '..'
import { Cart } from '..'
import { Gap } from '../../../components'
import { Footer, Header } from '../../../components/molecules'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="wrapper">
            <div className="header-wrapper">
                <Header/>
            </div>
            <Gap height={35}/>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/user/category">
                            <Category />
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
                        <Route path="/">
                            <Home />
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

export default MainApp
