import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './menuService.scss'

const MenuService = () => {
    return (
        <div className="menu-service">
            <div className="sub-menu-service">
                <Row>
                    <Col ms={6}>
                        <div className="box-service">
                            <img className="img-box-service" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt=""/>
                            <p className="t-box-service">MEN'S SHOES</p>
                        </div>
                    </Col>
                    <Col ms={6}>
                        <div className="box-service">
                            <img className="img-box-service" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt=""/>   
                            <p className="t-box-service">LADIES SHOES</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box-service">
                            <img className="img-box-service" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt=""/>
                            <p className="t-box-service">REPAINT</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="box-service">
                            <img className="img-box-service" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt=""/>
                            <p className="t-box-service">RE-GLUE</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MenuService
