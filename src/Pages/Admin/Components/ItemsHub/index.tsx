import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Item from '../../Components/Item'
import api from '../../../../services/api'

import './styles.css'
import Category from '../../../Category'

interface CategoryProps{
    category: string;
    description: string;
}

interface ProductProps {
    id: number;
    name: string;
    price: number;
    description: string;
    splited_price: number;
    division_quantity: number;
}

interface SlideProps {
    id: number;
    link: string;
    description: string;
    product_id?: number;
}

function ItemsHub(){
    const [selected, setSelected] = useState<number>(0);
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [slides, setSlides] = useState<SlideProps[]>([]);
    const auth = String(localStorage.getItem('auth'));
    const email = String(localStorage.getItem('email'))

    useEffect(() => {
        api.get('/category').then(res => {
            setCategories(res.data);
        })
    }, [])

    useEffect(() => {
        api.get('/product').then(res => {
            const data = res.data.map((product : ProductProps) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    splited_price: product.splited_price,
                    division_quantity: product.division_quantity
                }
            })

            setProducts(data);
        })
    }, [])

    useEffect(() => {
        api.get('/slide').then(res => {
            const data = res.data.map((slide: SlideProps) => {
                return {
                    id: slide.id,
                    link: slide.link,
                    description: slide.description,
                    product_id: slide.product_id
                }
            })

            setSlides(data);
        })
    }, [])

    async function handleDeleteCategory(id: string){
        await api.delete(`/category/${id}`, {headers: {auth}, data: {email}}).then(res => {
            const newCategory : CategoryProps[] = categories.filter((category: CategoryProps) => {
                if (category.category !== id) return category
            }) as CategoryProps[];

            setCategories(newCategory);
        })
        .catch(Error);
    }

    async function handleDeleteProduct(id: number){
        await api.delete(`/product/${id}`, {headers: {auth}, data: {email}}).then(res => {
            const newProducts : ProductProps[] = products.filter((product: ProductProps) => {
                if (product.id !== id) return product
            }) as ProductProps[];

            setProducts(newProducts);
        })
        .catch(Error);
    }

    async function handleDeleteSlide(id: number){
        await api.delete(`/slide/${id}`, {headers: {auth}, data: {email}}).then(res => {
            const newSlides : SlideProps[] = slides.filter((slide: SlideProps) => {
                if (slide.id !== id) return slide
            }) as SlideProps[];

            setSlides(newSlides);
        })
        .catch(Error);
    }

    return (
        <div className="itemshub-container">
            <div className="options">
                <button className={selected === 0 ? "light-button" : "disabled-button"} onClick={e => setSelected(0)}>Categorias</button>
                <button className={selected === 1 ? "light-button" : "disabled-button"} onClick={e => setSelected(1)}>Produtos</button>
                <button className={selected === 2 ? "light-button" : "disabled-button"} onClick={e => setSelected(2)}>Slides</button>
            </div>

            {
                selected === 0 && (
                    <>
                        <Link to="/criar-categoria"><button className="add-item">Adicionar</button></Link>

                        <div className="items">
                            {
                                categories.map((category, i) => {
                                    return (
                                        <Item key={i} title={category.category} editUrl={`/editar-categoria/${category.category}`} deleteCallback={() => handleDeleteCategory(category.category)}/>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

            {
                selected === 1 && (
                    <>
                        <Link to="/criar-produto"><button className="add-item">Adicionar</button></Link>

                        <div className="items">
                            {
                                products.map((product, i) => {
                                    return (
                                        <Item key={i} title={product.name} editUrl={`/editar-produto/${product.id}`} deleteCallback={() => handleDeleteProduct(product.id)}/>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

            {
                selected === 2 && (
                    <>
                        <Link to="/criar-slide"><button className="add-item">Adicionar</button></Link>

                        <div className="items">
                            {
                                slides.map((slide, i) => {
                                    return (
                                        <Item key={i} title={slide.description} editUrl={`/editar-slide/${slide.id}`} deleteCallback={() => handleDeleteSlide(slide.id)}/>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default ItemsHub;