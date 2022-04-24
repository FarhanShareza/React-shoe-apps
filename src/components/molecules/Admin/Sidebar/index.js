import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { AiOutlineLeftCircle} from 'react-icons/ai'
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import './header.scss'

const NavIcon = styled(Link)`
  margin-left: 1rem;
  font-size: 1.6rem;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
  }
`;

const SidebarNav = styled.nav`
  background: #212529;
  width: 225px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 11;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const history = useHistory()
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
  <IconContext.Provider value={{ color: '#fff' }}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand onClick={showSidebar}>UPKEEP</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Hi. Farhan Syahreza" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.3">Change Password</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    <SidebarNav sidebar={sidebar}>
      <SidebarWrap>
        <NavIcon>
          <Navbar.Brand>UPKEEP</Navbar.Brand>
          <AiOutlineLeftCircle className="icon-right" onClick={showSidebar} />
        </NavIcon>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </SidebarNav>
  </IconContext.Provider>
  );
};

export default Sidebar;
