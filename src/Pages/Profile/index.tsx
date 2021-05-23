import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import PageDefault from '../../components/PageDefault'
import Input from '../../components/Input'
import Button from '../../components/Button'
import EditField from '../../components/EditField'
import {LogOut} from 'react-feather'

import './styles.css'

function Profile(){
    const history = useHistory();

    useEffect(() => {
        const data = {
            name: localStorage.getItem('name'),
            auth: localStorage.getItem('auth'),
            admin: localStorage.getItem('admin')
        }

        if (data.name === null && data.auth === null && data.admin === null)
            history.push('/');
    }, [])

    function logout(){
        localStorage.clear();

        history.push('/');
    }

    return (
        <PageDefault>
            <div className="profile-container">
                <div className="upper-container">
                    <h3 className="profile-title">Minha Conta</h3>

                    <button className="logout-button" onClick={logout}>Sair
                        <LogOut color="white" size={20}/>
                    </button>
                </div>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Nome"/>

                <Input
                    width='100%'
                    height='6vh'
                    fontSize='18px'
                    placeholder="Email"/>

                <Button width='20%' height='6vh' fontSize='18px'>Editar Dados</Button>
            </div>
        </PageDefault>
    )
}

export default Profile