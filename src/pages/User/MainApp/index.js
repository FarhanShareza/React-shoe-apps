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
                        <Route path="/user/address">
                            <Address />
                        </Route>
                        <Route path="/user/change-password">
                            <ChangePasswordLog />
                        </Route>
                        <Route path="/account">
                            <Account />
                        </Route>
                        <Route path="/category">
                            <Category />
                        </Route>
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/transaction">
                            <Transaction />
                        </Route>
                        <Route path="/transaction-detail">
                            <TransactionDetail />
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
