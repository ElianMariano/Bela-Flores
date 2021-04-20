import React from 'react'
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'
import ProductImg from '../../assets/ex_produto.png'
import QuantityPicker from '../../components/QuantityPicker'

import './styles.css'

function Product(){
    return (
        <PageDefault>
            <div className="product-box">
                <div className="product-images">
                    <img src={ProductImg} alt="Produto principal" className="product-img"/>
                </div>

                <div className="product-info-box">
                    <h2 className="product-title">BUQUE DE FLORES</h2>

                    <h3 className="product-price-tag">R$ 20,00</h3>

                    <p className="product-description">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum."
                    </p>

                    <QuantityPicker onChange={(q) => {console.log(`New value: ${q}`)}} />

                    <Button width='95%' height='6vh' fontSize='18px'>ADICIONAR AO CARRINHO</Button>

                    <Button width='95%' height='6vh' fontSize='18px'>COMPRAR</Button>
                </div>
            </div>
        </PageDefault>
    );
}

export default Product;