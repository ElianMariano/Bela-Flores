import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'

interface HeaderProps{
    buttonTitle: string;
    buttonLink: string;
}

function Header(props: HeaderProps){
    return (
        <div className="admin-header">
            <h1 className="admin-title">Administrar</h1>

            <Link to={props.buttonLink}>
                <button className="admin-orders">{props.buttonTitle}</button>
            </Link>
        </div>
    )
}

export default Header;