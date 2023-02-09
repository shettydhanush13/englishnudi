import React from 'react';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements'

const How = () => {
    const howToLearnData = [
        {
            title: 'Live online classes',
            points: [
                'Choose your class time and learn online with British Council expert teachers.',
                'Practice speaking with role plays to gain confidence and fluency.',
                'Take part in discussions and group work.'
            ],
            buttonText: 'Explore our platform for free',
            imageUrl: 'https://englishonline.britishcouncil.org/wp-content/uploads/2022/01/myenglish-life-learn-1.png'
        },
        {
            title: 'Live25 teacher-led webinars',
            points: [
                'Choose your class time and learn online with British Council expert teachers.',
                'Practice speaking with role plays to gain confidence and fluency.',
                'Take part in discussions and group work.'
            ],
            buttonText: 'Explore our platform for free',
            imageUrl: 'https://englishonline.britishcouncil.org/wp-content/uploads/2022/01/myenglish-life-learn-1.png'
        },
        {
            title: 'Guided online exercises',
            points: [
                'Choose your class time and learn online with British Council expert teachers.',
                'Practice speaking with role plays to gain confidence and fluency.',
                'Take part in discussions and group work.'
            ],
            buttonText: 'Explore our platform for free',
            imageUrl: 'https://englishonline.britishcouncil.org/wp-content/uploads/2022/01/myenglish-life-learn-1.png'
        }
    ]
    return (
        <LayoutWrapper>
            <LayoutTitle title='How you will learn'/>
            {howToLearnData.map((how, index) => <SectionContainer imageSide={index%2 === 0 ? 'right' : 'left'}>
                <div>
                    <h2>{how.title}</h2>
                    <ul>{how.points.map((point) => <li>{point}</li>)}</ul>
                    <Button text={how.buttonText}/>
                </div>
                <img src={how.imageUrl} alt="" />
            </SectionContainer>)}
        </LayoutWrapper>
    );
}

export default How;