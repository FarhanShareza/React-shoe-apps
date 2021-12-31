import React from 'react'
import './product.scss'
import { Row, Col } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'

const Product = (props) => {
    const history = useHistory();
    const {image, nameProduct, duration, price, productId} = props;
    return (
        <Col xs={6} sm={3} md={3}>
            <div className="box-product" onClick={() => history.push(`/user/detail-product/${productId}`)}>
                <div className="img-box-product">
                    <img className="img-product" src={image} alt="product"/>
                </div>
                <div className="text-box-product">
                    <p className="t-name-product">{nameProduct}</p>
                    <p className="t-duration">Durasi <span className="t-sub-duration">{duration} Hari</span></p>
                    <p className="t-price">Rp {price}</p>
                </div>
            </div>
        </Col>
    )
}

export default Product
