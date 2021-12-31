import React from 'react'
import './slideTimer.scss'
import { Banner2 } from '../../../assets';
import { Row, Col } from 'react-bootstrap'

const SlideTimer = () => {
    return (
        <div>
            <div className="box-slide-h">
                <Row>
                    <Col xs={3} sm={3} md={3}>
                        <div className="box-slide-left">
                            <p className="t-sub-slide-left">KEJUTAN AWAL TAHUN</p>
                        </div>
                    </Col>
                    <Col xs={9} sm={9} md={9}>
                        <div className="box-slide-right">
                            <img className="img-slide-right" src={ Banner2 } alt="product"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SlideTimer
