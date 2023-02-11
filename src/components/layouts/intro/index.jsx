import React from 'react';
import "./styles.scss"
import { Button } from '../../elements'

const Intro = () => {
    return (
        <div className='introWrapper'>
            <section className='intro'>
                <h3>Learn online with English language experts from around the world to help you succeed in your professional life.</h3>
                <ul>
                    <li>Monthly payment</li>
                    <li>Available 24/7</li>
                    <li>Live online lessons</li>
                    <li>Premium exercises online</li>
                </ul>
                <br />
                <Button text='20% Discount'/>
                <h6 style={{ margin: 0 }}>*offer ends in 3 days.</h6>
            </section>
            <div className='background'></div>
        </div>
    );
}

export default Intro;