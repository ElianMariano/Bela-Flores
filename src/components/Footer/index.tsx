import React from 'react';

import LogoImg from '../../assets/logo.png';
import './styles.css';

function Footer(){
    return (
        <footer>
            <div>
                <h3 className="footer-title">MAIS INFORMAÇÕES</h3>
                <p className="footer-item">Sobre nós</p>
                <p className="footer-item">Política de Frete (Entrega)</p>
                <p className="footer-item">Contato</p>
                <p className="footer-item">Política de devolução</p>
            </div>

            <div className="div-center">
                <img className="logo-footer" src={LogoImg} alt="Bela Flores" />
                <p className="footer-item">@Bela Flores. Praia da Costa</p>
            </div>

            <div>
                <h3 className="footer-title">SIGA NOSSAS REDES SOCIAIS</h3>
                <p className="footer-item">Facebook</p>
                <p className="footer-item">Instagram</p>
            </div>
        </footer>
    );
}

export default Footer;