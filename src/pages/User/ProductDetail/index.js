import React, { useEffect, useState } from 'react'
import { Gap } from '../../../components'
import { Row, Col} from 'react-bootstrap'
import './productDetail.scss'
import { IoLocationOutline } from 'react-icons/io5'
import { withRouter } from 'react-router-dom'
import Axios from 'axios'

const ProductDetail = (props) => {
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
                <Gap height={25}/>
                <Row>
                    <Col xs={12} sm={4} md={4}>
                        <div className="box-img-product">
                            <img className="img-detail-product" src={`http://localhost:5000/${data[0].image}`} alt="product"/>           
                        </div>
                    </Col>
                    <Col xs={12} sm={8} md={8}>
                        <div className="box-transaction-product">
                            <p className="t-detail-product">{data[0].nameProduct}</p>
                            <p className="t-price-detail-product">Rp {data[0].price}</p>
                            <div className="border-text">
                                <p className="remove-btm t-detail">Detail</p>
                            </div>
                            <div>
                                <p className="remove-btm t-sub-detail-product">Durasi Pengerjaan : <span>{data[0].duration} Hari</span></p>
                                <p className="t-sub-detail-product">Kategori : <span>Service</span></p>
                                <p className="t-sub-detail-product">Deskripsi :</p>
                                <p className="t-sub-detail-product">{data[0].description}</p>
                            </div>
                            <div className="border-bottom">
                                <p className="t-detail t-bold">Pengiriman</p>
                            </div>
                            <div className="box-shipment-detail">
                                <p className="t-sub-detail-product"><span><IoLocationOutline/> </span>Khusus Kota Medan</p>
                                <p className="remove-btm t-sub-detail-product">Jenis pengiriman :</p>
                                <p className="remove-btm t-sub-detail-product">Internal Outlet Shipment</p>
                                <p className="remove-btm t-sub-detail-product">Shipment to Outlet</p>
                            </div>
                            <div className="border-bottom">
                                <p className="t-detail t-bold">Promo</p>
                            </div>
                            <div className="box-shipment-detail">
                                <p className="t-sub-detail-product">Code Voucher</p>
                                <p className="t-bold box-code">UPKEEPIN</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Gap height={25}/>
            </div>
        )
    }
    return (
        <div>
            <Gap height={125}/>
            <p>Loading data...</p>
        </div>
    )
    
}
export default withRouter(ProductDetail)
