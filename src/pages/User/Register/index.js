import React from 'react'
import { Button, Gap, Input, Link } from '../../../components'
import './register.scss'

const Register = () => {
    return (
        <div className="main-page">
            <div className="center">
                <Gap height={10}/>
                <div className="t-logo">UPKEEP</div>
                <Gap height={20}/>
                <div className="box-center">
                    <div className="t-register">REGISTER</div>
                    <Gap height={5}/>
                    <div className="t-link">Sudah punya akun Upkeep? <Link title="Login"/></div>
                    <Gap height={20}/>
                    <Input label="Nama Lengkap" placeholder="Nama lengkap kamu"/>
                    <Gap height={10}/>
                    <Input label="Email" placeholder="Email"/>
                    <Gap height={10}/>
                    <Input label="Nomor Telepon" type="number" placeholder="+62"/>
                    <Gap height={10}/>
                    <div className="in-left">
                        <Input type="password" label="Password" placeholder="Minimal 8 karakter berbeda"/>
                        <Gap height={20}/>
                    </div>
                    <div className="in-right">
                        <Input type="password" label="Confirm Password" placeholder="Ulangi kata sandi"/>
                        <Gap height={20}/>
                    </div>
                    <Button title="Register" />
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
