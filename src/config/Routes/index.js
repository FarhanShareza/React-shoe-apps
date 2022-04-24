import React, {useReducer, createContext} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MainAppUser } from '../../pages/User'
import { MainAppCourier } from '../../pages/Courier'
import { MainAppAdmin } from '../../pages/Admin'

//Context
export const AuthContext = createContext()

//Initial state
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: 0   
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      localStorage.setItem("token", JSON.stringify(action.payload.token))
      localStorage.setItem("role", JSON.stringify(action.payload.userRole))
    return {
      ...state,
      isAuthenticated: true,
      user: action.payload.user,
      token: action.payload.token,
      role: action.payload.userRole
    }
    case "LOGOUT":
      localStorage.clear()
      return {
        ...state,
        isAuthenticated: false,
        user: null 
      }
    default:
      return state
  }
}

const Routes = () => {
    const[state, dispatch] = useReducer(reducer, initialState)

    return (
        <Router>
            <Switch>
                <AuthContext.Provider value={{
                    state,
                    dispatch
                }}>
                  <Route path="/">
                      <MainAppUser/>
                  </Route>
                  <Route path="/admin">
                      <MainAppAdmin/>
                  </Route>
                  <Route path="/courier">
                      <MainAppCourier/>
                  </Route>
                </AuthContext.Provider>
            </Switch>
        </Router>
    )
}

export default Routes
