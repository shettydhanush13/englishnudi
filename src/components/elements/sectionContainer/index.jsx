import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

const SectionContainer = ({ children, imageSide }) => {
    return (
        <section className='sectionContainer' style={{ flexDirection: imageSide === 'right' ? 'row' : 'row-reverse' }}>
            {children}
        </section>
    );
}

SectionContainer.propTypes = {
    children: PropTypes.element,
    imageSide: PropTypes.string
}

export default SectionContainer;