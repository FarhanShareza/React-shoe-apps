import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

const Slide = () => {
    return (
        <div className="slideShow">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100 img-slideShow" src="https://images.tokopedia.net/img/cache/1190/wmEwCC/2021/12/8/ea615fa3-cafe-4127-b342-424818fc0e1a.jpg.webp?ect=4g" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-slideShow" src="https://images.tokopedia.net/img/cache/500/coCfvv/2021/12/9/8a7db136-d328-4cb8-b31b-83c5b441fb75.jpg" alt="Second slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slide
