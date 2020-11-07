import React from 'react';
import Slider from 'react-slick';
import Product from '../Product';
import ProductImg from '../../assets/produto.png';

import './styles.css';

function ProductSlider(){
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    return (
        <div className="slider-container">
            <a href="/"><h3 className="slider-title">Categoria</h3></a>

            <Slider { ...settings }>
                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />

                <Product
                    url="/"
                    title="Produto"
                    price={20}
                    src={ProductImg}
                />
            </Slider>
        </div>
    );
}

export default ProductSlider;