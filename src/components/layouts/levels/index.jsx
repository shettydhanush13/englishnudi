import React from 'react';
import "./styles.scss"
import levelData from '../../../assets/content/english/levels.json'
import { Button, LayoutWrapper, LayoutTitle, LevelCard } from '../../elements'

const Levels = () => {
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='English Nudi Level Classes'/>
                <div className='levelCardsWrapper'>
                    {levelData.map((level) => <LevelCard key={level.title}>
                        <>
                            <h1>{level.title}</h1>
                            <p>{level.description}</p>
                            <ul>{level.points.map((point, index) => <li key={`${level.title}-${index}`}>{point}</li>)}</ul>
                            <Button text='Enquire'/>
                        </>
                    </LevelCard>)}
                </div>
            </>
        </LayoutWrapper>
    );
}

export default Levels;