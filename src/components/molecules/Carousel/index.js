import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Banner1, Banner2, Banner3 } from '../../../assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carousel.scss'

const Slide = () => {
    return (
        <div className="slideShow">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100 img-slideShow" src={ Banner3 } alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-slideShow" src={ Banner2 } alt="Second slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slide
