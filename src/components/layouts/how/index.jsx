import React from 'react';
import "./styles.scss"
import { Button, LayoutWrapper, LayoutTitle, SectionContainer } from '../../elements'
import howToLearnData from '../../../assets/content/english/how.json';

const How = () => {
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='How you will learn'/>
                {howToLearnData.map((how, index) => <SectionContainer key={how.title} imageSide={index%2 === 0 ? 'right' : 'left'}>
                    <>
                        <div>
                            <h2>{how.title}</h2>
                            <ul>{how.points.map((point, index) => <li key={`${how.title}-${index}`}>{point}</li>)}</ul>
                            <Button text={how.buttonText}/>
                        </div>
                        <img src={how.imageUrl} alt="" />
                    </>
                </SectionContainer>)}
            </>
        </LayoutWrapper>
    );
}

export default How;