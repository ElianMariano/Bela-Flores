import React, {useState, useEffect} from 'react'
import PageDefault from '../../components/PageDefault'
import Carousel from '../../components/Carousel'
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

interface SlideProps{
    link: string;
    description: string;
    product_id: number;
}

interface ImageItemProps {
    link: string;
    hasLink: boolean;
    url?: string;
    description: string;
};

function Home(){
    const [items, setItems] = useState<CategoryProps[]>([])
    const [slides, setSlides] = useState<ImageItemProps[]>([])

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

    useEffect(() => {
        api.get('slide').then(res => {
            const data = res.data.map((slide: SlideProps) => {
                const url = (slide.product_id !== null) ? `/produto/${slide.product_id}` : ''

                return {
                    url,
                    hasLink: slide.product_id !== null,
                    description: slide.description,
                    link: `${baseUrl}/${slide.link}`
                }
            })

            setSlides(data)
        })
    }, [])

    return (
        <>
            <PageDefault>
                <Carousel slides={slides} />

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
        </>
    )
}

export default Home;