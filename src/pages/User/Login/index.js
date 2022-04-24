import React, { Fragment, useState, useEffect, useContext } from 'react'
import { ErrorMessage, Gap, Link, Input, Button } from '../../../components'
import './login.scss'
import Axios from 'axios'
import { AuthContext } from '../../../config/Routes'
import { useHistory, withRouter } from "react-router-dom";
//import { Button } from 'react-bootstrap'

const Login = (props) => {
    const history = useHistory();
    const {dispatch} = useContext(AuthContext)
   
    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }
    const [data, setData] = useState(initialState)
    const handleInputChange = event => {
        setData({ 
            ...data,
            [event.target.name] : event.target.value
        })
    }
    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })
        const requestBody = {
            email: data.email,
            password: data.password,
        }
        const config = {
            headers: { 
                'Content-type': 'application/json',
            },
        }
        Axios.post('http://localhost:5000/user/login', JSON.stringify(requestBody), config)
        .then(res => {
            console.log("data" ,res)
            if(res.data.status === true){
                dispatch({
                    type: "LOGIN",
                    payload: res.data
                })
                props.history.push("/")
            }
            else{
                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: res.data.msg
                })
            }
            throw res   
        })
    }

    return (
        <Fragment>
        <div className="main-page-login">
            <div className="center">
                <Gap height={20}/>
                {/* <div className="t-logo">
                    <img className="logo-upkeep-login" src="https://upkeepshoes.com/wp-content/uploads/2021/02/cropped-upkeep_clean_black.png"/>
                </div> */}
                <Gap height={30}/>
                <div className="box-center">
                    <div className="t-register">LOGIN</div>
                    <Gap height={5}/>
                    <div className="t-link">Belum punya akun Upkeep? <Link title="Register" onClick={() => {
                        history.push("/register")
                    }}/></div>
                    <Gap height={20}/>
                    {data.errorMessage && <ErrorMessage>{data.errorMessage}</ErrorMessage>}
                    <form onSubmit={handleFormSubmit}>
                        <Input type="email" value={data.email} onChange={handleInputChange} label="Email" name="email" placeholder="email@upkeep.com" required/>
                        <Gap height={10}/>
                        <Input type="password" value={data.password} onChange={handleInputChange} label="Password" name="password" placeholder="Minimal 8 Karakter" required/>  
                        <Gap height={25}/>
                        <Button title="Login" type="submit" disabled={data.isSubmitting}>
                            {data.isSubmitting ? (
                                "Loading"
                            ) :
                                (
                                    "Login"
                                )
                            }
                        </Button>
                    </form>   
                    <Gap height={10}/>
                    <div className="t-link-login"><Link title="Lupa password?" onClick={() => {
                        history.push("/change-password")
                    }}/></div>
                    <Gap height={25}/>
                </div>
                <Gap height={25}/>
                <div className="t-footer">2021 © Upkeep. All Rights Reserved</div>
            </div>
        </div>
        </Fragment>
    )
}

export default withRouter(Login)
