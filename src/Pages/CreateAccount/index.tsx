import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'

import './styles.css'

function CreateAccount(){
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [auth, setAuth] = useState<string>('');
    const [admin, setAdmin] = useState<string>('');

    const history = useHistory();

    useEffect(() => {
        const data = {
            name: localStorage.getItem('name'),
            auth: localStorage.getItem('auth'),
            admin: localStorage.getItem('admin')
        }

        if (data.name !== null && data.auth !== null && data.admin !== null)
            history.push('/');
    }, [])

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            cpf,
            password
        }

        api.post('user', data).then(res => {
            setAuth(res.headers.auth);
            setAdmin(res.data.admin);

            localStorage.setItem('auth', auth);
            localStorage.setItem('name', name);
            localStorage.setItem('admin', admin);

            history.push('/');
        })
    }

    return (
        <PageDefault>
            <form className="account-container" onSubmit={handleSubmit}>
                <h3 className="account-title">Cadastrar Usuário</h3>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Nome"
                    onChange={e => setName(e.target.value)}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="seuemail@email.com"
                    onChange={e => setEmail(e.target.value)}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Telefone: (00) 00000-0000"
                    onChange={e => setPhone(e.target.value)}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="CPF: 000.000.000-00"
                    onChange={e => setCpf(e.target.value)}/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    type='password' placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}/>

                {/* <div className="address-container">
                    <h4 className="address-title">Adicionar Endereço</h4>
                    <Input width='100%' height='6vh' fontSize='18px' placeholder="Apelido (Ex. Casa, Trabalho)"/>
                    <Input width='100%' height='6vh' fontSize='18px' placeholder="Rua"/>
                    <Input width='100%' height='6vh' fontSize='18px' placeholder="Número"/>
                </div> */}

                <Button type="submit" width='20%' height='6vh' fontSize='18px'>Criar conta</Button>
            </form>
        </PageDefault>
    )
}

export default CreateAccount;