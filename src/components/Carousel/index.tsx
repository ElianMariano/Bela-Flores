import React from 'react';
import Slider from 'react-slick';
import ImageItem from '../ImageItem';

import './styles.css';

interface ImageItemProps {
    link: string;
    hasLink: boolean;
    url?: string;
    description: string;
};

interface CarouselProps{
    slides: ImageItemProps[];
}

function Carousel(props: CarouselProps) {
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
                {props.slides.map((slide, i) => {
                    return (
                        <ImageItem key={i} url={slide.url} hasLink={slide.hasLink} link={slide.link} description={slide.description} />
                    )
                })}
            </Slider>
        </div>
    );
}

export default Carousel;