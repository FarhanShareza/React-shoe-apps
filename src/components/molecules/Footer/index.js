import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Gap } from '../..';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.scss'
import { NavLink } from 'react-router-dom';
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm={4}>
                            <div className="box-logo">
                                <div className="t-logo">
                                    <img className="logo-upkeep-footer" src="https://upkeepshoes.com/wp-content/uploads/2021/02/cropped-upkeep_clean_black.png"/>
                                </div>
                                <p className="t-sub-logo">A trusted sanctuary for your beloved sneakers and garments. Drop them off at designated drop points and let us do the work. Our professional cleaners would ensure your products are immaculate. Track the cleaning progress online and request for pick up when they are done.</p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="box-support">
                                <div className="t-support">Support</div>
                                <ul className="t-sub-support t-link-support" type="none">
                                    <li><NavLink to="/login" className="t-link-support">About us</NavLink></li>
                                    <li><NavLink to="/login" className="t-link-support">Terms and Conditions</NavLink></li>
                                    <li><NavLink to="/login" className="t-link-support">Privacy Policy</NavLink></li>
                                    <li><NavLink to="/login" className="t-link-support">FAQ</NavLink></li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="box-sosial-media">
                                <div className="t-sosial-media">Our Outlets</div>
                                <div className="box-icon">
                                    <p className="t-sub-sosial-media">Jl. Petunia Raya, Perumahan Grand Vista No.12 A, Medan, Sumatera Utara 20136</p>
                                    <p className="t-sub-sosial-media">Jl. Abdul Hakim, Medan, Sumatera Utara 20154</p>
                                    <p className="t-sub-sosial-media remove-btm">Call Center</p>
                                    <p className="t-sub-sosial-media">0811-1011-605</p>
                                    
                                    <span><NavLink to="/login" className="sub-icon-ms"><FaFacebookSquare /></NavLink></span>
                                    <span><NavLink to="/login" className="sub-icon-ms"><FaInstagramSquare /></NavLink></span>
                                    <span><NavLink to="/login" className="sub-icon-ms"><FaWhatsappSquare /></NavLink></span>
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
                                    <div>Farhan Syahreza</div>
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
