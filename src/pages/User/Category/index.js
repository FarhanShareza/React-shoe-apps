import React from 'react'
import { Gap } from '../../../components'
import { MenuService, Product } from '../../../components/molecules'
import './category.scss'

const Category = () => {
    return (
        <div class="box-categoty-main">
            <Gap height={25}/>
            <div className="box-teks border-bottom">
                <p className="t-h6">Category for you</p> 
            </div>
            <div className="box-category-product">
                <MenuService />
            </div>
            <div className="box-teks border-bottom">
                <p className="t-h6">For Men's</p> 
            </div>
            <div className="box-category-product">
                <Product />
            </div>
            <Gap height={25}/>
        </div>
    )
}

export default Category
