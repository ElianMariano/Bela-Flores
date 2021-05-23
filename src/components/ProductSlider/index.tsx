import React from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Product from '../Product';
import ProductImg from '../../assets/produto.png';

import './styles.css';

interface ProductProps{
    url: string;
    name: string;
    src: string;
    price: number;
};

interface ProductSliderProps{
  category_url: string;
  category: string;
  products: ProductProps[];
}


function ProductSlider(props: ProductSliderProps){
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
            <Link to={props.category_url}><h3 className="slider-title">{props.category}</h3></Link>

            <Slider { ...settings }>
                {props.products.map((product, i) => {
                    return (
                        <Product
                            key={i}
                            url={product.url}
                            name={product.name}
                            price={product.price}
                            src={product.src}
                        />
                    )
                })}
            </Slider>
        </div>
    );
}

export default ProductSlider;