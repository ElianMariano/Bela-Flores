import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom'

import SearchInput from '../SearchInput';

import Logo from '../../assets/logo.png';
import './styles.css';

function Header(){
    const location = useLocation();
    const [searchShow, setSearchShow] = useState(false);

    return (
        <>
            <header>
                <div className="div-category">
                    <img className="logo-header" src={Logo} alt="Bela Flores" />

                    {location.pathname !== '/' &&
                        (
                            <Link to="/">
                                <h3 className="category-title">HOME</h3>
                            </Link>
                        )}

                    <Link to="/categoria">
                        <h3 className="category-title">PRODUTOS</h3>
                    </Link>
                </div>

                <div className="div-tools">
                    <Link to="/login">
                        <h3 className="category-title-grey">CONTA</h3>
                    </Link>

                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        setSearchShow(!searchShow);
                    }}>
                        <h3 className="category-title-grey">PESQUISAR</h3>
                    </a>

                    <Link to="/carrinho">
                        <h3 className="category-title">CARRINHO(0)</h3>
                    </Link>
                </div>
            </header>

            <SearchInput isShown={searchShow} />
        </>
    );
}

export default Header;