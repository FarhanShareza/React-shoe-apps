import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '..'
import { Footer } from '../../../components/molecules'
import './mainApp.scss'

const MainApp = () => {
    return (
        <div className="wrapper">
            <p>Header</p>
            <div className="content-wrapper">
                <Router>
                    <Switch>
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
