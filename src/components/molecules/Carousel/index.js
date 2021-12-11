import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import './carousel.scss'

const Slide = () => {
    return (
        <div className="slideShow">
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100 img-slideShow" src="https://akcdn.detik.net.id/community/media/visual/2021/06/17/wallpaper-windows-11-1.jpeg?w=750&q=90" alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 img-slideShow" src="https://akcdn.detik.net.id/community/media/visual/2021/06/17/wallpaper-windows-11.jpeg?w=750&q=90" alt="Second slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slide
