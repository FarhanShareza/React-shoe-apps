import React from 'react'
import { Button, Gap, InputColloum } from '../../../components'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Container, Row, Col} from 'react-bootstrap'
import './cart.scss'

const Cart = () => {
    return (
        <div>
        <Container>
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Keranjang<span className="t-delete"><RiDeleteBin6Line className="cart-icon-delete"/>Hapus Semua</span></p>
            </div>
            <div className="cart-product">
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
                            <p className="t-price">Rp 35000</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <div className="box-prduct-action">
                            <div className="right-action">
                                <InputColloum label="Jumlah" type="number"/>
                            </div>
                            <div className="left-action">
                                <span><RiDeleteBin6Line className="left-action-icon"/>Hapus</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="cart-product">
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
                            <p className="t-price">Rp 35000</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <div className="box-prduct-action">
                            <div className="right-action">
                                <InputColloum label="Jumlah" type="number"/>
                            </div>
                            <div className="left-action">
                                <span><RiDeleteBin6Line className="left-action-icon"/>Hapus</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="cart-product">
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
                            <p className="t-price">Rp 35000</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12}>
                        <div className="box-prduct-action">
                            <div className="right-action">
                                <InputColloum label="Jumlah" type="number"/>
                            </div>
                            <div className="left-action">
                                <span><RiDeleteBin6Line className="left-action-icon"/>Hapus</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="cart-product">
                <Row>
                    <Col xs={7} sm={7} md={7}>
                        <div className="">
                            <p className="t-price-cart">Total Harga</p>
                            <p className="price-cart">Rp 35000</p>
                        </div>
                    </Col>
                    <Col xs={5} sm={5} md={5}>
                        <div className="btn-price-cart">
                            <Button title="Checkout" />
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
        </div>
    )
}

export default Cart
