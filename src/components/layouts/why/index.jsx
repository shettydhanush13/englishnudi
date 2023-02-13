import React from 'react';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements'

const Why = () => {

    const whyEnglishNudi = [
        {
           title: 'Best Online Platform in Karnataka',
           reasons: [
            'English Nudi, Karnataka\'s top-class and rapidly growing WhatsApp based learning platform, succours in handling learners challenges with the spoken English. At English Nudi, we emphasize on offering innovative and prolific tools for enhancing your command over the global language.',
            'As an user-friendly spoken English platform our young and dedicated team ensures its handyness and feasible time schedules for passionate language learners.'
           ],
           buttonText: 'Explore our courses for free',
           imageUrl: 'https://images.pexels.com/photos/3791664/pexels-photo-3791664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        },
        {
            title: 'Highly Qualified Trainers',
            reasons: [
             'Our vigorous spoken English tutors bring you the real career growth with updated syllabus at your comfort.',
             'Our trainers are well-versed and follow the LSRW (Listen-Speak-Read-Write) approach to bring the best in you with regards to communication skills.'
            ],
            buttonText: 'Explore our courses for free',
            imageUrl: 'https://images.pexels.com/photos/6503100/pexels-photo-6503100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
         },
         {
            title: 'Overcome the fear of English speaking',
            reasons: [
             '24/7 trainer assistance from trainers and fraternity of harmonious peers to sort out any doubts related to spoken English. Moreover, one-to-one trainer assistance gives freedom to ensure that the learner faces no hesitation to resolve his doubts.',
             'Study materials will be shared online, learners can learn anytime, anywhere at their comfort.'
            ],
            buttonText: 'Explore our courses for free',
            imageUrl: 'https://images.pexels.com/photos/1181605/pexels-photo-1181605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
         }
    ]
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='Why English Nudi?'/>
                <section>
                    {whyEnglishNudi.map((why, index) => <SectionContainer key={why.title} imageSide={index%2 === 0 ? 'right' : 'left'}>
                        <>
                            <div>
                                <h3>{why.title}</h3>
                                <ul>
                                    {why.reasons.map((reason) => <li level key={`${why.title}-${index}`}>{reason}</li>)}
                                </ul>
                                <Button text={why.buttonText}/>
                            </div>
                            <img src={why.imageUrl} alt="" />
                        </>
                    </SectionContainer>)}
                </section>
            </>
        </LayoutWrapper>
    );
}

export default Why;