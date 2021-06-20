import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Product from '../../components/Product'
import api from '../../services/api'
import baseUrl from '../../services/baseurl'

import './styles.css'

interface ImageProps{
    link: string;
}

interface ProductProps{
    id: number;
    name: string;
    price: number;
    description: string;
    splited_price: number;
    division_quantity: number;
    images: ImageProps[];
}

function Category(){
    const {category} = useParams<{category: string}>();
    const [description, setDescription] = useState<string>('');
    const [page, setPage] = useState<number>(0);
    const [products, setProducts] = useState<ProductProps[]>();

    useEffect(() => {
        const config = {params: {with_products: true, count: 5, page}};

        api.get(`/category/${category}`, config).then(res => {
            setDescription(res.data.description);

            const data = res.data.productImages.map((product: ProductProps) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    splited_price: product.splited_price,
                    division_quantity: product.division_quantity,
                    images: [
                        {link: product.images[0].link}
                    ]
                }
            })

            setProducts(data);
        })
    }, [])

    return (
        <PageDefault>
            <h2 className="category-page-title">{category}</h2>

            <p className="category-page-description">{description}</p>

            <div className="category-grid-container">
                {products?.map((product: ProductProps, i) => {
                    return (
                        <Product
                            key={i}
                            name={product.name}
                            price={product.price}
                            src={`${baseUrl}/${product.images[0].link}`}
                            url={`/produto/${product.id}`}
                            />
                    )
                })}
            </div>
        </PageDefault>
    )
}

export default Category;