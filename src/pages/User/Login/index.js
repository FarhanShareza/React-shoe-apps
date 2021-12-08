import React from 'react'
import { Button, Gap, Input, Link } from '../../../components'
import './login.scss'

const Login = () => {
    return (
        <div className="main-page-login">
            <div className="center">
                <Gap height={10}/>
                <div className="t-logo">UPKEEP</div>
                <Gap height={20}/>
                <div className="box-center">
                    <div className="t-register">LOGIN</div>
                    <Gap height={5}/>
                    <div className="t-link">Belum punya akun Upkeep? <Link title="Register"/></div>
                    <Gap height={20}/>
                    <Input label="Email" placeholder="email@upkeep.com"/>
                    <Gap height={10}/>
                    <Input label="Password" type="password" placeholder="Minimal 8 Karakter"/>     
                    <Gap height={25}/>
                    <Button title="Login" />
                    <Gap height={10}/>
                    <div className="t-link-login"><Link title="Lupa password?"/></div>
                    <Gap height={25}/>
                </div>
                <Gap height={100}/>
                <div className="t-footer">2021 © Upkeep. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Login
