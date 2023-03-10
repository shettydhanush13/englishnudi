import React from 'react';
import "./styles.scss"
import logo from '../../assets/images/logo-primary.png';

const Header = () => {
    return (
        <header>
            <nav className='header-links'>
                <img src={logo} alt="" />
            </nav>
        </header>
    );
}

export default Header;