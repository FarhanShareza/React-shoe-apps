import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Gap } from '../../../components'
import { Row } from 'react-bootstrap'
import { RiTimer2Line } from 'react-icons/ri'
import { MenuService, Product, Slide, SlideTimer } from '../../../components/molecules'
import './home.scss'

const Home = () => {
    const [dataProduct, setDataProduct] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:5000/admin/all-info-product')
        .then(result => {
            console.log('Data API : ', result)
            const resAPI = result.data;

            setDataProduct(resAPI.data)
        })
        .catch(err => {
            console.log('error: ', err)
        })
    }, [])
    return (
        <div>
            <div>
                <Slide/>
            </div>
            <div>
                <div className="box-teks">
                    <p className="t-h6-main remove-btm">Berdasarkan Kategori</p>
                    <p className="t-sub">Dimulai <span className="timer"><RiTimer2Line className="icon-timer"/>5 Januari 2021</span></p>
                </div>
                <SlideTimer/>
            </div>
            <div>
                <div className="box-teks">
                    <p className="t-h6-main">Berdasarkan Kategori</p>
                </div>
                <MenuService/>
            </div>
            <div>
                <div className="box-teks">
                    <p className="t-h6-main">Pilihan Buat Kamu</p>
                </div>
                <Row>
                    {dataProduct.map(product => {
                        return <Product 
                        key={product.productId}
                        image={`http://localhost:5000/${product.image}`} 
                        nameProduct={product.nameProduct}
                        duration={product.duration}
                        price={product.price}
                        productId={product.productId}
                        />
                    })}  
                </Row>
            </div> 
            <Gap height={25}/>
        </div>
    )
}

export default Home
