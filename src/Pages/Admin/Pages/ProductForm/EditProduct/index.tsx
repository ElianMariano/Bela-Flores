import React, {useState, useEffect, ChangeEvent} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Header from '../../../Components/Header'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import api from '../../../../../services/api'

import Dropzone from '../../../../../components/Dropzone'

import './styles.css'

interface CategoryProps{
    category: string;
    description: string;
}

function EditProduct(){
    const history = useHistory();
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [description, setDescription] = useState<string>('');
    const [splitedPrice, setSplitedPrice] = useState<number>(0);
    const [divisionQuantity, setDivisionQuantity] = useState<number>(0);
    const [categoryOption, setCategoryOption] = useState<string>('');
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        const data = {
            auth: localStorage.getItem('auth'),
            name: localStorage.getItem('name'),
            email: localStorage.getItem('email'),
            admin: localStorage.getItem('admin')
        }

        if ((data.auth === null && data.name === null && data.email === null && data.admin === null) || data.admin === 'false'){
            history.push('/');
        }
    }, [])

    useEffect(() => {
        api.get('category').then(res => {
            const data = res.data.map((category: CategoryProps) => {
                return {
                    category: category.category,
                    description: category.description
                }
            })

            setCategories(data);
            setCategoryOption(data[0].category);
        })
    }, [])

    useEffect(() => {
        api.get(`/product/${id}`).then(res => {
            setName(String(res.data.name));
            setPrice(Number(res.data.price));
            setDescription(String(res.data.description));
            setSplitedPrice(Number(res.data.splited_price));
            setDivisionQuantity(Number(res.data.division_quantity));
            setCategoryOption(String(res.data.category_id));
        })
    }, [])

    function handleCategoryOption(event: ChangeEvent<HTMLSelectElement>){
        const category = event.target.value;

        setCategoryOption(category);
    }

    async function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const email = String(localStorage.getItem('email'));
        const auth = String(localStorage.getItem('auth'));

        console.log({
            email,
            auth
        })

        const data = new FormData();
        data.append('id', id);
        data.append('email', email);
        data.append('name', name);
        data.append('price', String(price));
        data.append('description', description);
        data.append('splited_price', String(splitedPrice));
        data.append('division_quantity', String(divisionQuantity));
        data.append('category', categoryOption);

        if (selectedFile){
            data.append('images', selectedFile);
        }

        const config = {
            headers: {'Content-Type': 'multipart/form-data', auth}
        }

        await api.put('product', data, config).then(res => {
            console.log(res.data)
        }).catch(Error)

        history.push('/admin');
    }

    return (
        <>
            <Header buttonTitle="Admin" buttonLink="/admin" />

            <form className="productform-container" onSubmit={handleSubmit}>
                <h3 className="create-product-title">Editar Produto</h3>

                <Dropzone onFileUploaded={setSelectedFile}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Nome do Produto"
                    value={name}
                    onChange={e => setName(e.target.value)}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    type="number"
                    placeholder="Preço do Produto"
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}/>

                <textarea 
                    className="create-product-description" 
                    placeholder="Descrição do Produto"
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    type="number"
                    placeholder="Preço do Produto Parcelado"
                    value={splitedPrice}
                    onChange={e => setSplitedPrice(Number(e.target.value))}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    type="number"
                    placeholder="Quantidade de Parcelas"
                    value={divisionQuantity}
                    onChange={e => setDivisionQuantity(Number(e.target.value))}/>

                <select className="category-option" value={categoryOption} onChange={handleCategoryOption}>
                    {
                        categories.map((category, i) => {
                            return (
                                <option key={i} value={category.category}>{category.category}</option>
                            )
                        })
                    }
                </select>

                <Button type="submit" width='20%' height='6vh' fontSize='18px'>Salvar</Button>
            </form>
        </>
    )
}

export default EditProduct;