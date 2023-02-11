import React from 'react';
import "./styles.scss"
import { LayoutWrapper, LayoutTitle } from '../../elements';

const FAQ = () => {
    const handleAccodian = (e) => {
        e.target.classList.toggle("active");
        const panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
    }
    return (
        <LayoutWrapper>
            <>
                <LayoutTitle title='Need more info?'/>
                <>
                    <button className="accordion" onClick={handleAccodian}>What does the English Nudi course offer?</button>
                    <div className="panel">
                        <p>Each class has a duration of 55 minutes and can be booked by up to 15 students. Our live group classes include a set topic and focus on speaking and listening tasks. You will learn with other students at the same level as you, and you will receive instant feedback on your speaking, grammar and vocabulary. After each class, the teacher will share valuable class materials with you for additional practice.</p>
                    </div>

                    <button className="accordion" onClick={handleAccodian}>What happens in a live class?</button>
                    <div className="panel">
                        <p>Join online classes with students from around the world for real-time speaking, listening and reading practice with an expert British Council teacher. We encourage you to interact with the materials, your teacher and your fellow students. Towards the end of class, the teacher will recap, share all the learning materials and ensure everybody has understood the lesson.</p>
                    </div>
                </>
            </>
        </LayoutWrapper>
    );
}

export default FAQ;