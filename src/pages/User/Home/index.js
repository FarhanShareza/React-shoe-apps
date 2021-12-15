import React from 'react'
import { Gap } from '../../../components'
import { MenuService, Product, Slide, SlideTimer } from '../../../components/molecules'

const Home = () => {
    return (
        <div>
            <div>
                <Slide/>
            </div>
            <div>
                <SlideTimer/>
            </div>
            <div>
                <div className="box-teks">
                    <p className="t-h6">Berdasarkan Kategori</p>
                </div>
                <MenuService/>
            </div>
            <div>
                <div className="box-teks">
                    <p className="t-h6">Pilihan Buat Kamu</p>
                </div>
                <Product/>
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default Home
