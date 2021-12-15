import React from 'react'
import './slideTimer.scss'
import { RiTimer2Line } from 'react-icons/ri'
import { Row, Col } from 'react-bootstrap'

const SlideTimer = () => {
    return (
        <div>
            <div className="box-teks">
                <p className="t-h6">Traktiran Pengguna Baru</p>
                <p className="t-sub">Berakhir dalam <span className="timer"><RiTimer2Line className="icon-timer"/>03 : 12 : 00</span></p>
            </div>
            <div className="box-slide-h">
                <Row>
                    <Col xs={3} sm={3} md={3}>
                        <div className="box-slide-left">
                            <p className="t-sub-slide-left">KEJUTAN AKHIR TAHUN</p>
                        </div>
                    </Col>
                    <Col xs={9} sm={9} md={9}>
                        <div className="box-slide-right">
                            <img className="img-slide-right" src="https://images.tokopedia.net/img/cache/500/coCfvv/2021/12/9/8a7db136-d328-4cb8-b31b-83c5b441fb75.jpg" alt="product"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default SlideTimer
