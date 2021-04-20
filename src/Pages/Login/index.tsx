import React from 'react'
import {Link} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'

import './styles.css'

function Login(){
    return (
        <PageDefault>
            <div className="login-container">
                <h3 className="login-title">Entrar</h3>

                <Input width='100%' height='6vh' fontSize='18px' placeholder="email@gmail.com"/>
                <Input type='password' width='100%' height='6vh' fontSize='18px' placeholder="Senha"/>

                <Link to='/create-account'>
                    <p className="create-account-text">Não tem conta? Crie agora.</p>
                </Link>

                <div className="bottom-container">
                    <Button width='20%' height='6vh' fontSize='18px'>Criar conta</Button>
                    
                    <Link to='/'>
                        <p className="forgot-password-text">Esqueceu a senha?</p>
                    </Link>
                </div>
            </div>
        </PageDefault>
    )
}

export default Login;