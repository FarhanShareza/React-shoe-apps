import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Account, Address, Category, ChangePasswordLog, Checkout, Home, Transaction, TransactionDetail, Cart, ProductDetail } from '..'
import { Gap } from '../../../components'
import { Footer, HeaderLog } from '../../../components/molecules'
import { AuthContext } from '../../../config/Routes'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="wrapper">
            <div className="header-wrapper">
                <HeaderLog/>
            </div>
            <Gap height={70}/>
            <div className="content-wrapper">
                <Router>
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                        <Route path="/user/category">
                            <Category />
                        </Route>
                        <Route path="/user/detail-product/:productId">
                            <ProductDetail />
                        </Route>
                    </Switch>
                </Router>
            </div>
            <div>
                {/* <Footer/> */}
            </div>
        </div>
    )
}

export default MainApp
