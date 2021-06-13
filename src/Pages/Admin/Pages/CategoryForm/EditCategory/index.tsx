import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import Header from '../../../Components/Header'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import api from '../../../../../services/api'

import './styles.css'

function EditCategory(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [auth, setAuth] = useState<string>('');
    const [oldCategory, setOldCategory] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const history = useHistory()
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

        setName(String(data.name));
        setEmail(String(data.email));
        setAuth(String(data.auth));
    }, [])

    useEffect(() => {
        api.get(`/category/${id}`).then(res => {
            setOldCategory(String(res.data.category));
            setCategory(String(res.data.category));
            setDescription(String(res.data.description));
        });
    }, [])

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const data = {
            email,
            category: oldCategory,
            new_category: category,
            description
        };

        const config = {
            headers: {auth}
        };

        api.put('/category', data, config).then(res => {
            console.log(`Status: ${res.status}`);

            history.push('/admin');
        });
    };

    return (
        <>
            <Header buttonTitle="Admin" buttonLink="/admin" />

            <form className="categoryform-container" onSubmit={handleSubmit}>
                <h3 className="create-category-title">Editar Categoria</h3>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Nome da Categoria"
                    onChange={e => setCategory(e.target.value)}
                    value={category}/>

                <textarea
                    className="create-category-description"
                    placeholder="Descrição da Categoria"
                    onChange={e => setDescription(e.target.value)}
                    value={description}></textarea>

                <Button type="submit" width='20%' height='6vh' fontSize='18px'>Salvar</Button>
            </form>
        </>
    )
}

export default EditCategory