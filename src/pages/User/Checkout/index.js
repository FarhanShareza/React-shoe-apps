import React from 'react'
import { Button, Gap } from '../../../components'
import { Row, Col} from 'react-bootstrap'
import './checkout.scss'

const Checkout = () => {
    return (
        <div>
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Checkout</p>
            </div>
            <div className="box-checkout">
                <div className="address-border-bottom">
                    <p className="remove-btm t-address-master">Alamat Pengiriman<span className="t-link-address">Pilih Alamat Lain</span></p>
                </div>
                <p className="remove-btm t-address-main">Rumah<span className="t-address-active">utama</span></p>
                <p className="remove-btm t-address-name">Farhan Syahreza putra <span>(6282191776065)</span></p>
                <p className="remove-btm t-address-address">Jl. Kenanga raya Gg. Dahlia No. 20, Kota Medan, Medan Selayang, 20132</p>
            </div>
            <div className="cart-product">
                <div className="t-label">
                    <p className="remove-btm t-label-upkeep">UPKEEP SERVICE <span className="t-label-city">- Kota Medan</span></p>
                </div>
                <Row>
                    <Col xs={4} sm={3} md={2}>
                        <div className="box-product-left">
                            <img className="img-product-left" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt="product"/>
                        </div>
                    </Col>
                    <Col xs={8} sm={9} md={10}>
                        <div className="box-prduct-right">
                            <p className="t-product-right remove-btm">Deep Cleaning Shoes For Man</p>
                            <p className="t-duration remove-btm">Durasi <span className="t-sub-duration">3 Hari</span></p>
                            <p className="t-duration remove-btm">Quantity 1</p>
                            <p className="t-price-checkout">Rp 35000</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={4} sm={3} md={2}>
                        <div className="box-product-left">
                            <img className="img-product-left" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt="product"/>
                        </div>
                    </Col>
                    <Col xs={8} sm={9} md={10}>
                        <div className="box-prduct-right">
                            <p className="t-product-right remove-btm">Deep Cleaning Shoes For Man</p>
                            <p className="t-duration remove-btm">Durasi <span className="t-sub-duration">3 Hari</span></p>
                            <p className="t-duration remove-btm">Quantity 1</p>
                            <p className="t-price-checkout">Rp 35000</p>
                        </div>
                    </Col>
                </Row>
                <div className="main-box-shipment">
                    <div className="box-shipment">
                        <Button className="btn-shipment" title="Pilih Pengiriman >"/>
                    </div>
                    <div className="shipment-selection">
                        <p className="remove-btm t-address-main">Internal Outlet Shipment<span className="t-address-active">Active</span></p>
                        <p className="remove-btm t-address-address">Driver akan menjemput barang kamu dan mengembalikannya</p>
                        <p className="remove-btm t-address-name">Harga Ongkir <span>Rp 10000</span></p>
                    </div>
                </div>
                <div className="t-subtotal">
                    <p className="remove-btm t-sub-subtotal">Subtotal<span className="t-subtotal-price">Rp 98000</span></p>
                </div>
            </div>
            <div className="box-checkout">
                <div className="box-payment">
                    <Button className="btn-shipment" title="Makin Hemat Pakai Promo >"/>
                </div>
                <div className="voucher-selection">
                    <p className="remove-btm t-address-main">GET5CUMA15<span className="t-address-active">Active</span></p>
                    <p className="remove-btm t-address-name">Potensi Diskon <span>Rp 160000</span></p>
                </div>
            </div>
            <div className="box-description">
                <div className="t-description">
                    <p className="t-main-description">Ringkasan Belanja</p>
                    <p className="remove-btm t-sub-description">Total Harga (21 Barang)<span className="t-description-price">Rp 98000</span></p>
                    <p className="remove-btm t-sub-description">Total Ongkos Kirim<span className="t-description-price">Rp 0</span></p>
                    <p className="remove-btm t-sub-description">Kode Voucher<span className="t-description-price">Rp 60000</span></p>
                </div>
                <div className="box-payment">
                    <Button className="btn-payment" title="Pilih Pembayaran >"/>
                </div>
                <div className="voucher-selection">
                    <p className="remove-btm t-address-main">Pembayaran<span className="t-address-active">Active</span></p>
                    <p className="remove-btm t-address-name">COD <span>(Cash on Delivery)</span></p>
                </div>
                <div className="box-confirm">
                    <Row>
                        <Col xs={6} sm={8} md={8}>
                            <div className="t-billing">
                                <p className="remove-btm t-sub-billing">Total Tagihan</p>
                                <p className="remove-btm t-price-billing">Rp 156000</p>
                            </div>
                        </Col>
                        <Col xs={6} sm={4} md={4}>
                            <div className="box-btn-confirm">
                                <Button title="Confirm Order"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default Checkout
