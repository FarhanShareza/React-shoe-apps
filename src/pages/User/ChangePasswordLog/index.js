import React from 'react'
import { Button, Gap, Input } from '../../../components'
import './changePasswordLog.scss'

const ChangePasswordLog = () => {
    return (
        <div className="page-change-password">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Ubah Kata Sandi</p>
            </div>
            <div className="box-change-password">
                <Gap height={10}/>
                <Input label="Password" type="password" placeholder="Minimal 8 karakter berbeda"/>
                <Gap height={10}/>
                <Input label="Confirm Password" type="password" placeholder="Ulangi kata sandi"/>
                <Gap height={25}/>
                <Button className="btn-change-password" title="Lanjutkan" />
            </div>
            <Gap height={100}/>
        </div>
    )
}

export default ChangePasswordLog
