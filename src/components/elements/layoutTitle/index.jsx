import React from 'react';
import PropTypes from 'prop-types';
import "./styles.scss"

const LayoutTitle = ({ title }) => {
    return (
        <h1 className='layoutTitle'>
            {title}
        </h1>
    );
}

LayoutTitle.propTypes = {
    title : PropTypes.string,
}

export default LayoutTitle;