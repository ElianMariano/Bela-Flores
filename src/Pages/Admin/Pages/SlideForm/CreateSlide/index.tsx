import React, {useState, useEffect, ChangeEvent} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../../Components/Header'
import Button from '../../../../../components/Button'
import Dropzone from '../../../../../components/Dropzone'
import api from '../../../../../services/api'

import './styles.css'

interface ProductProps{
    id: number;
    name: string;
    price: number;
    description: string;
    splited_price: number;
    division_quantity: number;
    category_id: string;
}

function CreateSlide(){
    const [selectedFile, setSelectedFile] = useState<File>();
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [description, setDescription] = useState<string>('');
    const [productOption, setProductOption] = useState<number>();
    const email = String(localStorage.getItem('email'));
    const auth = String(localStorage.getItem('auth'));
    const history = useHistory();

    useEffect(() => {
        const data = {
            auth: localStorage.getItem('auth'),
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            admin: Boolean(Number(localStorage.getItem('admin')))
        }

        if ((data.auth === null && data.name === null && data.email === null && data.admin === null) || !data.admin){
            history.push('/');
        }
    }, [])

    useEffect(() => {
        api.get('product').then(res => {
            const data = res.data.map((product: ProductProps) => {
                return {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    splited_price: product.splited_price,
                    division_quantity: product.division_quantity,
                    category_id: product.category_id
                }
            });

            setProducts(data);
        })
    }, [])

    function handleProductOption(event: ChangeEvent<HTMLSelectElement>){
        const product = event.target.value;

        setProductOption(Number(product));
    }

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const data = new FormData();
        data.append('email', email);
        data.append('description', description);

        if (selectedFile){
            data.append('image', selectedFile);
        }

        if (productOption !== 0){
            data.append('product_id', String(productOption));
        }

        await api.post('slide', data, {headers: {auth}}).then(res => {
            history.push('/admin');
        }).catch(Error);
    }

    return (
        <>
            <Header buttonTitle="Admin" buttonLink="/admin" />

            <form action="" className="slideform-container" onSubmit={handleSubmit}>
                <h3 className="create-slide-title">Criar Slide</h3>

                <Dropzone onFileUploaded={setSelectedFile} />

                <textarea 
                    className="create-slide-description" 
                    placeholder="Descrição do Slide"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

                <select className="slide-option" value={productOption} onChange={handleProductOption}>
                    <option value={0}>Nenhum</option>

                    {
                        products.map((product, i) => {
                            return (
                                <option key={i} value={product.id}>{product.name}</option>
                            )
                        })
                    }
                </select>

                <Button
                    type="submit"
                    width='20%'
                    height='6vh'
                    fontSize='18px'>Criar Slide</Button>
            </form>
        </>
    )
}

export default CreateSlide