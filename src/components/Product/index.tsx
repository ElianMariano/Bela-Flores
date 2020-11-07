import React, { ImgHTMLAttributes } from 'react';

import './styles.css';

/*
<Product
    url="/"
    title="Produto"
    price={20}
    src={ProductImg}
    width="200px"
    />
*/

interface ProductProps extends ImgHTMLAttributes<HTMLImageElement>{
    url: string;
    title: string;
    price: number;
};

const Product: React.FC<ProductProps> = ({ url, title, price, ...rest }) => {
    return (
        <div className="product-container">
            <a href={url}>
                <img alt={title} {...rest} className="product-image"/>

                <div className="product-info">
                    <h3 className="product-name">{title}</h3>
                    <h4 className="product-price">{`R$ ${price.toFixed(2)}`}</h4>
                </div>
            </a>
        </div>
    );
}

export default Product;