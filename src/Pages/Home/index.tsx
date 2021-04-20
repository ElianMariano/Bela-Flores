import React from 'react'
import PageDefault from '../../components/PageDefault'
import Carousel from '../../components/Carousel'
import ProductSlider from '../../components/ProductSlider'

function Home(){
    return (
        <>
            <PageDefault>
                <Carousel />

                <ProductSlider />

                <ProductSlider />
            </PageDefault>
        </>
    )
}

export default Home;