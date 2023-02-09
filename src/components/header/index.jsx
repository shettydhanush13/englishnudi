import React from 'react';
// import PropTypes from 'prop-types';
import "./styles.scss"

const Header = () => {
    return (
        <header>
            <nav className='header-links'>
                <h1>English Nudi</h1>
            </nav>
        </header>
    );
}

Header.propTypes = {
    // page : PropTypes.string,
    // createListing : PropTypes.func
}

export default Header;