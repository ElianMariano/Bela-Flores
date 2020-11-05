import React, { useState } from 'react';
import SearchInput from '../SearchInput';

import Logo from '../../assets/logo.png';
import './styles.css';

function Header(){
    const [searchShow, setSearchShow] = useState(false);

    return (
        <>
            <header>
                <div className="div-category">
                    <img className="logo-header" src={Logo} alt="Bela Flores" />

                    <a href="/" onClick={(e) => e.preventDefault()}>
                        <h3 className="category-title">PRODUTOS</h3>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                        <h3 className="category-title">PRODUTOS</h3>
                    </a>
                </div>

                <div className="div-tools">
                    <a href="/" onClick={(e) => e.preventDefault()}>
                        <h3 className="category-title-grey">CONTA</h3>
                    </a>

                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        setSearchShow(!searchShow);
                    }}>
                        <h3 className="category-title-grey">PESQUISAR</h3>
                    </a>

                    <a href="/" onClick={(e) => e.preventDefault()}>
                        <h3 className="category-title">CARRINHO(0)</h3>
                    </a>
                </div>
            </header>

            <SearchInput isShown={searchShow} />
        </>
    );
}

export default Header;