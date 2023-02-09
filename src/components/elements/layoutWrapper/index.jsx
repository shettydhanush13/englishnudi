import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

const LayoutWrapper = ({ children }) => {
    return (
        <section className='layoutWrapper'>
            {children}
        </section>
    );
}

LayoutWrapper.propTypes = {
    children : PropTypes.element,
}

export default LayoutWrapper;