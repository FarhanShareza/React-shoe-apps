import React from 'react'
import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon1, Icon5, Icon3, Icon4 } from '../../../assets';
import './menuService.scss'

const MenuService = () => {
    return (
        <div className="menu-service">
            <div className="sub-menu-service">
                <Row>
                    <Col ms={6}>
                        <div className="box-service">
                            <img className="img-box-service" src={Icon5} alt=""/>
                            <p className="t-box-service">MEN'S SHOES</p>
                        </div>
                    </Col>
                    <Col ms={6}>
                        <div className="box-service">
                            <img className="img-box-service" src={Icon1} alt=""/>   
                            <p className="t-box-service">LADIES SHOES</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box-service">
                            <img className="img-box-service" src={Icon4} alt=""/>
                            <p className="t-box-service">REPAINT</p>
                        </div>
                    </Col>
                    <Col>
                        <div className="box-service">
                            <img className="img-box-service" src={Icon3} alt=""/>
                            <p className="t-box-service">RE-GLUE</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MenuService
