import React, { useContext } from 'react'
import { Button, Gap, Input, Link } from '../../../components'
import { Redirect, useHistory } from 'react-router-dom'
import './register.scss'
import { AuthContext } from '../../../config/Routes'

const Register = () => {
    const history = useHistory()
    
    return (
        <div className="main-page">
            <div className="center">
                <Gap height={10}/>
                <div className="t-logo">UPKEEP</div>
                <Gap height={20}/>
                <div className="box-center">
                    <div className="t-register">REGISTER</div>
                    <Gap height={5}/>
                    <div className="t-link">Sudah punya akun Upkeep? <Link title="Login" onClick={() => {
                        history.push("/login")
                    }}/></div>
                    <Gap height={20}/>
                    <Input label="Nama Lengkap" placeholder="Nama lengkap kamu" reqired/>
                    <Gap height={10}/>
                    <Input label="Email" placeholder="Email" reqired/>
                    <Gap height={10}/>
                    <Input label="Nomor Telepon" type="number" placeholder="+62" reqired/>
                    <Gap height={10}/>
                    <div className="in-left">
                        <Input type="password" label="Password" placeholder="Minimal 8 karakter berbeda" reqired/>
                        <Gap height={20}/>
                    </div>
                    <div className="in-right">
                        <Input type="password" label="Confirm Password" placeholder="Ulangi kata sandi" reqired/>
                        <Gap height={20}/>
                    </div>
                    <Button title="Register" type="submit"/>
                    <Gap height={10}/>
                    <div className="t-link">Dengan mendaftar, saya menyetujui</div>
                    <div className="t-link"><Link title="Syarat dan Ketentuan"/> serta <Link title="Kebijakan Privasi"/></div>
                </div>
                <Gap height={25}/>
                <div className="t-footer">2021 © Upkeep. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default Register
