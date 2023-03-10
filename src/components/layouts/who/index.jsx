import React from 'react';
import "./styles.scss"
import { LayoutWrapper, LayoutTitle } from '../../elements'

const Who = () => {
    return (
        <LayoutWrapper type='secondary'>
            <>
                <LayoutTitle title='Who can join us ?'/>
                <section className='contactUs'>
                    <p>{`At English Nudi, we believe that everyone should have access to education and pursue their passions.
 
 We recognize that traditional learning methods may not work for everyone, which is why we have developed an innovative approach to teaching English. Our platform is designed to provide students with access to high-quality resources, including interactive learning materials and personalized support from experienced teachers, all while allowing them to learn at their own pace and on their own schedule.
 
 Whether you're a busy professional, a stay-at-home parent, housewife, a person who is looking for a job, or a student with a packed schedule, our platform can help you achieve your learning goals without sacrificing your other commitments. We believe that everyone deserves the opportunity to learn, and we are committed to making that a reality for all of our students. Join us today and discover how we can help you unlock your full potential!`
    }</p>
                </section>
            </>
        </LayoutWrapper>
    );
}

export default Who;