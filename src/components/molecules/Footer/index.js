import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss'
import { Gap } from '../..';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col>
                            <div className="box-logo">
                                <div className="t-logo">UPKEEP</div>
                                <Gap height={20}/>
                                <div className="t-sub-logo">A trusted sanctuary for your beloved sneakers and garments. Drop them off at designated drop points and let us do the work. Our professional cleaners would ensure your products are immaculate. Track the cleaning progress online and request for pick up when they are done.</div>
                            </div>
                        </Col>
                        <Col>
                            <div className="box-support">
                                <div className="t-support">SUPPORT</div>
                                <Gap height={10}/>
                                <div className="t-sub-support">
                                    <p>About Us</p>
                                    <p>Terms and Conditions</p>
                                    <p>Privacy Policy</p>
                                    <p>FAQ</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="box-sosial-media">
                                <div className="t-sosial-media">FOLLOW US</div>
                                <div>Upkeep</div>
                                <div>Jl. Kenanga Raya</div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Gap height={30}/>
                            <div className="box-copyright">
                                <Gap height={15}/>
                                <div className="t-copyright">© 2021 Upkeep, Inc. All Rights Reserved</div>
                                <div className="t-copyright">Desaign By Farhan</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer
