import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Offcanvas, FormControl, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.scss'
import { Gap } from '../..';
import { GoFile } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { VscLock } from 'react-icons/vsc';
import { RiCustomerService2Line } from 'react-icons/ri';
import { IoInformationCircleOutline, IoLogOutOutline, IoCartOutline, IoNotificationsOutline} from 'react-icons/io5'
import { Profileuser } from '../../../assets';


const Header = () => {
    return (
        <div className="index-header">
            <Navbar bg="black" variant="dark" expand={false}>
                <Container>
                    <Navbar.Brand href="#">UPKEEP</Navbar.Brand>
                    <Nav className="me-auto nav-navbar">
                        <div className="icon-nav-navbar"><IoCartOutline/></div>
                        <div className="icon-nav-navbar"><IoNotificationsOutline/></div>
                    </Nav>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">
                            <div className="side-logo">UPKEEP</div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <div className="box-profile">
                                <div className="box-profile-left">
                                    <img className="profile-user" src={ Profileuser } alt="profile" />                           
                                </div>
                                <div className="box-profile-right">
                                    <div className="t-profile-name">Farhan Syahreza Putra</div>
                                    <div className="t-profile-member">Silver Member</div>
                                </div>
                            </div>
                            <Gap height={30}/>
                            <div className="box-activities">
                                <div className="t-activities">Aktifitas saya</div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><GoFile/></div>
                                    <div className="t-right">Daftar Transaksi</div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><CgProfile/></div>
                                    <div className="t-right">Akun Saya</div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><IoLogOutOutline/></div>
                                    <div className="t-right">Keluar</div>
                                </div>
                            </div>
                            <Gap height={20}/>
                            <div className="box-information">
                                <div className="t-activities">Informasi</div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><IoInformationCircleOutline/></div>
                                    <div className="t-right">Tentang kami</div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><BsFileEarmarkText/></div>
                                    <div className="t-right">Syarat dan Ketentuan</div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><VscLock/></div>
                                    <div className="t-right">Keamanan Privasi</div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><AiOutlineQuestionCircle/></div>
                                    <div className="t-right">FAQ</div>
                                </div>
                            </div>
                            <Gap height={20}/>
                            <div className="box-bantuan">
                                <div className="t-activities">Pusat bantuan</div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><RiCustomerService2Line/></div>
                                    <div className="t-right">Upkeep Care</div>
                                </div>
                            </div>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
