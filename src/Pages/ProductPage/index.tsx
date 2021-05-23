import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Button from '../../components/Button'
import ProductImg from '../../assets/ex_produto.png'
import QuantityPicker from '../../components/QuantityPicker'
import api from '../../services/api'
import baseUrl from '../../services/baseurl'

import './styles.css'

function Product(){
    const [name, setName] = useState<string>();
    const [price, setPrice] = useState<number>();
    const [description, setDescription] = useState<string>();
    const [images, setImages] = useState<string>();
    const {id} = useParams<{id: string}>()

    useEffect(() => {
        api.get(`product/${id}`).then(res => {
            setName(res.data.name)
            setPrice(res.data.price)
            setDescription(res.data.description)
            setImages(res.data.images[0])
        })
    }, [])

    return (
        <PageDefault>
            <div className="product-box">
                <div className="product-images">
                    <img src={`${baseUrl}/${images}`} alt={name} className="product-img"/>
                </div>

                <div className="product-info-box">
                    <h2 className="product-title">{name}</h2>

                    <h3 className="product-price-tag">{`R$ ${price?.toFixed(2)}`}</h3>

                    <p className="product-description">{description}</p>

                    <QuantityPicker onChange={(q) => {console.log(`New value: ${q}`)}} />

                    <Button width='95%' height='6vh' fontSize='18px'>ADICIONAR AO CARRINHO</Button>

                    <Button width='95%' height='6vh' fontSize='18px'>COMPRAR</Button>
                </div>
            </div>
        </PageDefault>
    );
}

export default Product;