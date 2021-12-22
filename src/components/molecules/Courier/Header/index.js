import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/courier">UPKEEP</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="/courier/confirm-order">Confirm Order</Nav.Link>
                    <Nav.Link href="/courier/pickup-order">Pickup Order</Nav.Link>
                    <Nav.Link href="/courier/return-order">Return</Nav.Link>
                    </Nav>
                    <Nav>
                    <NavDropdown title="Hi, Farhan Syahreza" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/courier/logout">Log Out</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default Header
