import React from 'react';
import "./styles.scss"
import whyEnglishNudi from "../../../assets/content/english/why.json"
import { Button, LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements'

const Why = () => {
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