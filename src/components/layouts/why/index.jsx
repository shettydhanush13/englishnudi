import React from 'react';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements'

const Why = () => {

    const whyEnglishNudi = [
        {
           title: 'BECOME CONFIDENT',
           reasons: [
            'With English Nudi, you will develop practical communication skills and gain the confidence to master interactions.',
            'Strengthen your soft skills through effective online interaction. This includes group discussions, role plays, presentations and time management.'
           ],
           buttonText: 'Explore our courses for free',
           imageUrl: 'https://englishonline.britishcouncil.org/wp-content/uploads/2022/03/portrait-female-work-having-video-call.jpg'
        },
        {
            title: 'BECOME CONFIDENT',
            reasons: [
             'With English Nudi, you will develop practical communication skills and gain the confidence to master interactions in the workplace.',
             'Strengthen your soft skills through effective online interaction. This includes group discussions, role plays, presentations and time management.'
            ],
            buttonText: 'Explore our courses for free',
            imageUrl: 'https://englishonline.britishcouncil.org/wp-content/uploads/2022/03/portrait-female-work-having-video-call.jpg'
         },
         {
            title: 'BECOME CONFIDENT',
            reasons: [
             'With English Nudi, you will develop practical communication skills and gain the confidence to master interactions in the workplace.',
             'Strengthen your soft skills through effective online interaction. This includes group discussions, role plays, presentations and time management.'
            ],
            buttonText: 'Explore our courses for free',
            imageUrl: 'https://englishonline.britishcouncil.org/wp-content/uploads/2022/03/portrait-female-work-having-video-call.jpg'
         }
    ]
    return (
        <LayoutWrapper>
            <LayoutTitle title='Why choose us?'/>
            <section>
                {whyEnglishNudi.map((why, index) => <SectionContainer imageSide={index%2 === 0 ? 'right' : 'left'}>
                    <div>
                        <h3>{why.title}</h3>
                        <ul>
                            {why.reasons.map((reason) => <li>{reason}</li>)}
                        </ul>
                        <Button text={why.buttonText}/>
                    </div>
                    <img src={why.imageUrl} alt="" />
                </SectionContainer>)}
            </section>
        </LayoutWrapper>
    );
}

export default Why;