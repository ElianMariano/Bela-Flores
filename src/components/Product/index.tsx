import React from 'react';
import {Link} from 'react-router-dom'

import './styles.css';

interface ProductProps{
    url: string;
    name: string;
    src: string;
    price: number;
};

const Product= (props: ProductProps) => {
    return (
        <div className="product-container">
            <Link to={props.url}>
                <img alt={props.name} src={props.src} className="product-image"/>

                <div className="product-info">
                    <h3 className="product-name">{props.name}</h3>
                    <h4 className="product-price">{`R$ ${props.price.toFixed(2)}`}</h4>
                </div>
            </Link>
        </div>
    );
}

export default Product;