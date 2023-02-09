import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

const Button = ({ text, onClick }) => {
    return (
        <button className='buttonPrimary' onClick={onClick}>{text}</button>
    );
}

Button.propTypes = {
    text : PropTypes.string,
    onClick: PropTypes.func
}

export default Button;