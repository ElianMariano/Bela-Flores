import React from 'react';
import Slider from 'react-slick';
import ImageItem from '../ImageItem';

import Banner from '../../assets/banner.jpg';
import Banner2 from '../../assets/banner2.jpg';
import Banner3 from '../../assets/banner3.jpg';
import './styles.css';

function Carousel() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <ImageItem url="/" src={Banner} alt="Banner1" />
                <ImageItem url="/" src={Banner2} alt="Banner2" />
                <ImageItem url="/" src={Banner3} alt="Banner3" />
            </Slider>
        </div>
    );
}

export default Carousel;