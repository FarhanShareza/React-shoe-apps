import React from 'react'
import { Button, Gap, Input, Link } from '../../../components'
import './requesPassword.scss'

const RequesPassword = () => {
    return (
        <div className="main-page-login">
            <div className="center">
                <Gap height={10}/>
                <div className="t-logo">UPKEEP</div>
                <Gap height={20}/>
                <div className="box-center">
                    <div className="t-reset">Atur ulang kata sandi</div>
                    <Gap height={20}/>
                    <div className="t-sub-reset">Masukkan e-mail yang terdaftar. Kami akan mengirimkan kode verifikasi untuk atur ulang kata sandi.</div>
                    <Gap height={20}/>
                    <Input label="Email" placeholder="email@upkeep.com"/>
                    <Gap height={25}/>
                    <Button title="Lanjut" />
                    <Gap height={25}/>
                </div>
                <Gap height={160}/>
                <div className="t-footer">2021 © Upkeep. All Rights Reserved</div>
            </div>
        </div>
    )
}

export default RequesPassword
