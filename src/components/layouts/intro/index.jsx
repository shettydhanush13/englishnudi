import React from 'react';
// import PropTypes from 'prop-types';
import "./styles.scss"

const Intro = () => {
    return (
        <div style={{position: 'relative', height: '100vh'}}>
            <div className='background'>
                <h2>English for Work</h2>
                <h4>Learn online with English language experts from around the world to help you succeed in your professional life.</h4>
                <ul>
                    <li>Monthly payment</li>
                    <li>Available 24/7</li>
                    <li>Live online lessons</li>
                    <li>Premium exercises online</li>
                </ul>
            </div>
        </div>
    );
}

Intro.propTypes = {
    // page : PropTypes.string,
    // createListing : PropTypes.func
}

export default Intro;