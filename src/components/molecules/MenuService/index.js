import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './menuService.scss'

const MenuService = () => {
    return (
        <div className='menu-service'>
            <Container>
                <Row>
                    <Col ms={6}>
                        <div className="box-service">
                            <img className="d-block w-100 img-service" src="https://i2.wp.com/scuto.co.id/wp-content/uploads/2021/03/Nano-Ceramic.png?w=1062&ssl=1 1062w, https://i2.wp.com/scuto.co.id/wp-content/uploads/2021/03/Nano-Ceramic.png?resize=300%2C173&ssl=1 300w, https://i2.wp.com/scuto.co.id/wp-content/uploads/2021/03/Nano-Ceramic.png?resize=1024%2C589&ssl=1 1024w, https://i2.wp.com/scuto.co.id/wp-content/uploads/2021/03/Nano-Ceramic.png?resize=768%2C442&ssl=1 768w, https://i2.wp.com/scuto.co.id/wp-content/uploads/2021/03/Nano-Ceramic.png?resize=600%2C345&ssl=1 600w" alt="First slide"/>
                        </div>
                    </Col>
                    <Col ms={6}>
                        <div className="box-service">
                            <img className="d-block w-100 img-service" src="https://i2.wp.com/scuto.co.id/wp-content/uploads/2021/03/Glass-Coating.png?fit=1062%2C611&ssl=1" alt="First slide"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="box-service">
                            <img className="d-block w-100 img-service" src="https://i0.wp.com/scuto.co.id/wp-content/uploads/2021/11/Black-Series-Black.png?w=1062&ssl=1 1062w, https://i0.wp.com/scuto.co.id/wp-content/uploads/2021/11/Black-Series-Black.png?resize=300%2C173&ssl=1 300w, https://i0.wp.com/scuto.co.id/wp-content/uploads/2021/11/Black-Series-Black.png?resize=1024%2C589&ssl=1 1024w, https://i0.wp.com/scuto.co.id/wp-content/uploads/2021/11/Black-Series-Black.png?resize=768%2C442&ssl=1 768w, https://i0.wp.com/scuto.co.id/wp-content/uploads/2021/11/Black-Series-Black.png?resize=600%2C345&ssl=1 600w" alt="First slide"/>
                        </div>
                    </Col>
                    <Col>
                        <div className="box-service">
                            <img className="d-block w-100 img-service" src="https://i0.wp.com/scuto.co.id/wp-content/uploads/2021/03/Auto-Detailing.png?fit=1062%2C611&ssl=1" alt="First slide"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MenuService
