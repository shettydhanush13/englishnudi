import React from 'react';
import "./styles.scss"
import WhatBenefits from '../../../assets/content/english/what.json'
import { LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements';

const What = () => {
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='Benefits at English Nudi'/>
                <SectionContainer imageSide='right'>
                    <>
                        <div>
                            <ul>{WhatBenefits.map((benefit, index) => <li key={index}>{benefit}</li>)}</ul>
                        </div>
                        <img src="https://englishonline.britishcouncil.org/wp-content/uploads/2022/06/EOL-skills_1360-×-850-px-3.jpg" alt="" />
                    </>
                </SectionContainer>
            </>
        </LayoutWrapper>     
    );
}

export default What;