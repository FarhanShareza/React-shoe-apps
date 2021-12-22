import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Button, Gap } from '../../../components'

import './orderConfirm.scss'

const OrderConfirm = () => {
    return (
        <div className="transaction-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Confirm Order</p>
            </div>
            <div className="box-transaction">
                <div className="address-border-bottom">
                    <p className="remove-btm t-transaction-main">Service<span className="t-status-transaction">Menunggu Konfirmasi</span></p>
                    <p className="t-date-transaction">3 Desember 2021</p>
                </div>
                <div className="box-transaction-d address-border-bottom">
                    <Row>
                        <Col xs={2} sm={1} md={1}>
                            <div className="box-product-left rmv-padding">
                                <img className="img-product-left" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt="product"/>
                            </div>
                        </Col>
                        <Col xs={10} sm={11} md={11}>
                            <div className="box-product-right">
                                <p className="t-product-right remove-btm">Deep Cleaning Shoes For Man</p>
                                <p className="t-duration remove-btm">Quantity 1</p>
                            </div>
                        </Col>
                    </Row>
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

export default OrderConfirm
