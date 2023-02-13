import React from 'react';
import "./styles.scss"
import { Button } from '../../elements'

const Intro = () => {
    return (
        <div className='introWrapper'>
            <section className='intro'>
                <h3>9/10 learners succeed in their career After effective course completion at English Nudi. Become a part of Karnataka’s most popular WhatsApp based online training company.</h3>
                <ul>
                    <li>24/7 Trainer Assistance</li>
                    <li>One-to-One Personal Trainer Assistance </li>
                    <li>6 Months Course + 2 Months Validity</li>
                    <li>Lifetime Personal Trainer Assistance </li>
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