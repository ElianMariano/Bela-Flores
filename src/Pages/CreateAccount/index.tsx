import React from 'react'
import PageDefault from '../../components/PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'

import './styles.css'

function CreateAccount(){
    return (
        <PageDefault>
            <div className="account-container">
                <h3 className="account-title">Cadastrar Usuário</h3>

                <Input width='100%' height='6vh' fontSize='18px' placeholder="Nome"/>
                <Input width='100%' height='6vh' fontSize='18px' placeholder="seuemail@email.com"/>
                <Input width='100%' height='6vh' fontSize='18px' placeholder="Telefone: (00) 00000-0000"/>
                <Input width='100%' height='6vh' fontSize='18px' placeholder="CPF: 000.000.000-00"/>
                <Input width='100%' height='6vh' fontSize='18px' type='password' placeholder="Senha"/>

                <div className="address-container">
                    <h4 className="address-title">Adicionar Endereço</h4>
                    <Input width='100%' height='6vh' fontSize='18px' placeholder="Apelido (Ex. Casa, Trabalho)"/>
                    <Input width='100%' height='6vh' fontSize='18px' placeholder="Rua"/>
                    <Input width='100%' height='6vh' fontSize='18px' placeholder="Número"/>
                </div>

                <Button width='20%' height='6vh' fontSize='18px'>Criar conta</Button>
            </div>
        </PageDefault>
    )
}

export default CreateAccount;