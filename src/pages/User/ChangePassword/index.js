import React from 'react'
import { Button, Gap, Input, Link } from '../../../components'
import './changePassword.scss'

const ChangePassword = () => {
    return (
        <div className="main-page-login">
            <div className="center">
                <Gap height={10}/>
                <div className="t-logo">UPKEEP</div>
                <Gap height={20}/>
                <div className="box-center">
                    <div className="t-reset">Ubah kata sandi</div>
                    <Gap height={20}/>
                    <Input label="Password" type="password" placeholder="Minimal 8 karakter berbeda"/>
                    <Gap height={10}/>
                    <Input label="Confirm Password" type="password" placeholder="Ulangi kata sandi"/>
                    <Gap height={25}/>
                    <Button title="Lanjut" />
                </div>
                <Gap height={180}/>
                <div className="t-footer">2021 © Upkeep. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default ChangePassword
