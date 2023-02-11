import React from 'react';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle, LevelCard } from '../../elements'

const Levels = () => {
    const levelData = [
        {
            title: 'BASIC',
            description: 'Best choice if you have limited time and want to become more confident in using English at your level',
            points: [
                '6 live classes',
                '12 teacher-led webinars (Live25)',
                'premium online exercises',
                '3 months'
            ],
            buttonText: 'Enquire'
        },
        {
            title: 'INTERMEDIATE',
            description: 'Best choice if you have limited time and want to become more confident in using English at your level',
            points: [
                '6 live classes',
                '12 teacher-led webinars (Live25)',
                'premium online exercises',
                '3 months'
            ],
            buttonText: 'Enquire'
        },
        {
            title: 'EXPERT',
            description: 'Best choice if you have limited time and want to become more confident in using English at your level',
            points: [
                '6 live classes',
                '12 teacher-led webinars (Live25)',
                'premium online exercises',
                '3 months'
            ],
            buttonText: 'Enquire'
        }
    ]
    return (
        <LayoutWrapper>
            <LayoutTitle title='Levels'/>
            <div className='levelCardsWrapper'>
                {levelData.map((level) => <LevelCard>
                    <h1>{level.title}</h1>
                    <p>{level.description}</p>
                    <ul>{level.points.map((point) => <li>{point}</li>)}</ul>
                    <Button text='Enquire'/>
                </LevelCard>)}
            </div>
        </LayoutWrapper>
    );
}

export default Levels;