import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'
import api from '../../services/api'

import './styles.css'

function Login(){
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [auth, setAuth] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [admin, setAdmin] = useState<boolean>(false);
    const history = useHistory();

    useEffect(() => {
        const data = {
            auth: localStorage.getItem('auth'),
            name: localStorage.getItem('name'),
            admin: localStorage.getItem('admin'),
            email: localStorage.getItem('email')
        }

        if (data.auth !== null && data.name !== null && data.admin !== null && data.email !== null)
            history.push('/perfil');
    }, [])

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();

        api.post('login', {
            email,
            password
        })
        .then(res => {
            setAuth(res.headers.auth);
            setName(res.data.name);
            setAdmin(res.data.admin)

            localStorage.setItem('name', res.data.name);
            localStorage.setItem('auth', res.headers.auth);
            localStorage.setItem('admin', res.data.admin);
            localStorage.setItem('email', res.data.email);

            history.goBack();
        })
    }

    return (
        <PageDefault>
            <form className="login-form" onSubmit={handleSubmit}>
                <h3 className="login-title">Entrar</h3>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="email@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <Input
                    type='password'
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                <Link to='/cadastrar'>
                    <p className="create-account-text">Não tem conta? Crie agora.</p>
                </Link>

                <div className="bottom-container">
                    <Button type="submit" width='20%' height='6vh' fontSize='18px'>Entrar</Button>
                    
                    <Link to='/'>
                        <p className="forgot-password-text">Esqueceu a senha?</p>
                    </Link>
                </div>
            </form>
        </PageDefault>
    )
}

export default Login;