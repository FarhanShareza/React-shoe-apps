import React, { useContext, useEffect, useState } from 'react'
import { Button, Gap} from '../../../components'
import { Row, Col} from 'react-bootstrap'
import './transaction.scss'
import { AuthContext } from '../../../config/Routes'
import axios from 'axios'
import { IoIosInformationCircleOutline } from 'react-icons/io'

const api = 'http://localhost:5000'

const Transaction = () => {
    const [transaction, setTransaction] = useState([])
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
        axios.get(api + '/info-order/all-info-order', config)
        .then(res => {
            setTransaction(res.data.data)
            console.log(res.data.data)
        })
        .catch(e => {
            console.log(e)
        })
    }

    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    }, [])
    if(transaction.length){
        return (
            <div className="transaction-main">
                <Gap height={25}/>
                <div className="box-teks border-bottom">
                    <p className="t-h6">Daftar Transaksi</p>
                </div>
                {transaction.map(transaction =>
                <div className="box-transaction">
                    <div className="address-border-bottom">
                        <p className="remove-btm t-transaction-main">Service<span className="t-status-transaction">Tiba di Tujuan</span></p>
                        <p className="t-date-transaction">3 Desember 2021</p>
                    </div>
                    <div className="box-transaction-d address-border-bottom">
                        <Row>
                            <Col xs={2} sm={1} md={1}>
                                <div className="box-product-left rmv-padding">
                                    <img className="img-product-left" src="https://images.tokopedia.net/img/cache/500-square/product-1/2020/8/10/19826517/19826517_45c76ba2-84ee-4d3a-bcbe-fa401439151d_1280_1280.webp?ect=4g" alt="product"/>
                                </div>
                            </Col>
                            <Col xs={10} sm={11} md={11}>
                                <div className="box-prduct-right">
                                    <p className="t-product-right remove-btm">Deep Cleaning Shoes For Man</p>
                                    <p className="t-duration remove-btm">Quantity 1</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="box-transaction-btm">
                        <Row>
                            <Col xs={6} sm={8} md={8}>
                                <div className="t-billing">
                                    <p className="remove-btm t-sub-transaction-main">Total Belanja</p>
                                    <p className="remove-btm t-sub-price-transaction">Rp 156000</p>
                                </div>
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <div className="box-btn-detail">
                                    <Button title="Lihat Detail"/>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                )}
            </div>
        )  
    }
    return (
        <div className="transaction-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Daftar Transaksi</p>
            </div>
            <Gap height={50}/>
            <div className="inf-logo">
                <IoIosInformationCircleOutline/>
                <h6>Transaksi tidak ada</h6>
            </div>
            <Gap height={50}/>
        </div>
    )
}

export default Transaction
