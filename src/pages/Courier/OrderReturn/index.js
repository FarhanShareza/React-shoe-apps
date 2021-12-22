import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button, Gap } from '../../../components'

import './orderReturn.scss'

const OrderReturn = () => {
    return (
        <div className="transaction-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Return Order</p>
            </div>
            <div className="box-transaction">
                <div className="address-border-bottom">
                    <p className="remove-btm t-transaction-main">Service<span className="t-status-transaction">Pengambilan</span></p>
                    <p className="t-date-transaction">3 Desember 2021</p>
                </div>
                <div className="box-transaction-d address-border-bottom">
                    <p className="t-transaction-product border-bottom-grey">Alamat Pelanggan</p>
                    <div className="">
                        <Row>
                            <Col xs={4} sm={4} md={4}>
                                <div className="t-sub-shipment">
                                    <p>Pengiriman</p>
                                    <p>Alamat</p>
                                </div>
                            </Col>
                            <Col xs={8} sm={8} md={8}>
                                <div className="t-sub-shipment">
                                    <p className="">Internal Outlet Shipment</p>
                                    <p className="remove-btm">Farhan Syahreza Putra</p>
                                    <p className="remove-btm t-size-10">82191776065</p>
                                    <p className="remove-btm t-size-10">Jl. Kenanga raya Gg. Dahlia No. 20, Kota Medan, Medan Selayang, 20132</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-transaction-btm">
                    <Row>
                        <Col xs={6} sm={8} md={8}>
                            <div className="t-billing">
                                <p className="remove-btm t-sub-transaction-main">Total Belanja</p>
                                <p className="remove-btm t-sub-price-transaction">Rp 156000</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={4}>
                            <div className="box-btn-detail">
                                <Button title="Lihat Detail"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default OrderReturn
