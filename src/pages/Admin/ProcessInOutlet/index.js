import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button, Gap } from '../../../components'
import './processInOutlet.scss'

const ProcessInOutlet = () => {
    return (
        <div className="">
            <Gap height={55}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Order On Process</p>
            </div>
            <div className="box-transaction">
                <div className="address-border-bottom">
                    <p className="remove-btm t-transaction-main">Service<span className="t-status-transaction">In Outlet</span></p>
                    <p className="t-date-transaction">3 Desember 2021</p>
                </div>
                <div className="box-transaction-d address-border-bottom">
                    <p className="t-transaction-product border-bottom-grey">Info Product</p>
                    <div className="">
                        <Row>
                            <Col xs={4} sm={4} md={4}>
                                <div className="t-sub-shipment">
                                    <p>Invoice</p>
                                    <p className="remove-btm">Quantity</p>
                                </div>
                            </Col>
                            <Col xs={8} sm={8} md={8}>
                                <div className="t-sub-shipment">
                                    <p>INV/2021/SRC/2021/2211</p>
                                    <p className="quantity-product remove-btm">3 Packs</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="box-transaction-btm">
                    <Row>
                        <Col xs={4} sm={6} md={6}>
                            <div className="t-billing">
                                <p className="remove-btm t-sub-transaction-main">Total Belanja</p>
                                <p className="remove-btm t-sub-price-transaction">Rp 156000</p>
                            </div>
                        </Col>
                        <Col xs={4} sm={3} md={3}>
                            <div className="box-btn-detail-white">
                                <Button title="Go Cleanning"/>
                            </div>
                        </Col>
                        <Col xs={4} sm={3} md={3}>
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

export default ProcessInOutlet
