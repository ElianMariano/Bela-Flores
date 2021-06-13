import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Header from '../../Components/Header'
import ItemsHub from '../../Components/ItemsHub'

function Admin(){
    const history = useHistory();

    useEffect(() => {
        const data = {
            auth: localStorage.getItem('auth'),
            name: localStorage.getItem('name'),
            admin: localStorage.getItem('admin'),
            email: localStorage.getItem('email')
        }

        console.log(data)

        if ((data.auth === null && data.name === null && data.admin === null && data.email === null) || data.admin === 'false')
            history.push('/');
    }, [])

    return (
        <>
            <Header buttonTitle="Pedidos" buttonLink="/" />

            <ItemsHub />
        </>
    )
}

export default Admin