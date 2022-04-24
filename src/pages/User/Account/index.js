import React from 'react'
import { Gap } from '../../../components'
import { Row, Col} from 'react-bootstrap'
import { FaRegAddressBook } from 'react-icons/fa'
import { RiLockPasswordLine, RiCustomerService2Line } from 'react-icons/ri'
import { IoLogOutOutline } from 'react-icons/io5'
import './account.scss'
import { NavLink } from 'react-router-dom'

const Account = () => {
    return (
        <div className="box-account-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Account</p>
            </div>
            <div className="box-account">
                <Row>
                    <Col xs={4} sm={3} md={2}>
                        <div className="box-account-left rmv-padding">
                            <img className="img-account-left" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt="product"/>
                        </div>
                    </Col>
                    <Col xs={8} sm={9} md={10}>
                        <div className="box-account-right">
                            <p className="t-name-account remove-btm">Farhan Syahreza Putra</p>
                            <p className="t-account remove-btm">082191776065</p>
                            <p className="t-account remove-btm">farhan.syahreza2@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="box-account">
                <div className="box-teks border-bottom-grey">
                    <p className="t-name-account remove-btm">Pengarutan Akun</p>
                </div>
                <div className="box-sub-setting">
                    <p className="t-account rmv"><FaRegAddressBook/><span><NavLink to="/user/address" className="rmv"> Daftar Alamat</NavLink></span></p>
                    <p className="t-account rmv"><RiLockPasswordLine/><span><NavLink to="/user/change-password" className="rmv"> Ubah Kata Sandi</NavLink></span></p>
                    <p className="t-account rmv"><IoLogOutOutline/><span><NavLink to="/" className="rmv"> Keluar</NavLink></span></p>
                </div>
                <div className="box-teks border-bottom-grey">
                    <p className="t-name-account remove-btm">Pusat Bantuan</p>
                </div>
                <div className="box-sub-setting">
                    <p className="t-account"><RiCustomerService2Line/> Upkeep Care</p>
                </div>
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default Account
