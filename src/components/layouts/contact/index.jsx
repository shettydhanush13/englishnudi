import React from 'react';
// import PropTypes from 'prop-types';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle } from '../../elements'

const Contact = () => {
    return (
        <LayoutWrapper>
            <LayoutTitle title='We are here to help'/>
            <h3>Get in touch with our Customer Support Team with any questions you may have.</h3>
            <Button text='CONTACT US'/>
        </LayoutWrapper>
    );
}

Contact.propTypes = {
    // page : PropTypes.string,
    // createListing : PropTypes.func
}

export default Contact;