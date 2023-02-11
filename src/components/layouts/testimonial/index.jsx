import React from 'react';
// import PropTypes from 'prop-types';
import "./styles.scss"
import { LayoutWrapper, LayoutTitle } from '../../elements';

const Testimonials = () => {
    return (
        <LayoutWrapper>
            <LayoutTitle title='Our students love learning with us because...'/>
            <section>
                <h3>Riddhi Datta (English Nudi student)</h3>
                <p>“The course comprised of online live interactive classes as well as some online assignments. The course content was very rich and designed in accordance with the day-to-day needs of the workplace. My teacher was one-of-a-kind. She was an enthusiastic person with a strong stimulus for students’ needs. She was extremely well organised and tailored her teaching in accordance with her students’ needs. She helped me a lot and I made big progress. The course has really made a difference and has boosted my language skills and confidence.”</p>
            </section>
            <section>
                <h3>Riddhi Datta (English Nudi student)</h3>
                <p>“The course comprised of online live interactive classes as well as some online assignments. The course content was very rich and designed in accordance with the day-to-day needs of the workplace. My teacher was one-of-a-kind. She was an enthusiastic person with a strong stimulus for students’ needs. She was extremely well organised and tailored her teaching in accordance with her students’ needs. She helped me a lot and I made big progress. The course has really made a difference and has boosted my language skills and confidence.”</p>
            </section>
        </LayoutWrapper>
    );
}

Testimonials.propTypes = {
    // page : PropTypes.string,
    // createListing : PropTypes.func
}

export default Testimonials;