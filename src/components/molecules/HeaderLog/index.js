import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './headerLog.scss'

const HeaderLog = () => {
    return (
        <div className="index-header">
            <Navbar bg="black" variant="dark" expand={false}>
                <Container>
                    <Navbar.Brand href="#">UPKEEP</Navbar.Brand>
                    <Nav className="me-auto nav-navbar">
                        <div className="text-log">Launching <span className="text-log-span">5 Jan 2021</span></div>
                    </Nav>      
                </Container>
            </Navbar>
        </div>
    )
}

export default HeaderLog
