import React from 'react';
import "./styles.scss"
import { LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements';

const What = () => {
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='Benefits at English Nudi'/>
                <SectionContainer imageSide='right'>
                    <>
                        <div>
                            {/* <h2>Benefits at English Nudi :</h2> */}
                            <ul>
                                <li>Updated content, revised at periodic intervals</li>
                                <li>Skilled and Certified trainers available round the clock</li>
                                <li>Interactive sessions to teach grammar concepts with tips</li>
                                <li>Career enrichment programme to enrich learners soft skills</li>
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