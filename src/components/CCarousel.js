import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './css/CCarousel.css'

export default function CCarousels() {
    return (
        <div className="CCarousel">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100 CCarousel"
                    src="https://picsum.photos/200/300"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500}>
                    <img
                    className="d-block w-100 CCarousel"
                    src="https://picsum.photos/200/300"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1200}>
                    <img
                    className="d-block w-100 CCarousel"
                    src="https://picsum.photos/200/300"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
