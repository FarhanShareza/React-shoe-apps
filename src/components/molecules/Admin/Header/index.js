import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">UPKEEP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/confirm-order">Confirm Order</Nav.Link>
                    <Nav.Link href="/pickup-order">Pickup</Nav.Link>
                    <Nav.Link href="/return-order">Return</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown title="Hi, Farhan Syahreza" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
