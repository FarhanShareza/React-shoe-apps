import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Checkout, Home } from '..'
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
                        <Route path="/cart">
                            <Cart />
                        </Route>
                        <Route path="/checkout">
                            <Checkout />
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
