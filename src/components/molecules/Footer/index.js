import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Gap } from '../..';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="box-logo">
                                <div className="t-logo">UPKEEP</div>
                                <Gap height={20}/>
                                <p className="t-sub-logo">A trusted sanctuary for your beloved sneakers and garments. Drop them off at designated drop points and let us do the work. Our professional cleaners would ensure your products are immaculate. Track the cleaning progress online and request for pick up when they are done.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="box-support">
                                <div className="t-support">SUPPORT</div>
                                <Gap height={10}/>
                                <div className="t-sub-support">
                                    <div>About us</div>
                                    <div>Terms and Conditions</div>
                                    <div>Privacy Policy</div>
                                    <div>FAQ</div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="box-sosial-media">
                                <div className="t-sosial-media">FOLLOW US</div>
                                <div className="box-icon">
                                    <span className="sub-icon-ms"><AiOutlineInstagram /></span>
                                    <span className="sub-icon-ms"><AiOutlineFacebook /></span>
                                    <span className="sub-icon-ms"><AiOutlineWhatsApp /></span>
                                    <Gap height={30}/>
                                    <div>
                                        <div className="t-sub-sosial-media">Upkeep Outlet</div>
                                        <div className="t-sub-sosial-media">Jl. Setiabudi No. 1 Medan</div>
                                        <div className="t-sub-sosial-media">Jl. Pancing No. 1 Medan</div>
                                        <Gap height={10}/>
                                        <div className="t-sub-sosial-media">Call Center</div>
                                        <div className="t-sub-sosial-media">0811-1011-605</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Gap height={30}/>
                            <div className="box-copyright">
                                <Gap height={15}/>
                                <div className="t-copyright">
                                    <div>© 2021 Upkeep, Inc. All Rights Reserved</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
