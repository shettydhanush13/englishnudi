import React from 'react';
import "./styles.scss"
import { LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements';

const What = () => {
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='What you will get'/>
                <SectionContainer imageSide='right'>
                    <>
                        <div>
                            <h2>This course includes :</h2>
                            <ul>
                                <li>a wide range of online exercises to practise your English skills</li>
                                <li>55 minutes live online group classes – attend 1 per week at a timing of your choice</li>
                                <li>Live25 teacher-led grammar and pronunciation webinars – attend 4 per calendar month</li>
                            </ul>
                        </div>
                        <img src="https://englishonline.britishcouncil.org/wp-content/uploads/2022/06/EOL-skills_1360-×-850-px-3.jpg" alt="" />
                    </>
                </SectionContainer>
            </>
        </LayoutWrapper>     
    );
}

export default What;