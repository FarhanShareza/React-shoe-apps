import React, { useContext } from 'react'
import { Gap } from '../../../components'
import { Container, Row, Col } from 'react-bootstrap' 
import { AiOutlineInbox } from 'react-icons/ai'
import './dashbord.scss'
import { AuthContext } from '../../../config/Routes'

const Dashbord = () => {
    const {state} = useContext(AuthContext)
    
    return (
        <div>
            <Gap height={70}/>
            <div className="t-box-admin">
                <p>Dashbord Hai, Farhan Syahreza</p>
            </div>
            <Container>
                <Row>
                    <Col xs={6} sm={4} md={4}>
                        <div className="box-admin border-left">
                            <div class="box-position-left">
                                <div class="t-bold-12">CONFIRM ORDER</div>
                                <p class="h5">10</p>
                            </div>
                            <div class="box-position-right icon-dashbord">
                                <AiOutlineInbox/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} md={4}>
                        <div className="box-admin border-left">
                            <div class="box-position-left">
                                <div class="t-bold-12">PICK UP</div>
                                <p class="h5">8</p>
                            </div>
                            <div class="box-position-right icon-dashbord">
                                <AiOutlineInbox/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} md={4}>
                        <div className="box-admin border-left">
                            <div class="box-position-left">
                                <div class="t-bold-12">ON OUTLET</div>
                                <p class="h5">3</p>
                            </div>
                            <div class="box-position-right icon-dashbord">
                                <AiOutlineInbox/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} md={4}>
                        <div className="box-admin border-left">
                            <div class="box-position-left">
                                <div class="t-bold-12">CLEANING</div>
                                <p class="h5">2</p>
                            </div>
                            <div class="box-position-right icon-dashbord">
                                <AiOutlineInbox/>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6} sm={4} md={4}>
                        <div className="box-admin border-left">
                            <div class="box-position-left">
                                <div class="t-bold-12">RETURN</div>
                                <p class="h5">5</p>
                            </div>
                            <div class="box-position-right icon-dashbord">
                                <AiOutlineInbox/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Gap height={225}/>
        </div>
    )
}

export default Dashbord
