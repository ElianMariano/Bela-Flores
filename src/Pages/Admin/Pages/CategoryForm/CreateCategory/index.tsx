import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../../Components/Header'
import Input from '../../../../../components/Input'
import Button from '../../../../../components/Button'
import api from '../../../../../services/api'

import './styles.css'

function CreateCategory(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [auth, setAuth] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const history = useHistory()

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

        setName(String(data.name));
        setEmail(String(data.email));
        setAuth(String(data.auth));
    }, [])

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const data = {
            email,
            category,
            description
        }

        api.post('/category', data, {headers: {auth}}).then(res => {
            console.log(`Status: ${res.status}`);

            history.push('/admin');
        })
    }

    return (
        <>
            <Header buttonTitle="Admin" buttonLink="/admin" />

            <form className="categoryform-container" onSubmit={handleSubmit}>
                <h3 className="create-category-title">Criar Categoria</h3>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Nome da Categoria"
                    onChange={e => setCategory(e.target.value)}/>

                <textarea className="create-category-description" placeholder="Descrição da Categoria"></textarea>

                <Button type="submit" width='20%' height='6vh' fontSize='18px'>Criar Categoria</Button>
            </form>
        </>
    )
}

export default CreateCategory