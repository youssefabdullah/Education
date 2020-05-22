import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from '../../Img/6d5d7c87-1f26-40aa-bd47-8731d74e30ec.jpg'
import img2 from '../../Img/3234c591-0ed4-4ac6-b4a4-2079bb05a350.jpg'
import img3 from '../../Img/754435b9-c064-43b1-a9fc-5c78a1e31b3f.jpg'
import './Slider.css'
export default function Slider() {
    return (
        <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="First slide"
                        id="slider-img"
                    />
                    <Carousel.Caption>
                        <h3>أوائل الاعداديه</h3>
                        <p>Mr.Omar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Third slide"
                        id="slider-img"
                    />

                    <Carousel.Caption>
                        <h3>أوائل الاعداديه</h3>
                        <p>Mr.Omar</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                        id="slider-img"
                    />

                    <Carousel.Caption >
                        <h3>أوائل الاعداديه</h3>
                        <p>Mr.Omar</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
