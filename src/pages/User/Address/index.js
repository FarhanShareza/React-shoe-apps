import React, { useContext, useEffect, useState } from 'react'
import { Button, Gap } from '../../../components'
import { Row, Col} from 'react-bootstrap'
import './address.scss'
import axios from 'axios'
import { AuthContext } from '../../../config/Routes'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const api = 'http://localhost:5000'

const Address = () => {
    const [address, setAddress] = useState([])
    const {state} = useContext(AuthContext)
    const userToken = localStorage.getItem("token")
    const getToken = JSON.parse(userToken);

    const fetchData = () => {
        var config = {
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : 'Bearer '+ getToken
            }
        }
        axios.get(api + '/address/all-info-address', config)
        .then(res => {
            setAddress(res.data.data)
            //console.log(res.data.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    }, [])

    if(address.length){
        return (
            <div>
                <Gap height={25}/>
                <div className="box-teks border-bottom">
                    <p className="t-h6">Daftar Alamat<span className="t-add-address">Tambah Alamat</span></p>
                </div>
                {address.map(address =>
                    <div className="box-address">
                        <p className="t-size-12 t-bold remove-btm">{address.titleAddress} <span className="t-utama">Utama</span></p>
                        <p className="t-bold ">{address.recipientsName}</p>
                        <p className="t-size-12 remove-btm">{address.phone}</p>
                        <p className="t-size-12 remove-btm">{address.address}</p>
                        <div className="box-btn-address">
                            <Row>
                                <Col xs={6} sm={8} md={8}>
                                    <Button className="btn-address" title="Ubah Alamat"/>            
                                </Col>
                                <Col xs={3} sm={2} md={2}>    
                                    <Button className="btn-address" title="Utama"/>
                                </Col>
                                <Col xs={3} sm={2} md={2}>
                                    <Button className="btn-address" title="Hapus"/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                )}
                <Gap height={25}/>
            </div>
        )
    }
    return (
        <div className="transaction-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Daftar Alamat<span className="t-add-address">Tambah Alamat</span></p>
            </div>
            <Gap height={50}/>
            <div className="inf-logo">
                <IoIosInformationCircleOutline/>
                <h6>Alamat tidak ada</h6>
            </div>
            <Gap height={50}/>
        </div>
    )
}

export default Address
