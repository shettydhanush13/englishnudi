import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

const LevelCard = ({ children }) => {
    return (
        <section className='levelCard'>
            {children}
        </section>
    );
}

LevelCard.propTypes = {
    children : PropTypes.element,
}

export default LevelCard;