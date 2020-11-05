import React from 'react';

import Logo from '../../assets/logo.png';
import './styles.css';

function Header(){
    return (
        <header>
            <div className="div-category">
                <img className="logo-header" src={Logo} alt="Bela Flores" />

                <h3 className="category-title">PRODUTOS</h3>

                <h3 className="category-title">PRODUTOS</h3>
            </div>

            <div className="div-tools">
                <h3 className="category-title-grey">CONTA</h3>
                <h3 className="category-title-grey">PESQUISAR</h3>
                <h3 className="category-title">CARRINHO(0)</h3>
            </div>
        </header>
    );
}

export default Header;