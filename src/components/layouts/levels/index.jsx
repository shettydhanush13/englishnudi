import React from 'react';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle, LevelCard } from '../../elements'

const Levels = () => {
    const levelData = [
        {
            title: 'BASIC',
            description: '',
            points: [
                'Mentor-led live online classes',
                'Activities to boost your learning',
                'Monitoring learners progress on a regular basis',
                'Live sessions to enhance soft skills',
                'Premium access to the art of email writing. '
            ],
            buttonText: 'Enquire'
        },
        {
            title: 'INTERMEDIATE',
            description: '',
            points: [
                'Mentor-led live online classes',
                'Activities to boost your learning',
                'Monitoring learners progress on a regular basis',
                'Premium access to the art of email writing',
                'Premium access to the art of cracking an Interview.'
            ],
            buttonText: 'Enquire'
        },
        {
            title: 'EXPERT',
            description: '',
            points: [
                'Mentor-led live online classes',
                'Activities to boost your learning',
                'Monitoring learners progress on a regular basis',
                'Premium access to the art of email writing',
                'Premium access to the art of cracking an Interview.',
                'Job referral programme.',
                'Freelance opportunities.'
            ],
            buttonText: 'Enquire'
        }
    ]
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='English Nudi Level Classes'/>
                {/* <h5>Based on performance at level test, the best suitable level will be allotted to learners.</h5> */}
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