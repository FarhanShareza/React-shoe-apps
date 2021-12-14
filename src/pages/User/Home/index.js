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
                <MenuService/>
            </div>
            <div>
                <Product/>
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default Home
