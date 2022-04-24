import React, { useEffect, useState } from 'react'
import { Gap, Loading } from '../../../components'
import { Row, Col, Button, Modal, Form, InputGroup, FormControl} from 'react-bootstrap'
import './productDetail.scss'
import { IoLocationOutline, IoTimeOutline} from 'react-icons/io5'
import { BsCashCoin } from 'react-icons/bs'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

const ProductDetail = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [jumlah, setJumlah] = useState("")
    const [pengiriman, setPengiriman] = useState("")
    const [nama, setNama] = useState("")
    const [phone, setPhone] = useState("")
    const [alamat, setAlamat] = useState("")
    const [kota, setKota] = useState("")
    const [kecamatan, setKecamatan] = useState("")
    const [kodepos, setKodepos] = useState("")
    const [datapopup, setDatapopup] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        const datapopup = 
            {
                jumlah: jumlah,
                pengiriman: pengiriman,
                nama: nama,
                phone: phone,
                alamat: alamat,
                kota: "Medan",
                kecamatan: kecamatan,
                kodepos: kodepos
            }
        setDatapopup(datapopup)
    }

    const [data, setData] = useState({});
    useEffect(() => {
        const product = props.match.params.productId;
        Axios.get(`http://localhost:5000/admin/info-product/${product}`)
        .then(res => {
            console.log('Success: ', res)
            setData(res.data.data)
            console.log(res.data.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [props])
    if(data.length){
        return (
            <div className="box-transaction-detail-main">
                <Row>
                    <Col xs={12} sm={4} md={4}>
                        <div className="box-img-product">
                            <img className="img-detail-product" src={`http://localhost:5000/${data[0].image}`} alt="product"/>           
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <div className="box-detail-pdt">  
                            <div className="box-sub-pdt">
                                <p className="t-detail-pdt remove-btm"><span className="t-detail-pdt-sub">{data[0].nameProduct}</span></p>
                                <p className="t-detail-pdt remove-btm">Rp {data[0].price}</p>
                            </div>  
                            <div className="box-sub-service">
                                <p className=""><BsCashCoin/> <span className="t-size-12"> Bayar di tempat tersedia</span></p>
                                <p className="remove-btm"><IoTimeOutline/> <span className="t-size-12"> Pasti Tepat waktu</span></p>
                            </div>
                            <div className="box-sub-pdt">
                                <p className="t-main-detail">Pengiriman</p>
                                <p className=""><span><IoLocationOutline/> </span>Khusus Kota Medan</p>
                                <p className="remove-btm t-bold-500 t-size-13">Internal Outlet Shipment</p>
                                <p className="t-size-13">Kurir akan menjemput barang kamu dan mengantarnya kembali</p>
                                <p className="remove-btm t-bold-500 t-size-13">Shipment to Outlet</p>
                                <p className="t-size-13">Kurir akan menjemput barang kamu dan kamu dapat mengambilnya di outlet</p>
                            </div>
                            <div className="box-sub-pdt m-top">
                                <p className="t-main-detail">Detail Produk</p>
                                <p className="remove-btm t-size-13">Durasi Pengerjaan : <span>{data[0].duration} Hari</span></p>
                                <p className="t-size-13">Kategori : <span>Service</span></p>
                                <p className="t-size-13 t-bold-500 remove-btm">Deskripsi :</p>
                                <p className="t-size-13">{data[0].description}</p>
                            </div>
                            <div className="box-sub-pdt m-top">
                                <Button variant="primary" onClick={handleShow}>Pesan Kilat</Button>
                                <Modal show={show} onHide={handleClose}size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Pesan Kilat</Modal.Title>
                                    </Modal.Header>
                                    <Form onSubmit={submitHandler}>
                                        <Modal.Body>
                                            <Row>
                                                <Col xs={4} md={2} className="m-l-10">
                                                    <img className="img-detail-product" src={`http://localhost:5000/${data[0].image}`} alt="product"/>
                                                </Col>
                                                <Col className="m-l-10">
                                                    <div className="">
                                                        <p className="t-detail-pdt remove-btm">UPKEEP | <span className="t-detail-pdt-sub">{data[0].nameProduct}</span></p>
                                                        <p className="t-detail-pdt">Rp {data[0].price}</p>
                                                        <p className="remove-btm t-size-13">Durasi Pengerjaan : <span>{data[0].duration} Hari</span></p>
                                                        <p className="t-size-13">Kategori : <span>Service</span></p>
                                                    </div>  
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={3} className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <Form.Label>Jumlah</Form.Label>
                                                        <Form.Select value={jumlah} onChange={(e) => setJumlah(e.target.value)}>
                                                            <option>Pilih...</option>
                                                            <option>1</option>
                                                            <option>2</option>
                                                            <option>3</option>
                                                            <option>4</option>
                                                            <option>5</option>
                                                            <option>6</option>
                                                            <option>7</option>
                                                            <option>8</option>
                                                            <option>9</option>
                                                            <option>10</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Col xs={3} className="m-l-10">
                                                    <p className="price-center">x Rp {data[0].price}</p>
                                                </Col>
                                                <Form.Label>Jumlah</Form.Label>
                                                
                                            </Row>
                                            <Row>
                                                <Col className="m-l-10">
                                                    <Form.Label>Pengiriman</Form.Label>
                                                        <div className="t-shipment-popup">
                                                            <p className="remove-btm t-bold-500 t-size-13">Internal Outlet Shipment</p>
                                                            <p className="remove-btm t-bold-500 t-size-13">+ Rp 10.000</p>
                                                            <p className="t-size-13">Kurir akan menjemput barang kamu dan mengantarnya kembali</p>
                                                            <p className="remove-btm t-bold-500 t-size-13">Shipment to Outlet</p>
                                                            <p className="remove-btm t-bold-500 t-size-13">+ Rp 0</p>
                                                            <p className="t-size-13">Kurir akan menjemput barang kamu dan kamu dapat mengambilnya di outlet</p>
                                                        </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridState">
                                                        <Form.Select value={pengiriman} onChange={(e) => setPengiriman(e.target.value)}>
                                                            <option>Pilih...</option>
                                                            <option>Internal Outlet Shipment</option>
                                                            <option>Shipment to Outlet</option>
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>
                                                <Gap height={20}/>
                                            </Row>
                                            <Row>
                                                <Col className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Nama Lengkap</Form.Label>
                                                        <Form.Control type="text" value={nama} onChange={(e) => setNama(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="m-l-10">
                                                    <Form.Label>Phone</Form.Label>
                                                    <InputGroup>
                                                        <InputGroup.Text>+62</InputGroup.Text>
                                                        <FormControl type="number" maxLength="12" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                                                    </InputGroup>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Alamat</Form.Label>
                                                        <Form.Control value={alamat} onChange={(e) => setAlamat(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={4} className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Kota</Form.Label>
                                                        <Form.Control placeholder="Medan" value={kota} onChange={(e) => setKota(e.target.value)} disabled/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Kecamatan</Form.Label>
                                                        <Form.Control value={kecamatan} onChange={(e) => setKecamatan(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                                <Col className="m-l-10">
                                                    <Form.Group as={Col} controlId="formGridEmail">
                                                        <Form.Label>Kodepos</Form.Label>
                                                        <Form.Control type="number" value={kodepos} onChange={(e) => setKodepos(e.target.value)} required/>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </Modal.Body>
                                        <Modal.Footer>
                                    <Button variant="primary" type="submit">Cek Pesanan</Button>
                                    </Modal.Footer>
                                    </Form>
                                    <Modal.Footer>
                                        <Button variant="outline-secondary" onClick={handleClose}>Batalkan</Button>
                                        <Button variant="outline-success" type="submit" href={`https://api.whatsapp.com/send/?phone=%2B6288262373532&text=%2AHai%2A%2C+%2AUkeep+Care%2A.+Saya+mau+melakukan+treatment+sepatu+UPKEEP%0ABerikut+saya+lampirkan+pesanannya%0A%0A%2AInfo+Produk%2A%0AProduk+%3A+${data[0].nameProduct}%0ADurasi+Pengerjaan+%3A+${data[0].duration}+%20Hari%0AHarga+%3A+Rp+${data[0].price}+%0ABiaya+Pengiriman+%3A+Rp+${"-"}%0ASubtotal+%3A+${datapopup.jumlah}+x++Rp+${data[0].price}%0ATotal+%3A+Rp+${datapopup.jumlah*data[0].price}%0A%0A%2AInfo+Pemesanan%2A%0ANama+%3A+${datapopup.nama}%0APhone+%3A+${datapopup.phone}%0APengiriman+%3A+${datapopup.pengiriman}%0AAlamat+%3A+${datapopup.alamat}%2C%20${datapopup.kecamatan}%2C%20${datapopup.kota}%2C%20${datapopup.kodepos}%0A%0ATerimakasih&app_absent=0`}>Teruskan Pesanan</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div>
            <Gap height={150}/>
            <Loading/>
            <Gap height={150}/>
        </div>
    )
    
}
export default withRouter(ProductDetail)
