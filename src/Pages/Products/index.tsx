import React, {useState, useEffect} from 'react'
import PageDefault from '../../components/PageDefault'
import ProductSlider from '../../components/ProductSlider'
import api from '../../services/api'
import baseUrl from '../../services/baseurl'

interface ImageProps{
    link: string;
}

interface ProductProps{
    id: number;
    url: string;
    name: string;
    price: number;
    src: string;
    images: ImageProps[];
}

interface CategoryProps{
    category: string;
    category_url: string;
    products: ProductProps[]
}

function Products(){
    const [items, setItems] = useState<CategoryProps[]>([])

    useEffect(() => {
        api.get('category', {params: {with_products: true, count: 20}}).then(res => {
            const categories = res.data.map((element: CategoryProps) => {
                const products = element.products.map((product: ProductProps) => {
                    return {
                        url: `/produto/${product.id}`,
                        name: product.name,
                        price: product.price,
                        src: `${baseUrl}/${product.images[0].link}`
                    }
                })

                return {
                    category: element.category,
                    category_url: `/categoria/${element.category}`,
                    products
                }
            })

            setItems(categories)
        })
    }, [])

    return (
        <PageDefault>
            {items.map((product, i) => {
                    return (
                        <ProductSlider
                        key={i}
                        category_url={product.category_url}
                        category={product.category}
                        products={product.products}
                    />
                    )
                })}
        </PageDefault>
    )
}

export default Products;