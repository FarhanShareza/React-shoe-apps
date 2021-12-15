import React from 'react'
import { Gap } from '../../../components'
import { Row, Col} from 'react-bootstrap'
import './transactionDetail.scss'

const TransactionDetail = () => {
    return (
        <div className="box-transaction-detail-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Detail Pesanan<span className="t-status-right">Tiba di Tujuan</span></p>
            </div>
            <div className="box-transaction-status">
                <p className="t-sub-transaction-main">INV/20211212/SRC/2000/0110</p>
                <p className=" t-sub-transaction-main">Tanggal Pemesanan<span className="t-sub-right">23-12-2021</span></p>
                <p className="remove-btm t-sub-transaction-main">Tanggal Selesai<span className="t-sub-right">26-12-2021</span></p>
            </div>
            <div className="box-transaction-product">
                <p className="remove-btm t-transaction-product border-bottom-grey">Detail Produk</p>
                <div className="border-bottom-grey">
                    <Row>
                        <Col xs={2} sm={1} md={1}>
                            <div className="box-product-left rmv-padding">
                                <img className="img-product-left" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt="product"/>
                            </div>
                        </Col>
                        <Col xs={10} sm={11} md={11}>
                            <div className="box-prduct-right">
                                <p className="t-product-right remove-btm">Deep Cleaning Shoes For Man</p>
                                <p className="t-duration remove-btm">1 x <span>Rp 56000</span></p>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="sub-box-detail-price">
                    <p className="remove-btm t-sub-transaction-main">Total Harga</p>
                    <p className="remove-btm t-price-transaction">Rp 165000</p>
                </div>
            </div>
            <div className="box-transaction-product">
                <p className="remove-btm t-transaction-product border-bottom-grey">Info Pengiriman</p>
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
                                <p className="remove-btm t-bold">Farhan Syahreza Putra</p>
                                <p className="remove-btm t-size-10">82191776065</p>
                                <p className="remove-btm t-size-10">Jl. Kenanga raya Gg. Dahlia No. 20, Kota Medan, Medan Selayang, 20132</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="box-transaction-status">
                <p className="remove-btm t-transaction-product">Rincian Pembayaran</p>
                <p className="remove-btm t-sub-transaction-main border-bottom-grey">Metode Pembayaran<span className="t-sub-right">Cash on Delivery</span></p>
                <div className="box-sub-detail-product">
                    <p className="remove-btm t-sub-transaction-main">Total Harga (3 Pesanan)<span className="t-sub-right">Rp 156000</span></p>
                    <p className="remove-btm t-sub-transaction-main">Total Ongkos Kirim<span className="t-sub-right">Rp 10000</span></p>
                    <p className="t-sub-transaction-main border-bottom-grey">Diskon Promo<span className="t-sub-right">-Rp 100000</span></p>
                </div>
                <p className="remove-btm t-transaction-total">Total Bayar<span className="t-sub-right">Rp 56000</span></p>
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default TransactionDetail
