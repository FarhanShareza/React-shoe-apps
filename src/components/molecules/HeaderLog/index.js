import React, { useState ,useContext } from 'react'
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './headerLog.scss'
import { AuthContext } from '../../../config/Routes';
import { NavLink, useHistory } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';
import { Gap } from '../..';
import { GoFile } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsFileEarmarkText } from 'react-icons/bs';
import { VscLock } from 'react-icons/vsc';
import { RiCustomerService2Line, RiUserHeartLine } from 'react-icons/ri';
import { IoInformationCircleOutline, IoLogOutOutline, IoCartOutline, IoNotificationsOutline} from 'react-icons/io5'
import { Profileuser } from '../../../assets';
import { IoIosLogIn, IoMdLogIn } from 'react-icons/io';

const HeaderLog = () => {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false)
    const tonggle = () => setIsOpen(!isOpen)
    const {state, dispatch} = useContext(AuthContext)
    const userInfo = localStorage.getItem("user")

    if(!userInfo){
        return(
            <div className="index-header">
                <Navbar>
                    <Container>
                    <Navbar.Brand href="/"><img className="logo-upkeep" src="https://upkeepshoes.com/wp-content/uploads/2021/02/cropped-upkeep_clean_black.png"/></Navbar.Brand>  
                    <Nav className="me-auto">
                        <div className="icon-navbar"><FaCartPlus/><span><NavLink to="/user/cart" className="text-navbar"> Cart</NavLink></span></div>
                        <div className="icon-navbar"><IoMdLogIn/><span><NavLink to="/login" className="text-navbar">Sign In</NavLink></span></div>
                    </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
    return (
        <div className="index-header">
            <Navbar variant="light" expand={false}>
                <Container>
                    <Navbar.Brand href="/"><img className="logo-upkeep" src="https://upkeepshoes.com/wp-content/uploads/2021/02/cropped-upkeep_clean_black.png"/></Navbar.Brand>  
                    <Nav className="me-auto">
                        <div className="icon-navbar"><FaCartPlus/><span><NavLink to="/user/cart" className="text-navbar">Cart</NavLink></span></div>
                    </Nav>
                    <Navbar.Toggle aria-controls="offcanvasNavbar"/>
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
                                    <div className="t-left"><GoFile/><span><NavLink to="/user/transaction" className="t-right"> Daftar Transaksi</NavLink></span></div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><RiUserHeartLine/><span><NavLink to="/user/account" className="t-right"> Akun Saya</NavLink></span></div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><IoLogOutOutline/><span><NavLink to="/" className="t-right" onClick={()=> dispatch({type:"LOGOUT"})}>{state.isAuthenticated} Keluar</NavLink></span></div>
                                </div>
                            </div>
                            <Gap height={20}/>
                            <div className="box-information">
                                <div className="t-activities">Informasi</div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><IoInformationCircleOutline/><span><NavLink to="/" className="t-right"> Tentang kami</NavLink></span></div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><BsFileEarmarkText/><span><NavLink to="/" className="t-right"> Syarat dan Ketentuan</NavLink></span></div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><VscLock/><span><NavLink to="/" className="t-right"> Keamanan Privasi</NavLink></span></div>
                                </div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><AiOutlineQuestionCircle/><span><NavLink to="/" className="t-right"> FAQ</NavLink></span></div>
                                </div>
                            </div>
                            <Gap height={20}/>
                            <div className="box-bantuan">
                                <div className="t-activities">Pusat bantuan</div>
                                <div className="t-sub-activities">
                                    <div className="t-left"><RiCustomerService2Line/><span><NavLink to="/" className="t-right"> Upkeep Care</NavLink></span></div>
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

export default HeaderLog
