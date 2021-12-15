import React from 'react'
import { Button, Gap } from '../../../components'
import { Row, Col} from 'react-bootstrap'
import './address.scss'

const Address = () => {
    return (
        <div>
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Daftar Alamat<span className="t-add-address">Tambah Alamat</span></p>
            </div>
            <div className="box-address">
                <p className="t-size-12 t-bold remove-btm">Rumah <span className="t-utama">Utama</span></p>
                <p className="t-bold ">Farhan Syahreza Putra</p>
                <p className="t-size-12 remove-btm">082191776065</p>
                <p className="t-size-12 remove-btm">Jl. Kenanga Raya Gg. Dahlia No. 20, Medan Selayang, Kota Medan, 20132</p>
                <div className="box-btn-address">
                    <Row>
                        <Col xs={6} sm={8} md={8}>
                            <Button className="btn-address" title="Ubah Alamat"/>            
                        </Col>
                        <Col xs={3} sm={2} md={2}>    
                            <Button className="btn-address" title="Utama"/>
                        </Col>
                        <Col xs={3} sm={2} md={2}>
                            <Button className="btn-address" title="Hapus"/>
                        </Col>
                    </Row>
                </div>
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default Address
