import React from 'react';
import "./styles.scss"
import introText from '../../../assets/content/english/intro.json'
import { Button } from '../../elements'

const Intro = () => {
    return (
        <div className='introWrapper'>
            <section className='intro'>
                <h3>{introText.title}</h3>
                <ul>{introText.points.map((point, index) => <li key={index}>{point}</li>)}</ul>
                <br />
                <Button text='20% Discount'/>
                <h6 style={{ margin: 0 }}>*offer ends in 3 days.</h6>
            </section>
            <div className='background'></div>
        </div>
    );
}

export default Intro;